/** chunk id: 145331 params = (module,exports,require) **/
r.d(t, {
    H9: () => S,
    J$: () => m,
    L6: () => f,
    TJ: () => k,
    Tf: () => x,
    _k: () => W,
    fd: () => T,
    gp: () => y,
    i4: () => E,
    iK: () => R,
    kc: () => F,
    kq: () => p,
    oK: () => g,
    oR: () => b,
    pY: () => A,
    rE: () => v,
    uZ: () => L,
    vy: () => O,
    wU: () => I
});
var n, s = r(58149),
    l = r(626584),
    a = r(954571),
    i = r(517381),
    o = r(822382),
    u = r(408730),
    c = r(652215);

function h(e) {
    return e?.trim()?.length ?? 0
}

function d(e) {
    return (0, o.dX)(e)?.trim()?.length ?? 0
}

function _(e) {
    let t = (0, o.bS)(e);
    return i.A.getAnalyticsId(t)
}

function S(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        prevSearchRequestAnalyticsId: n,
        isError: l,
        limit: a,
        offset: i,
        page: o,
        totalResults: _,
        pageResults: S,
        isIndexing: E,
        pageNumMessages: f,
        pageNumLinks: p,
        pageNumEmbeds: g,
        pageNumAttachments: A,
        searchQueryString: y,
        searchQuery: R
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_VIEWED, {
        search_type: t.type,
        search_id: r,
        prev_search_id: n,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        is_error: l,
        limit: a,
        offset: i,
        page: o,
        total_results: _,
        page_results: S,
        is_indexing: E,
        page_num_messages: f,
        page_num_links: p,
        page_num_embeds: g,
        page_num_attach: A,
        search_query_length: h(y),
        search_query_content_length: d(R)
    })
}

function E(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        messageId: n,
        guildId: s,
        channelId: l,
        pageResults: i,
        totalResults: o,
        page: _,
        limit: S,
        offset: E,
        index: f,
        searchQueryString: p,
        searchQuery: g
    } = e;
    a.default.track(c.HAw.SEARCH_RESULT_SELECTED, {
        search_type: t.type,
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        message_id: n,
        guild_id: s,
        channel_id: l,
        page_results: i,
        total_results: o,
        page: _,
        limit: S,
        offset: E,
        index_num: f,
        search_query_length: h(p),
        search_query_content_length: d(g)
    })
}

function f(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        mode: n
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_SORT_CHANGED, {
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        new_sort_type: n
    })
}

function p(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        newPageIndex: n
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_PAGE_CHANGED, {
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        new_page_index: n
    })
}

function g(e) {
    let {
        searchContext: t,
        searchRequestAnalyticsId: r,
        searchQueryString: n,
        searchQuery: l
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_RESULT_EMPTY, {
        search_id: r,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        search_query_length: h(n),
        search_query_content_length: d(l)
    })
}

function A(e) {
    let {
        searchContext: t
    } = e;
    u.A.initialize(t), s.Ay.trackWithMetadata(c.HAw.SEARCH_OPENED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_type: t.type
    })
}

function y(e) {
    let {
        searchContext: t
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_CLOSED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type
    }), u.A.terminate(t)
}

function R(e) {
    let {
        searchContext: t
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_INPUT_CLEARED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type
    })
}

function T(e) {
    let {
        searchContext: t,
        query: r,
        queryString: n,
        searchQuerySource: l
    } = e, a = Object.keys(r), i = a.reduce((e, t) => {
        let n = r[t];
        return e[t] = Array.isArray(n) ? n.length : 1, e
    }, {}), S = null != n ? (0, o._o)(n) : [], E = 0, f = 0, p = 0, g = 0, A = 0, y = 0, R = 0, T = 0, I = 0;
    S.forEach(e => {
        e.type === c.LWr.ANSWER_IN ? E++ : e.type === c.LWr.ANSWER_USERNAME_FROM ? f++ : e.type === c.LWr.ANSWER_USERNAME_MENTIONS ? p++ : e.type === c.LWr.ANSWER_HAS ? g++ : e.type === c.LWr.ANSWER_BEFORE ? A++ : e.type === c.LWr.ANSWER_ON ? y++ : e.type === c.LWr.ANSWER_AFTER ? R++ : e.type === c.LWr.ANSWER_PINNED ? T++ : e.type === c.LWr.ANSWER_AUTHOR_TYPE && I++
    });
    let m = u.A.getQueryId(t);
    s.Ay.trackWithMetadata(c.HAw.MESSAGES_SEARCH_STARTED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: m,
        search_type: t.type,
        search_query_length: h(n),
        search_query_content_length: d(r),
        sort_type: (0, o.XC)(r),
        filter_in_count: E,
        filter_from_count: f,
        filter_mentions_count: p,
        filter_has_count: g,
        filter_before_count: A,
        filter_during_count: y,
        filter_after_count: R,
        filter_pinned_count: T,
        filter_author_type_count: I,
        search_query_source: l
    }), s.Ay.trackWithMetadata(c.HAw.SEARCH_STARTED, {
        search_id: _(t),
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_type: t.type,
        num_modifiers: a.length,
        modifiers: i
    })
}

function I(e) {
    let {
        rating: t,
        searchContext: r
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_MODAL_VIEWED, {
        rating: t,
        search_id: _(r),
        search_type: r.type,
        search_session_id: u.A.getSessionId(r),
        search_query_id: u.A.getQueryId(r)
    })
}

function m(e) {
    let {
        searchContext: t
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_ENTRYPOINT_VIEWED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t)
    })
}

function L(e) {
    let {
        rating: t,
        searchContext: r,
        unsatisfiedQuestionOption: n,
        unsatisfiedQuestionText: l,
        describeSearchQuestionOption: a,
        describeSearchQuestionText: i
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_RESULTS_FEEDBACK_SUBMITTED, {
        search_id: _(r),
        search_type: r.type,
        search_session_id: u.A.getSessionId(r),
        search_query_id: u.A.getQueryId(r),
        rating: t,
        unsatisfied_question_option: n,
        unsatisfied_question_text: l,
        describe_search_question_option: a,
        describe_search_question_text: i
    })
}

function x(e) {
    let {
        searchContext: t
    } = e;
    u.A.enqueueEvent(t, () => {
        s.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_CHANNEL_PREFILL, {
            search_type: t.type,
            search_id: _(t),
            search_session_id: u.A.getSessionId(t)
        })
    })
}
new l.A("SearchTracking");
let C = new Map([
        [c.LWr.ANSWER_IN, "in"],
        [c.LWr.FILTER_IN, "in"],
        [c.LWr.ANSWER_USERNAME_FROM, "from"],
        [c.LWr.FILTER_FROM, "from"],
        [c.LWr.ANSWER_USERNAME_MENTIONS, "mentions"],
        [c.LWr.FILTER_MENTIONS, "mentions"],
        [c.LWr.ANSWER_HAS, "has"],
        [c.LWr.FILTER_HAS, "has"],
        [c.LWr.ANSWER_BEFORE, "before"],
        [c.LWr.FILTER_BEFORE, "before"],
        [c.LWr.ANSWER_ON, "during"],
        [c.LWr.FILTER_ON, "during"],
        [c.LWr.ANSWER_AFTER, "after"],
        [c.LWr.FILTER_AFTER, "after"],
        [c.LWr.ANSWER_PINNED, "pinned"],
        [c.LWr.FILTER_PINNED, "pinned"]
    ]),
    N = new Map([
        [c.x2k.HISTORY, "history"],
        [c.x2k.DATES, "dates"]
    ]);

function b(e) {
    let {
        searchContext: t,
        searchHistoryIndex: r,
        searchHistoryTotalResults: n
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_HISTORY_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_history_index: r,
        search_history_total_results: n
    })
}

function F(e) {
    let {
        searchContext: t,
        searchQuery: r,
        searchQueryString: n,
        searchAutocompleteResultIndex: l,
        searchAutocompleteTotalResults: a,
        searchTokenType: i,
        searchAutocompleteGroup: o,
        isSearchFilterPrefix: S,
        isSearchFilterAnswer: E,
        isSearchFilterComplete: f,
        isInFilterForSelectedChannel: p,
        searchAutocompleteSelectAction: g
    } = e;
    c.x2k.HISTORY;
    let A = C.get(o) ?? N.get(o),
        y = null != i ? C.get(i) : null;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_AUTOCOMPLETE_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_query_length: h(n),
        search_query_content_length: d(r),
        search_autocomplete_result_index: l,
        search_autocomplete_total_results: a,
        search_autocomplete_group: A,
        search_autocomplete_filter_type: y,
        is_search_filter_prefix: S,
        is_search_filter_answer: E,
        is_search_filter_complete: f,
        is_in_filter_for_selected_channel: p,
        search_autocomplete_select_action: g
    })
}

function v(e) {
    let {
        searchContext: t,
        searchAutocompleteSelectAction: r
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_MESSAGES_SELECTED_CHANNEL_FILTER_CLICKED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t),
        search_autocomplete_select_action: r
    })
}
var O = ((n = {}).SEARCH_HEADER = "search_header", n.USER_SETTINGS = "user_settings", n);

function W(e) {
    let {
        searchContext: t,
        prevIsCrossDMSettingEnabled: r,
        isCrossDMSettingEnabled: n,
        location: l
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_CROSS_DM_SETTING_UPDATE, {
        search_id: null != t ? _(t) : null,
        search_type: t?.type,
        search_session_id: null != t ? u.A.getSessionId(t) : null,
        search_query_id: null != t ? u.A.getQueryId(t) : null,
        prev_is_cross_dm_setting_enabled: r,
        is_cross_dm_setting_enabled: n,
        setting_location: l
    })
}

function k(e) {
    let {
        searchContext: t
    } = e;
    s.Ay.trackWithMetadata(c.HAw.SEARCH_FILTERS_MODAL_OPENED, {
        search_id: _(t),
        search_type: t.type,
        search_session_id: u.A.getSessionId(t),
        search_query_id: u.A.getQueryId(t)
    })
}