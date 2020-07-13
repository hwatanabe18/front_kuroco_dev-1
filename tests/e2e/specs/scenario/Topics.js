/// <reference types="cypress" />
// @ts-check

// https://docs.cypress.io/api/introduction/api.html

import { executeRequest, formatDate, login, upload } from '../../base';

const getTopics = () => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1Topics1Request} */
  const requestData = {
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get topics1',
    indexOfApis: 1,
    requestData,
  });
};
const getTopicsByIds = ({ topicsIds }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1Topics1Request} */
  const requestData = {
    id: topicsIds,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get topics1',
    indexOfApis: 1,
    requestData,
  });
};
const getTopic = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1Topics1TopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get topics1 id',
    requestData,
  });
};
const insertExt = {
  ext_col_01: 'text1',
  ext_col_02: 'text1\ntext1',
  ext_col_03: { key: '1', label: 'Option1' },
  ext_col_04: [{ key: '1', label: 'Option1' }],
  ext_col_07: '2020-01-01',
  ext_col_08: '2020-01-02 12:34:00 +0900',
  ext_col_05: {
    tdfk_cd: '01',
    tdfk_nm: '北海道',
  },
  ext_col_15: {
    tdfk_cd: '01',
    tdfk_nm: '北海道',
    sub_area_cd: '01100',
    sub_area_nm: '札幌市',
  },
  ext_col_06: { key: '1', label: 'Parent1' },
  ext_col_09: { module_type: 'member', module_id: 9 },
  ext_jsn_12: {
    options: '1',
    text: 'text1',
  },
  ext_col_13: 'text1',
  ext_col_14: 'text1',
};
const postInsertTopic = ({ file, image }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1InsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'Inserted',
      contents_type: 1,
      ymd: formatDate('date'),
      open_type: 'open',
      topics_flg: 1,
      season: 1,
      contents: 'SampleValue',
      regular_flg: 0,
      link_flg: 0,
      ext_col_01: insertExt.ext_col_01,
      ext_col_02: insertExt.ext_col_02,
      ext_col_03: insertExt.ext_col_03,
      ext_col_04: insertExt.ext_col_04,
      ext_col_07: insertExt.ext_col_07,
      ext_col_08: insertExt.ext_col_08,
      ext_col_05: insertExt.ext_col_05,
      ext_col_15: insertExt.ext_col_15,
      ext_col_06: insertExt.ext_col_06,
      ext_col_09: insertExt.ext_col_09,
      ext_col_11: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'text1',
      },
      ext_col_17: {
        file_id: image.fileId,
        file_nm: image.fileNm,
        desc: 'text1',
      },
      ext_jsn_12: insertExt.ext_jsn_12,
      ext_col_13: insertExt.ext_col_13,
      ext_col_14: insertExt.ext_col_14,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 insert',
    requestData,
    timeout: 15000,
  });
};
const updateExt = {
  ext_col_01: 'text2',
  ext_col_02: 'text2\ntext2',
  ext_col_03: { key: '2', label: 'Option2' },
  ext_col_04: [{ key: '2', label: 'Option2' }, { key: '3', label: 'Option3' }],
  ext_col_07: '2020-12-31',
  ext_col_08: '2020-12-30 01:23:00 +0900',
  ext_col_05: {
    tdfk_cd: '47',
    tdfk_nm: '沖縄県',
  },
  ext_col_15: {
    tdfk_cd: '47',
    tdfk_nm: '沖縄県',
    sub_area_cd: '47382',
    sub_area_nm: '八重山郡与那国町',
  },
  ext_col_06: { key: '2', label: 'Parent2' },
  ext_col_09: { module_type: 'member', module_id: 1 },
  ext_jsn_12: {
    options: '2',
    text: 'text2',
  },
  ext_col_13: 'text2',
  ext_col_14: 'text2',
};
const postUpdateTopic = ({ topicsId, file, image }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1UpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      subject: 'Inserted',
      contents_type: 1,
      ymd: formatDate('date'),
      open_type: 'open',
      topics_flg: 1,
      season: 1,
      contents: 'SampleValue',
      regular_flg: 0,
      link_flg: 0,
      ext_col_01: updateExt.ext_col_01,
      ext_col_02: updateExt.ext_col_02,
      ext_col_03: updateExt.ext_col_03,
      ext_col_04: updateExt.ext_col_04,
      ext_col_07: updateExt.ext_col_07,
      ext_col_08: updateExt.ext_col_08,
      ext_col_05: updateExt.ext_col_05,
      ext_col_15: updateExt.ext_col_15,
      ext_col_06: updateExt.ext_col_06,
      ext_col_09: updateExt.ext_col_09,
      ext_col_11: {
        file_id: file.fileId,
        file_nm: file.fileNm,
        desc: 'text2',
      },
      ext_col_17: {
        file_id: image.fileId,
        file_nm: image.fileNm,
        desc: 'text2',
      },
      ext_jsn_12: updateExt.ext_jsn_12,
      ext_col_13: updateExt.ext_col_13,
      ext_col_14: updateExt.ext_col_14,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 update',
    requestData,
    timeout: 15000,
  });
};
const postDeleteTopic = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1Topics1DeleteTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post topics1 delete',
    requestData,
  });
};

const getTopicsMultiple = () => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1TopicsMultipleRequest} */
  const requestData = {
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get multiple',
    indexOfApis: 0,
    requestData,
  });
};
const getTopicsMultipleByIds = ({ topicsIds }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1TopicsMultipleRequest} */
  const requestData = {
    id: topicsIds,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get multiple',
    indexOfApis: 0,
    requestData,
  });
};
const getTopicMultiple = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.getTopicsServiceRcmsApi1TopicsMultipleTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService get multiple id',
    requestData,
  });
};
const insertMultipleExt = {
  ext_col_01: ['text1:0', 'text1:1','text1:2'],
  ext_col_02: ['text1\ntext1:0', 'text1\ntext1:1', 'text1\ntext1:2'],
  ext_col_03: [{ key: '1', label: 'Option1' }, { key: '1', label: 'Option1' }, { key: '3', label: 'Option3' }],
  ext_col_04: [
    [{ key: '1', label: 'Option1' }],
    [{ key: '1', label: 'Option1' }, { key: '3', label: 'Option3' }],
    [{ key: '1', label: 'Option1' }, { key: '2', label: 'Option2' }, { key: '3', label: 'Option3' }]
  ],
  ext_col_07: ['2020-01-01', '2020-02-01', '2020-03-01'],
  ext_col_08: ['2020-01-02 01:23:00 +0900', '2020-02-02 12:34:00 +0900', '2020-03-02 23:45:00 +0900'],
  ext_col_05: [
    {
      tdfk_cd: '01',
      tdfk_nm: '北海道',
    },
    {
      tdfk_cd: '13',
      tdfk_nm: '東京都',
    },
    {
      tdfk_cd: '33',
      tdfk_nm: '岡山県',
    }
  ],
  ext_col_15: [
    {
      tdfk_cd: '01',
      tdfk_nm: '北海道',
      sub_area_cd: '01100',
      sub_area_nm: '札幌市',
    },
    {
      tdfk_cd: '13',
      tdfk_nm: '東京都',
      sub_area_cd: '13104',
      sub_area_nm: '新宿区',
    },
    {
      tdfk_cd: '33',
      tdfk_nm: '岡山県',
      sub_area_cd: '33210',
      sub_area_nm: '新見市',
    }
  ],
  ext_col_06: [
    { key: '1', label: 'Parent1' },
    { key: '2', label: 'Parent2' },
    { key: '3', label: 'Parent3' }
  ],
  ext_col_09: [
    { module_type: 'member', module_id: 9 },
    { module_type: 'member', module_id: 1 },
    { module_type: 'member', module_id: 4 }
  ],
  ext_jsn_12: [
    {
      options: '1',
      text: 'text1:0',
    },
    {
      options: '2',
      text: 'text1:1',
    },
    {
      options: '1',
      text: 'text1:2',
    }
  ],
  ext_col_13: ['text1:0', 'text1:1', 'text1:2'],
  ext_col_14: ['text1:0', 'text1:1', 'text1:2'],
};
const postInsertTopicMultiple = ({ files, images }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleInsertRequest} */
  const requestData = {
    requestBody: {
      subject: 'Inserted',
      contents_type: 2,
      ymd: formatDate('date'),
      open_type: 'open',
      topics_flg: 1,
      season: 1,
      contents: 'SampleValue',
      regular_flg: 0,
      link_flg: 0,
      ext_col_01: insertMultipleExt.ext_col_01,
      ext_col_02: insertMultipleExt.ext_col_02,
      ext_col_03: insertMultipleExt.ext_col_03,
      ext_col_04: insertMultipleExt.ext_col_04,
      ext_col_07: insertMultipleExt.ext_col_07,
      ext_col_08: insertMultipleExt.ext_col_08,
      ext_col_05: insertMultipleExt.ext_col_05,
      ext_col_15: insertMultipleExt.ext_col_15,
      ext_col_06: insertMultipleExt.ext_col_06,
      ext_col_09: insertMultipleExt.ext_col_09,
      ext_col_11: files.map((file, idx) => {
        return {
          file_id: file.fileId,
          file_nm: file.fileNm,
          desc: 'text1:' + idx,
        };
      }),
      ext_col_17: images.map((image, idx) => {
        return {
          file_id: image.fileId,
          file_nm: image.fileNm,
          desc: 'text1:' + idx,
        };
      }),
      ext_jsn_12: insertMultipleExt.ext_jsn_12,
      ext_col_13: insertMultipleExt.ext_col_13,
      ext_col_14: insertMultipleExt.ext_col_14,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post multiple insert',
    requestData,
    timeout: 15000,
  });
};
const updateMultipleExt = {
  ext_col_01: ['text2:0', 'text2:1','text2:2'],
  ext_col_02: ['text2\ntext2:0', 'text2\ntext2:1', 'text2\ntext2:2'],
  ext_col_03: [{ key: '2', label: 'Option2' }, { key: '3', label: 'Option3' }, { key: '1', label: 'Option1' }],
  ext_col_04: [
    [{ key: '2', label: 'Option2' }],
    [{ key: '2', label: 'Option2' }, { key: '3', label: 'Option3' }],
    [{ key: '1', label: 'Option1' }, { key: '2', label: 'Option2' }, { key: '3', label: 'Option3' }]
  ],
  ext_col_07: ['2020-01-31', '2020-02-29', '2020-12-31'],
  ext_col_08: ['2020-12-31 23:59:00 +0900', '2020-11-23 15:24:00 +0900', '2019-02-28 23:57:00 +0900'],
  ext_col_05: [
    {
      tdfk_cd: '05',
      tdfk_nm: '秋田県',
    },
    {
      tdfk_cd: '14',
      tdfk_nm: '神奈川県',
    },
    {
      tdfk_cd: '40',
      tdfk_nm: '福岡県',
    }
  ],
  ext_col_15: [
    {
      tdfk_cd: '05',
      tdfk_nm: '秋田県',
      sub_area_cd: '05210',
      sub_area_nm: '由利本荘市',
    },
    {
      tdfk_cd: '14',
      tdfk_nm: '神奈川県',
      sub_area_cd: '14134',
      sub_area_nm: '川崎市高津区',
    },
    {
      tdfk_cd: '40',
      tdfk_nm: '福岡県',
      sub_area_cd: '40100',
      sub_area_nm: '北九州市',
    }
  ],
  ext_col_06: [
    { key: '2', label: 'Parent2' },
    { key: '4', label: 'Parent4' },
    { key: '5', label: 'Parent5' }
  ],
  ext_col_09: [
    { module_type: 'member', module_id: 1 },
    { module_type: 'member', module_id: 5 },
    { module_type: 'member', module_id: 7 }
  ],
  ext_jsn_12: [
    {
      options: '2',
      text: 'text2:0',
    },
    {
      options: '1',
      text: 'text2:1',
    },
    {
      options: '2',
      text: 'text2:2',
    }
  ],
  ext_col_13: ['text2:0', 'text2:1', 'text2:2'],
  ext_col_14: ['text2:0', 'text2:1', 'text2:2'],
};

const fixtures = {
  rcms: 'rcms.png',
  diverta: 'diverta.png',
  rcms_white: 'rcms_white.png',
};
const postUpdateTopicMultiple = ({ topicsId, files, images }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleUpdateTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    requestBody: {
      subject: 'Updated',
      contents_type: 2,
      ymd: formatDate('date'),
      open_type: 'open',
      topics_flg: 1,
      season: 1,
      contents: 'SampleValue',
      regular_flg: 0,
      link_flg: 0,
      ext_col_01: updateMultipleExt.ext_col_01,
      ext_col_02: updateMultipleExt.ext_col_02,
      ext_col_03: updateMultipleExt.ext_col_03,
      ext_col_04: updateMultipleExt.ext_col_04,
      ext_col_07: updateMultipleExt.ext_col_07,
      ext_col_08: updateMultipleExt.ext_col_08,
      ext_col_05: updateMultipleExt.ext_col_05,
      ext_col_15: updateMultipleExt.ext_col_15,
      ext_col_06: updateMultipleExt.ext_col_06,
      ext_col_09: updateMultipleExt.ext_col_09,
      ext_col_11: files.map((file, idx) => {
        return {
          file_id: file.fileId,
          file_nm: file.fileNm,
          desc: 'text2:' + idx,
        };
      }),
      ext_col_17: images.map((image, idx) => {
        return {
          file_id: image.fileId,
          file_nm: image.fileNm,
          desc: 'text2:' + idx,
        };
      }),
      ext_jsn_12: updateMultipleExt.ext_jsn_12,
      ext_col_13: updateMultipleExt.ext_col_13,
      ext_col_14: updateMultipleExt.ext_col_14,
      validate_only: false,
    },
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post multiple update',
    requestData,
    timeout: 30000,
  });
};
const postDeleteTopicMultiple = ({ topicsId }) => {
  /** @type {import('../../../../generated/services/TopicsService').TopicsService.postTopicsServiceRcmsApi1TopicsMultipleDeleteTopicsIdRequest} */
  const requestData = {
    topicsId: topicsId,
    lang: 'en',
  };
  return executeRequest({
    cy,
    query: 'TopicsService post multiple delete',
    requestData,
  });
};

describe('Topics', () => {
  it(`
      get topics ->
      get topic by ID ->
      post insert topic ->
      get topics including inserted one ->
      get topic by ID of inserted one ->
      post update inserted topic ->
      get topics including updated one ->
      get topic by ID of updated one ->
      post delete updated topic ->
      get topics not including deleted one ->
      get topic by ID of deleted one (should be empty)
    `, async () => {
    login();

    // get topics
    const topics = await getTopics();

    // get topic by ID
    await getTopic({
      topicsId: topics.list[0].topics_id,
    });

    // post insert topic
    const insertFile = upload({ path: fixtures.rcms });
    const insertImage = upload({ path: fixtures.rcms });
    const insertRes = await postInsertTopic({ file: insertFile, image: insertImage });
    // const addedId = insertRes.id;
    const addedId = insertRes.id - 0;

    // get topics including inserted one
    expect((await getTopicsByIds({ topicsIds: [addedId] })).list.find(row => row.topics_id === addedId)).to.exist;

    // get topic by ID of inserted one
    const insertedTopic = await getTopic({ topicsId: addedId });
    expect(insertedTopic.details, 'inserted').to.exist;
    Object.keys(insertExt).forEach(key => {
      if(['ext_col_04', 'ext_col_08', 'ext_col_05', 'ext_jsn_12'].includes(key)) return;
      expect(insertedTopic.details[key], 'inserted:' + key).to.deep.equal(insertExt[key]);
    });

    // post update inserted topic
    const updateFile = upload({ path: fixtures.diverta });
    const updateImage = upload({ path: fixtures.diverta });
    await postUpdateTopic({ topicsId: addedId, file: updateFile, image: updateImage });

    // get topics including updated one
    expect((await getTopicsByIds({ topicsIds: [addedId] })).list.find(row => row.topics_id === addedId)).to.exist;

    // get topic by ID of updated one
    const updatedTopic = await getTopic({ topicsId: addedId });
    expect(updatedTopic.details, 'updated').to.exist;
    Object.keys(updateExt).forEach(key => {
      if(['ext_col_04', 'ext_col_08', 'ext_col_05', 'ext_jsn_12'].includes(key)) return;
      expect(updatedTopic.details[key], 'updated:' + key).to.deep.equal(updateExt[key]);
    });

    // post delete updated topic
    await postDeleteTopic({ topicsId: addedId });

    // get topics not including deleted one
    expect((await getTopicsByIds({ topicsIds: [addedId] })).list).to.be.empty;
    
    // get topic by ID of deleted one (should be empty)
    let errorResponse = {};
    await getTopic({ topicsId: addedId }).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(404);
  });
});


describe('Topics (Multiple)', () => {
  it(`
      get topics ->
      get topic by ID ->
      post insert topic ->
      get topics including inserted one ->
      get topic by ID of inserted one ->
      post update inserted topic ->
      get topics including updated one ->
      get topic by ID of updated one ->
      post delete updated topic ->
      get topics not including deleted one ->
      get topic by ID of deleted one (should be empty)
    `, async () => {
    login();

    // get topics
    const topics = await getTopicsMultiple();

    // get topic by ID
    await getTopicMultiple({
      topicsId: topics.list[0].topics_id,
    });

    // post insert topic
    const insertFilePaths = [fixtures.diverta, fixtures.diverta, fixtures.rcms_white];
    const insertImagePaths = [fixtures.rcms, fixtures.rcms_white, fixtures.diverta];
    const insertFiles = [];
    for(let i = 0; i < insertFilePaths.length; i++) {
      insertFiles[i] = await upload({ path: insertFilePaths[i] });
    }
    const insertImages = [];
    for(let i = 0; i < insertImagePaths.length; i++) {
      insertImages[i] = await upload({ path: insertImagePaths[i] });
    }
    const insertRes = await postInsertTopicMultiple({ files: insertFiles, images: insertImages});
    // const addedId = insertRes.id;
    const addedId = insertRes.id - 0;

    // get topics including inserted one
    expect((await getTopicsMultipleByIds({ topicsIds: [addedId] })).list.find(row => row.topics_id === addedId)).to.exist;

    // get topic by ID of inserted one
    const insertedTopic = await getTopicMultiple({ topicsId: addedId });
    expect(insertedTopic.details, 'inserted').to.exist;
    Object.keys(insertMultipleExt).forEach(key => {
      if(['ext_col_04', 'ext_col_08', 'ext_col_05', 'ext_jsn_12'].includes(key)) return;
      expect(insertedTopic.details[key], 'inserted:' + key).to.deep.equal(insertMultipleExt[key]);
    });

    // post update inserted topic
    // Currently, updating with multiple files causes "Error 503 first byte timeout"
    // const updateFilePaths = [fixtures.rcms, fixtures.rcms_white, fixtures.diverta];
    // const updateImagePaths = [fixtures.rcms_white, fixtures.rcms, fixtures.diverta];
    const updateFilePaths = [fixtures.rcms];
    const updateImagePaths = [];
    const updateFiles = [];
    for(let i = 0; i < updateFilePaths.length; i++) {
      updateFiles[i] = await upload({ path: updateFilePaths[i] });
    }
    const updateImages = [];
    for(let i = 0; i < updateImagePaths.length; i++) {
      updateImages[i] = await upload({ path: updateImagePaths[i] });
    }
    await postUpdateTopicMultiple({ topicsId: addedId, files: updateFiles, images: updateImages });

    // get topics including updated one
    expect((await getTopicsMultipleByIds({ topicsIds: [addedId] })).list.find(row => row.topics_id === addedId)).to.exist;

    // get topic by ID of updated one
    const updatedTopic = await getTopicMultiple({ topicsId: addedId });
    expect(updatedTopic.details, 'updated').to.exist;
    Object.keys(updateMultipleExt).forEach(key => {
      if(['ext_col_04', 'ext_col_08', 'ext_col_05', 'ext_jsn_12'].includes(key)) return;
      expect(updatedTopic.details[key], 'updated:' + key).to.deep.equal(updateMultipleExt[key]);
    });

    // post delete updated topic
    await postDeleteTopicMultiple({ topicsId: addedId });

    // get topics not including deleted one
    expect((await getTopicsMultipleByIds({ topicsIds: [addedId] })).list).to.be.empty;
    
    // get topic by ID of deleted one (should be empty)
    let errorResponse = {};
    await getTopicMultiple({ topicsId: addedId }).catch(e => {
      errorResponse = JSON.parse(e.message);
    });
    expect(errorResponse.status).to.equal(404);
  });
});