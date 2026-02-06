package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f13416a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13417b;

        /* renamed from: c  reason: collision with root package name */
        public final int f13418c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13419d;

        public a(int i10, int i11, int i12, int i13) {
            this.f13416a = i10;
            this.f13417b = i11;
            this.f13418c = i12;
            this.f13419d = i13;
        }

        public boolean a(int i10) {
            if (i10 == 1) {
                if (this.f13416a - this.f13417b <= 1) {
                    return false;
                }
                return true;
            } else if (this.f13418c - this.f13419d <= 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f13420a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13421b;

        public b(int i10, long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f13420a = i10;
            this.f13421b = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final LoadEventInfo f13422a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaLoadData f13423b;

        /* renamed from: c  reason: collision with root package name */
        public final IOException f13424c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13425d;

        public c(LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, int i10) {
            this.f13422a = loadEventInfo;
            this.f13423b = mediaLoadData;
            this.f13424c = iOException;
            this.f13425d = i10;
        }
    }

    long a(c cVar);

    int b(int i10);

    b c(a aVar, c cVar);

    default void d(long j10) {
    }
}
