import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, ScrollView, Text} from 'react-native';
import {DataStore} from '@aws-amplify/datastore';

import {Record} from '../models';

export const RecordScreen = () => {
  const [recordNumber, setRecordNumber] = useState('');
  const [records, setRecords] = useState<Record[]>([]);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    const getRecords = async () => {
      try {
        const _records = await DataStore.query(Record);
        setRecords(_records);
      } catch (err) {
        console.log(err);
      }
    };

    getRecords();
  }, []);

  const refreshRecords = async () => {
    const _records = await DataStore.query(Record);
    console.log(JSON.stringify(_records, null, 2));
    setRecords(_records);
  };

  const createRecord = async () => {
    if (recordNumber === null || isNaN(parseFloat(recordNumber))) {
      alert('no number to save');
      return;
    }

    try {
      await DataStore.save(
        new Record({
          number: parseFloat(recordNumber),
        }),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTagged = async () => {
    const record = records.find((r) => r.id === selected);

    if (record) {
      await DataStore.delete(record);
    }

    refreshRecords();
  };

  const clearStore = async () => {
    await DataStore.clear();
  };

  return (
    <View style={{flex: 1}}>
      <TextInput
        placeholder="record number"
        value={recordNumber?.toString() || ''}
        onChangeText={setRecordNumber}
      />

      <Button title="Create record" onPress={createRecord} />

      <Button title="Clear store" onPress={clearStore} />

      <Button title="Refresh records" onPress={refreshRecords} />

      {selected.length > 0 && <Button title="Delete" onPress={deleteTagged} />}

      <ScrollView style={{flex: 1}}>
        {records.map((record) => (
          <Text key={record.id} onPress={() => setSelected(record.id)}>
            {record.number}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};
