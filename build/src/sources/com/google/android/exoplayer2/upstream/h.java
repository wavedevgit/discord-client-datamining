package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f14102a;

        /* renamed from: b  reason: collision with root package name */
        public final int f14103b;

        /* renamed from: c  reason: collision with root package name */
        public final int f14104c;

        /* renamed from: d  reason: collision with root package name */
        public final int f14105d;

        public a(int i10, int i11, int i12, int i13) {
            this.f14102a = i10;
            this.f14103b = i11;
            this.f14104c = i12;
            this.f14105d = i13;
        }

        public boolean a(int i10) {
            if (i10 == 1) {
                if (this.f14102a - this.f14103b <= 1) {
                    return false;
                }
                return true;
            } else if (this.f14104c - this.f14105d <= 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f14106a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14107b;

        public b(int i10, long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f14106a = i10;
            this.f14107b = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final LoadEventInfo f14108a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaLoadData f14109b;

        /* renamed from: c  reason: collision with root package name */
        public final IOException f14110c;

        /* renamed from: d  reason: collision with root package name */
        public final int f14111d;

        public c(LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, int i10) {
            this.f14108a = loadEventInfo;
            this.f14109b = mediaLoadData;
            this.f14110c = iOException;
            this.f14111d = i10;
        }
    }

    long a(c cVar);

    int b(int i10);

    b c(a aVar, c cVar);

    default void d(long j10) {
    }
}
