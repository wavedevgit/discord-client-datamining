package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.SocketTimeoutException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import le.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface g extends DataSource {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final C0176g f13445a = new C0176g();

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public final g createDataSource() {
            return b(this.f13445a);
        }

        protected abstract g b(C0176g c0176g);

        public final c c(Map map) {
            this.f13445a.a(map);
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends d {
        public b(IOException iOException, com.google.android.exoplayer2.upstream.a aVar) {
            super("Cleartext HTTP traffic not permitted. See https://developer.android.com/guide/topics/media/issues/cleartext-not-permitted", iOException, aVar, 2007, 1);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c extends DataSource.Factory {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: o  reason: collision with root package name */
        public final String f13448o;

        public e(String str, com.google.android.exoplayer2.upstream.a aVar) {
            super("Invalid content type: " + str, aVar, 2003, 1);
            this.f13448o = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f extends d {

        /* renamed from: o  reason: collision with root package name */
        public final int f13449o;

        /* renamed from: p  reason: collision with root package name */
        public final String f13450p;

        /* renamed from: q  reason: collision with root package name */
        public final Map f13451q;

        /* renamed from: r  reason: collision with root package name */
        public final byte[] f13452r;

        public f(int i10, String str, IOException iOException, Map map, com.google.android.exoplayer2.upstream.a aVar, byte[] bArr) {
            super("Response code: " + i10, iOException, aVar, 2004, 1);
            this.f13449o = i10;
            this.f13450p = str;
            this.f13451q = map;
            this.f13452r = bArr;
        }
    }

    /* renamed from: com.google.android.exoplayer2.upstream.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0176g {

        /* renamed from: a  reason: collision with root package name */
        private final Map f13453a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private Map f13454b;

        public synchronized void a(Map map) {
            this.f13454b = null;
            this.f13453a.clear();
            this.f13453a.putAll(map);
        }

        public synchronized Map b() {
            try {
                if (this.f13454b == null) {
                    this.f13454b = Collections.unmodifiableMap(new HashMap(this.f13453a));
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return this.f13454b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d extends m {

        /* renamed from: e  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f13446e;

        /* renamed from: i  reason: collision with root package name */
        public final int f13447i;

        public d(com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(b(i10, i11));
            this.f13446e = aVar;
            this.f13447i = i11;
        }

        private static int b(int i10, int i11) {
            if (i10 == 2000 && i11 == 1) {
                return 2001;
            }
            return i10;
        }

        public static d c(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10) {
            int i11;
            String message = iOException.getMessage();
            if (iOException instanceof SocketTimeoutException) {
                i11 = 2002;
            } else if (iOException instanceof InterruptedIOException) {
                i11 = 1004;
            } else if (message != null && li.b.e(message).matches("cleartext.*not permitted.*")) {
                i11 = 2007;
            } else {
                i11 = 2001;
            }
            if (i11 == 2007) {
                return new b(iOException, aVar);
            }
            return new d(iOException, aVar, i11, i10);
        }

        public d(String str, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, b(i10, i11));
            this.f13446e = aVar;
            this.f13447i = i11;
        }

        public d(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(iOException, b(i10, i11));
            this.f13446e = aVar;
            this.f13447i = i11;
        }

        public d(String str, IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, iOException, b(i10, i11));
            this.f13446e = aVar;
            this.f13447i = i11;
        }
    }
}
