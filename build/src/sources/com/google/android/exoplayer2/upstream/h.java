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
public interface h extends DataSource {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final g f13406a = new g();

        protected abstract h a(g gVar);

        public final c b(Map map) {
            this.f13406a.a(map);
            return this;
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        public final h createDataSource() {
            return a(this.f13406a);
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
        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        h createDataSource();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e extends d {

        /* renamed from: o  reason: collision with root package name */
        public final String f13409o;

        public e(String str, com.google.android.exoplayer2.upstream.a aVar) {
            super("Invalid content type: " + str, aVar, 2003, 1);
            this.f13409o = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f extends d {

        /* renamed from: o  reason: collision with root package name */
        public final int f13410o;

        /* renamed from: p  reason: collision with root package name */
        public final String f13411p;

        /* renamed from: q  reason: collision with root package name */
        public final Map f13412q;

        /* renamed from: r  reason: collision with root package name */
        public final byte[] f13413r;

        public f(int i10, String str, IOException iOException, Map map, com.google.android.exoplayer2.upstream.a aVar, byte[] bArr) {
            super("Response code: " + i10, iOException, aVar, 2004, 1);
            this.f13410o = i10;
            this.f13411p = str;
            this.f13412q = map;
            this.f13413r = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        private final Map f13414a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private Map f13415b;

        public synchronized void a(Map map) {
            this.f13415b = null;
            this.f13414a.clear();
            this.f13414a.putAll(map);
        }

        public synchronized Map b() {
            try {
                if (this.f13415b == null) {
                    this.f13415b = Collections.unmodifiableMap(new HashMap(this.f13414a));
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return this.f13415b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d extends m {

        /* renamed from: e  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f13407e;

        /* renamed from: i  reason: collision with root package name */
        public final int f13408i;

        public d(com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(b(i10, i11));
            this.f13407e = aVar;
            this.f13408i = i11;
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
            } else if (message != null && mi.b.e(message).matches("cleartext.*not permitted.*")) {
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
            this.f13407e = aVar;
            this.f13408i = i11;
        }

        public d(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(iOException, b(i10, i11));
            this.f13407e = aVar;
            this.f13408i = i11;
        }

        public d(String str, IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, iOException, b(i10, i11));
            this.f13407e = aVar;
            this.f13408i = i11;
        }
    }
}
