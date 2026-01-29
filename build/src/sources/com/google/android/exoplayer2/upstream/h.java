package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f14473a;

        /* renamed from: b  reason: collision with root package name */
        public final int f14474b;

        /* renamed from: c  reason: collision with root package name */
        public final int f14475c;

        /* renamed from: d  reason: collision with root package name */
        public final int f14476d;

        public a(int i10, int i11, int i12, int i13) {
            this.f14473a = i10;
            this.f14474b = i11;
            this.f14475c = i12;
            this.f14476d = i13;
        }

        public boolean a(int i10) {
            if (i10 == 1) {
                if (this.f14473a - this.f14474b <= 1) {
                    return false;
                }
                return true;
            } else if (this.f14475c - this.f14476d <= 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f14477a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14478b;

        public b(int i10, long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f14477a = i10;
            this.f14478b = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final LoadEventInfo f14479a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaLoadData f14480b;

        /* renamed from: c  reason: collision with root package name */
        public final IOException f14481c;

        /* renamed from: d  reason: collision with root package name */
        public final int f14482d;

        public c(LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, int i10) {
            this.f14479a = loadEventInfo;
            this.f14480b = mediaLoadData;
            this.f14481c = iOException;
            this.f14482d = i10;
        }
    }

    long a(c cVar);

    int b(int i10);

    b c(a aVar, c cVar);

    default void d(long j10) {
    }
}
