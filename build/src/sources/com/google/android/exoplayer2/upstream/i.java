package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f14133a;

        /* renamed from: b  reason: collision with root package name */
        public final int f14134b;

        /* renamed from: c  reason: collision with root package name */
        public final int f14135c;

        /* renamed from: d  reason: collision with root package name */
        public final int f14136d;

        public a(int i10, int i11, int i12, int i13) {
            this.f14133a = i10;
            this.f14134b = i11;
            this.f14135c = i12;
            this.f14136d = i13;
        }

        public boolean a(int i10) {
            if (i10 == 1) {
                if (this.f14133a - this.f14134b <= 1) {
                    return false;
                }
                return true;
            } else if (this.f14135c - this.f14136d <= 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f14137a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14138b;

        public b(int i10, long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            this.f14137a = i10;
            this.f14138b = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final LoadEventInfo f14139a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaLoadData f14140b;

        /* renamed from: c  reason: collision with root package name */
        public final IOException f14141c;

        /* renamed from: d  reason: collision with root package name */
        public final int f14142d;

        public c(LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, int i10) {
            this.f14139a = loadEventInfo;
            this.f14140b = mediaLoadData;
            this.f14141c = iOException;
            this.f14142d = i10;
        }
    }

    long a(c cVar);

    int b(int i10);

    b c(a aVar, c cVar);

    default void d(long j10) {
    }
}
