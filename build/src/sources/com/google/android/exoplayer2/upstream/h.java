package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f13070a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13071b;

        /* renamed from: c  reason: collision with root package name */
        public final int f13072c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13073d;

        public a(int i10, int i11, int i12, int i13) {
            this.f13070a = i10;
            this.f13071b = i11;
            this.f13072c = i12;
            this.f13073d = i13;
        }

        public boolean a(int i10) {
            if (i10 == 1) {
                if (this.f13070a - this.f13071b <= 1) {
                    return false;
                }
                return true;
            } else if (this.f13072c - this.f13073d <= 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f13074a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13075b;

        public b(int i10, long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f13074a = i10;
            this.f13075b = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final LoadEventInfo f13076a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaLoadData f13077b;

        /* renamed from: c  reason: collision with root package name */
        public final IOException f13078c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13079d;

        public c(LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, int i10) {
            this.f13076a = loadEventInfo;
            this.f13077b = mediaLoadData;
            this.f13078c = iOException;
            this.f13079d = i10;
        }
    }

    long a(c cVar);

    int b(int i10);

    b c(a aVar, c cVar);

    default void d(long j10) {
    }
}
