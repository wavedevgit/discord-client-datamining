package com.android.volley;

import java.util.Collections;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public byte[] f8757a;

        /* renamed from: b  reason: collision with root package name */
        public String f8758b;

        /* renamed from: c  reason: collision with root package name */
        public long f8759c;

        /* renamed from: d  reason: collision with root package name */
        public long f8760d;

        /* renamed from: e  reason: collision with root package name */
        public long f8761e;

        /* renamed from: f  reason: collision with root package name */
        public long f8762f;

        /* renamed from: g  reason: collision with root package name */
        public Map f8763g = Collections.EMPTY_MAP;

        /* renamed from: h  reason: collision with root package name */
        public List f8764h;

        public boolean a() {
            return b(System.currentTimeMillis());
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean b(long j10) {
            if (this.f8761e < j10) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean c(long j10) {
            if (this.f8762f < j10) {
                return true;
            }
            return false;
        }
    }

    a a(String str);

    void b(String str, boolean z10);

    void c(String str, a aVar);

    void initialize();
}
