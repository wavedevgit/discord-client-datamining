package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.source.MediaLoadData;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface i {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int f13556a;

        /* renamed from: b  reason: collision with root package name */
        public final int f13557b;

        /* renamed from: c  reason: collision with root package name */
        public final int f13558c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13559d;

        public a(int i10, int i11, int i12, int i13) {
            this.f13556a = i10;
            this.f13557b = i11;
            this.f13558c = i12;
            this.f13559d = i13;
        }

        public boolean a(int i10) {
            if (i10 == 1) {
                if (this.f13556a - this.f13557b <= 1) {
                    return false;
                }
                return true;
            } else if (this.f13558c - this.f13559d <= 1) {
                return false;
            } else {
                return true;
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f13560a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13561b;

        public b(int i10, long j10) {
            boolean z10;
            if (j10 >= 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            oe.a.a(z10);
            this.f13560a = i10;
            this.f13561b = j10;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c {

        /* renamed from: a  reason: collision with root package name */
        public final LoadEventInfo f13562a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaLoadData f13563b;

        /* renamed from: c  reason: collision with root package name */
        public final IOException f13564c;

        /* renamed from: d  reason: collision with root package name */
        public final int f13565d;

        public c(LoadEventInfo loadEventInfo, MediaLoadData mediaLoadData, IOException iOException, int i10) {
            this.f13562a = loadEventInfo;
            this.f13563b = mediaLoadData;
            this.f13564c = iOException;
            this.f13565d = i10;
        }
    }

    long a(c cVar);

    int b(int i10);

    b c(a aVar, c cVar);

    default void d(long j10) {
    }
}
