package com.google.android.exoplayer2.analytics;

import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.analytics.AnalyticsListener;
import rd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(AnalyticsListener.EventTime eventTime, String str, boolean z10);

        void b(AnalyticsListener.EventTime eventTime, String str);

        void c(AnalyticsListener.EventTime eventTime, String str);

        void d(AnalyticsListener.EventTime eventTime, String str, String str2);
    }

    String a();

    void b(a aVar);

    void c(AnalyticsListener.EventTime eventTime);

    void d(AnalyticsListener.EventTime eventTime);

    String e(Timeline timeline, r.b bVar);

    boolean f(AnalyticsListener.EventTime eventTime, String str);

    void g(AnalyticsListener.EventTime eventTime, int i10);

    void h(AnalyticsListener.EventTime eventTime);
}
