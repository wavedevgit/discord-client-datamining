package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a {

    /* renamed from: com.google.android.exoplayer2.upstream.cache.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class C0159a extends IOException {
        public C0159a(String str) {
            super(str);
        }

        public C0159a(Throwable th2) {
            super(th2);
        }

        public C0159a(String str, Throwable th2) {
            super(str, th2);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(a aVar, me.c cVar, me.c cVar2);

        void c(a aVar, me.c cVar);

        void d(a aVar, me.c cVar);
    }

    File a(String str, long j10, long j11);

    me.d b(String str);

    me.c c(String str, long j10, long j11);

    void d(me.c cVar);

    void e(me.c cVar);

    void f(String str, me.e eVar);

    me.c g(String str, long j10, long j11);

    void h(File file, long j10);
}
