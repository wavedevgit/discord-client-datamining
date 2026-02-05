package com.google.android.play.core.integrity;

import com.google.android.gms.tasks.Task;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class a {

        /* renamed from: com.google.android.play.core.integrity.c$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class AbstractC0190a {
            public abstract a a();

            public abstract AbstractC0190a b(long j10);
        }

        public static AbstractC0190a c() {
            r0 r0Var = new r0();
            r0Var.c(0);
            return r0Var;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract int a();

        public abstract long b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class b {
        public abstract String a();
    }

    /* renamed from: com.google.android.play.core.integrity.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0191c {
        Task a(d dVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class d {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static abstract class a {
            public abstract d a();

            public abstract a b(String str);
        }

        public static a a() {
            t0 t0Var = new t0();
            t0Var.c(ji.t.h());
            return t0Var;
        }

        public abstract String b();

        public abstract Set c();
    }

    Task a(a aVar);
}
