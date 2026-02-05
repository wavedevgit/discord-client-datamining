package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface h {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f13455a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13456b;

        /* renamed from: c  reason: collision with root package name */
        public final int f13457c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13458d;

        public a(int i10, int i11, int i12, int i13) {
            this.f13455a = i10;
            this.f13456b = i11;
            this.f13457c = i12;
            this.f13458d = i13;
        }

        public boolean a(int i10) {
            if (i10 == 1) {
                if (this.f13455a - this.f13456b <= 1) {
                    return false;
                }
                return true;
            } else if (this.f13457c - this.f13458d <= 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f13459a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13460b;

        public b(int i10, long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            ne.a.a(z10);
            this.f13459a = i10;
            this.f13460b = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final LoadEventInfo f13461a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaLoadData f13462b;

        /* renamed from: c  reason: collision with root package name */
        public final IOException f13463c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13464d;

        public c(LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, int i10) {
            this.f13461a = loadEventInfo;
            this.f13462b = mediaLoadData;
            this.f13463c = iOException;
            this.f13464d = i10;
        }
    }

    long a(c cVar);

    int b(int i10);

    b c(a aVar, c cVar);

    default void d(long j10) {
    }
}
