class soundBlocks {
    getBlocks() {
        return {
            sound_something_with_block: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'get_sounds',
                        },
                        null,
                    ],
                    type: 'sound_something_with_block',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'get_sounds',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'sound_something_with_block',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'sound_play',
                isNotFor: [],
                func: function(sprite, script) {
                    var soundId = script.getStringValue('VALUE', script);
                    var sound = sprite.parent.getSound(soundId);

                    if (sound) {
                        Entry.Utils.addSoundInstances(
                            createjs.Sound.play(sound.id)
                        );
                    }

                    return script.callReturn();
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            passTest: true,
                            syntax: 'Entry.play_sound(%1)',
                        },
                    ],
                },
            },
            sound_something_second_with_block: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'get_sounds',
                            id: '95dw',
                        },
                        {
                            type: 'number',
                            params: ['1'],
                        },
                        null,
                    ],
                    type: 'sound_something_second_with_block',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'get_sounds',
                            params: ['A&value'],
                        },
                        {
                            type: 'number',
                            params: ['B&value'],
                        },
                        null,
                    ],
                    type: 'sound_something_second_with_block',
                },
                paramsKeyMap: {
                    VALUE: 0,
                    SECOND: 1,
                },
                class: 'sound_play',
                isNotFor: [],
                func: function(sprite, script) {
                    var soundId = script.getStringValue('VALUE', script);
                    var timeValue = script.getNumberValue('SECOND', script);
                    var sound = sprite.parent.getSound(soundId);

                    if (sound) {
                        Entry.Utils.addSoundInstances(
                            createjs.Sound.play(sound.id, {
                                startTime: 0,
                                duration: timeValue * 1000,
                            })
                        );
                    }
                    return script.callReturn();
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            passTest: true,
                            syntax: 'Entry.play_sound_for_sec(%1, %2)',
                        },
                    ],
                },
            },
            sound_from_to: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'get_sounds',
                        },
                        {
                            type: 'text',
                            params: ['1'],
                        },
                        {
                            type: 'text',
                            params: ['10'],
                        },
                        null,
                    ],
                    type: 'sound_from_to',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'get_sounds',
                            params: ['A&value'],
                        },
                        {
                            type: 'text',
                            params: ['B&value'],
                        },
                        {
                            type: 'text',
                            params: ['C&value'],
                        },
                        null,
                    ],
                    type: 'sound_from_to',
                },
                paramsKeyMap: {
                    VALUE: 0,
                    START: 1,
                    END: 2,
                },
                class: 'sound_play',
                isNotFor: [],
                func: function(sprite, script) {
                    var soundId = script.getStringValue('VALUE', script);
                    var sound = sprite.parent.getSound(soundId);

                    if (sound) {
                        var start =
                            script.getNumberValue('START', script) * 1000;
                        var end = script.getNumberValue('END', script) * 1000;
                        createjs.Sound.play(sound.id, {
                            startTime: Math.min(start, end),
                            duration:
                                Math.max(start, end) - Math.min(start, end),
                        });
                    }
                    return script.callReturn();
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            passTest: true,
                            syntax: 'Entry.play_sound_from_to(%1, %2, %3)',
                        },
                    ],
                },
            },
            sound_something_wait_with_block: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'get_sounds',
                        },
                        null,
                    ],
                    type: 'sound_something_wait_with_block',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'get_sounds',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'sound_something_wait_with_block',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'sound_wait',
                isNotFor: [],
                func: function(sprite, script) {
                    if (!script.isPlay) {
                        script.isPlay = true;
                        script.playState = 1;
                        var soundId = script.getStringValue('VALUE', script);
                        var sound = sprite.parent.getSound(soundId);
                        if (sound) {
                            var instance = createjs.Sound.play(sound.id);
                            Entry.Utils.addSoundInstances(instance);
                            setTimeout(function() {
                                script.playState = 0;
                            }, sound.duration * 1000);
                        }
                        return script;
                    } else if (script.playState == 1) {
                        return script;
                    } else {
                        delete script.playState;
                        delete script.isPlay;
                        return script.callReturn();
                    }
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            passTest: true,
                            syntax: 'Entry.play_sound_and_wait(%1)',
                        },
                    ],
                },
            },
            sound_something_second_wait_with_block: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'get_sounds',
                        },
                        {
                            type: 'number',
                            params: ['1'],
                        },
                        null,
                    ],
                    type: 'sound_something_second_wait_with_block',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'get_sounds',
                            params: ['A&value'],
                        },
                        {
                            type: 'number',
                            params: ['B&value'],
                        },
                        null,
                    ],
                    type: 'sound_something_second_wait_with_block',
                },
                paramsKeyMap: {
                    VALUE: 0,
                    SECOND: 1,
                },
                class: 'sound_wait',
                isNotFor: [],
                func: function(sprite, script) {
                    if (!script.isPlay) {
                        script.isPlay = true;
                        script.playState = 1;
                        var soundId = script.getStringValue('VALUE', script);
                        var sound = sprite.parent.getSound(soundId);
                        if (sound) {
                            var instance = createjs.Sound.play(sound.id);
                            var timeValue = script.getNumberValue(
                                'SECOND',
                                script
                            );
                            setTimeout(function() {
                                instance.stop();
                                script.playState = 0;
                            }, timeValue * 1000);
                            instance.addEventListener('complete', function(
                                e
                            ) {});
                        }
                        return script;
                    } else if (script.playState == 1) {
                        return script;
                    } else {
                        delete script.isPlay;
                        delete script.playState;
                        return script.callReturn();
                    }
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            passTest: true,
                            syntax: 'Entry.play_sound_for_sec_and_wait(%1, %2)',
                        },
                    ],
                },
            },
            sound_from_to_and_wait: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'get_sounds',
                        },
                        {
                            type: 'text',
                            params: ['1'],
                        },
                        {
                            type: 'text',
                            params: ['10'],
                        },
                        null,
                    ],
                    type: 'sound_from_to_and_wait',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'get_sounds',
                            params: ['A&value'],
                        },
                        {
                            type: 'text',
                            params: ['B&value'],
                        },
                        {
                            type: 'text',
                            params: ['C&value'],
                        },
                        null,
                    ],
                    type: 'sound_from_to_and_wait',
                },
                paramsKeyMap: {
                    VALUE: 0,
                    START: 1,
                    END: 2,
                },
                class: 'sound_wait',
                isNotFor: [],
                func: function(sprite, script) {
                    if (!script.isPlay) {
                        script.isPlay = true;
                        script.playState = 1;
                        var soundId = script.getStringValue('VALUE', script);
                        var sound = sprite.parent.getSound(soundId);
                        if (sound) {
                            var start =
                                script.getNumberValue('START', script) * 1000;
                            var end =
                                script.getNumberValue('END', script) * 1000;
                            var startValue = Math.min(start, end);
                            var endValue = Math.max(start, end);
                            var duration = endValue - startValue;

                            createjs.Sound.play(sound.id, {
                                startTime: startValue,
                                duration: duration,
                            });

                            setTimeout(function() {
                                script.playState = 0;
                            }, duration);
                        }
                        return script;
                    } else if (script.playState == 1) {
                        return script;
                    } else {
                        delete script.isPlay;
                        delete script.playState;
                        return script.callReturn();
                    }
                },
                syntax: {
                    js: [],
                    py: ['Entry.play_sound_from_to_and_wait(%1, %2, %3)'],
                },
            },
            sound_volume_change: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'number',
                            params: ['10'],
                        },
                        null,
                    ],
                    type: 'sound_volume_change',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'number',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'sound_volume_change',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'sound_volume',
                isNotFor: [],
                func: function(sprite, script) {
                    var value = script.getNumberValue('VALUE', script) / 100;
                    value = value + createjs.Sound.getVolume();
                    if (value > 1) value = 1;
                    if (value < 0) value = 0;
                    createjs.Sound.setVolume(value);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['Entry.add_sound_volume(%1)'] },
            },
            sound_volume_set: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'number',
                            params: ['10'],
                        },
                        null,
                    ],
                    type: 'sound_volume_set',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'number',
                            params: ['A&value'],
                        },
                        null,
                    ],
                    type: 'sound_volume_set',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'sound_volume',
                isNotFor: [],
                func: function(sprite, script) {
                    var value = script.getNumberValue('VALUE', script) / 100;
                    if (value > 1) value = 1;
                    if (value < 0) value = 0;
                    createjs.Sound.setVolume(value);
                    return script.callReturn();
                },
                syntax: { js: [], py: ['Entry.set_sound_volume(%1)'] },
            },
            sound_silent_all: {
                color: '#A4D01D',
                skeleton: 'basic',
                statements: [],
                params: [
                    {
                        type: 'Indicator',
                        img: 'block_icon/sound_03.png',
                        size: 12,
                    },
                ],
                events: {},
                def: {
                    params: [null],
                    type: 'sound_silent_all',
                },
                class: 'sound_stop',
                isNotFor: [],
                func: function(sprite, script) {
                    createjs.Sound.stop();
                    return script.callReturn();
                },
                syntax: { js: [], py: ['Entry.stop_sound()'] },
            },
        };
    }
}
export default new soundBlocks();
