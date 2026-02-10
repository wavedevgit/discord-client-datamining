package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a {

    /* renamed from: com.google.android.exoplayer2.upstream.cache.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0195a extends IOException {
        public C0195a(String str) {
            super(str);
        }

        public C0195a(Throwable th2) {
            super(th2);
        }

        public C0195a(String str, Throwable th2) {
            super(str, th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void b(a aVar, ne.c cVar);

        void c(a aVar, ne.c cVar, ne.c cVar2);

        void f(a aVar, ne.c cVar);
    }

    File a(String str, long j10, long j11);

    ne.d b(String str);

    ne.c c(String str, long j10, long j11);

    void d(String str, ne.e eVar);

    void e(ne.c cVar);

    ne.c f(String str, long j10, long j11);

    void g(File file, long j10);

    void h(ne.c cVar);
}
