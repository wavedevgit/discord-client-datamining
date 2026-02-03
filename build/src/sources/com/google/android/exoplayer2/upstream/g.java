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
        private final C0179g f14092a = new C0179g();

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        /* renamed from: a */
        public final g createDataSource() {
            return b(this.f14092a);
        }

        protected abstract g b(C0179g c0179g);

        public final c c(Map map) {
            this.f14092a.a(map);
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
        public final String f14095o;

        public e(String str, com.google.android.exoplayer2.upstream.a aVar) {
            super("Invalid content type: " + str, aVar, 2003, 1);
            this.f14095o = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f extends d {

        /* renamed from: o  reason: collision with root package name */
        public final int f14096o;

        /* renamed from: p  reason: collision with root package name */
        public final String f14097p;

        /* renamed from: q  reason: collision with root package name */
        public final Map f14098q;

        /* renamed from: r  reason: collision with root package name */
        public final byte[] f14099r;

        public f(int i10, String str, IOException iOException, Map map, com.google.android.exoplayer2.upstream.a aVar, byte[] bArr) {
            super("Response code: " + i10, iOException, aVar, 2004, 1);
            this.f14096o = i10;
            this.f14097p = str;
            this.f14098q = map;
            this.f14099r = bArr;
        }
    }

    /* renamed from: com.google.android.exoplayer2.upstream.g$g  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0179g {

        /* renamed from: a  reason: collision with root package name */
        private final Map f14100a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private Map f14101b;

        public synchronized void a(Map map) {
            this.f14101b = null;
            this.f14100a.clear();
            this.f14100a.putAll(map);
        }

        public synchronized Map b() {
            try {
                if (this.f14101b == null) {
                    this.f14101b = Collections.unmodifiableMap(new HashMap(this.f14100a));
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return this.f14101b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d extends m {

        /* renamed from: e  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f14093e;

        /* renamed from: i  reason: collision with root package name */
        public final int f14094i;

        public d(com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(b(i10, i11));
            this.f14093e = aVar;
            this.f14094i = i11;
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
            } else if (message != null && ii.b.e(message).matches("cleartext.*not permitted.*")) {
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
            this.f14093e = aVar;
            this.f14094i = i11;
        }

        public d(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(iOException, b(i10, i11));
            this.f14093e = aVar;
            this.f14094i = i11;
        }

        public d(String str, IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, iOException, b(i10, i11));
            this.f14093e = aVar;
            this.f14094i = i11;
        }
    }
}
