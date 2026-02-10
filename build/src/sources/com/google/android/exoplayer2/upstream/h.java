package com.google.android.exoplayer2.upstream;

import com.google.android.exoplayer2.upstream.DataSource;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.SocketTimeoutException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import me.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface h extends DataSource {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class a implements c {

        /* renamed from: a  reason: collision with root package name */
        private final g f14123a = new g();

        protected abstract h a(g gVar);

        public final c b(Map map) {
            this.f14123a.a(map);
            return this;
        }

        @Override // com.google.android.exoplayer2.upstream.DataSource.Factory
        public final h createDataSource() {
            return a(this.f14123a);
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
        public final String f14126o;

        public e(String str, com.google.android.exoplayer2.upstream.a aVar) {
            super("Invalid content type: " + str, aVar, 2003, 1);
            this.f14126o = str;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class f extends d {

        /* renamed from: o  reason: collision with root package name */
        public final int f14127o;

        /* renamed from: p  reason: collision with root package name */
        public final String f14128p;

        /* renamed from: q  reason: collision with root package name */
        public final Map f14129q;

        /* renamed from: r  reason: collision with root package name */
        public final byte[] f14130r;

        public f(int i10, String str, IOException iOException, Map map, com.google.android.exoplayer2.upstream.a aVar, byte[] bArr) {
            super("Response code: " + i10, iOException, aVar, 2004, 1);
            this.f14127o = i10;
            this.f14128p = str;
            this.f14129q = map;
            this.f14130r = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class g {

        /* renamed from: a  reason: collision with root package name */
        private final Map f14131a = new HashMap();

        /* renamed from: b  reason: collision with root package name */
        private Map f14132b;

        public synchronized void a(Map map) {
            this.f14132b = null;
            this.f14131a.clear();
            this.f14131a.putAll(map);
        }

        public synchronized Map b() {
            try {
                if (this.f14132b == null) {
                    this.f14132b = Collections.unmodifiableMap(new HashMap(this.f14131a));
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return this.f14132b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class d extends m {

        /* renamed from: e  reason: collision with root package name */
        public final com.google.android.exoplayer2.upstream.a f14124e;

        /* renamed from: i  reason: collision with root package name */
        public final int f14125i;

        public d(com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(b(i10, i11));
            this.f14124e = aVar;
            this.f14125i = i11;
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
            } else if (message != null && pi.b.e(message).matches("cleartext.*not permitted.*")) {
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
            this.f14124e = aVar;
            this.f14125i = i11;
        }

        public d(IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(iOException, b(i10, i11));
            this.f14124e = aVar;
            this.f14125i = i11;
        }

        public d(String str, IOException iOException, com.google.android.exoplayer2.upstream.a aVar, int i10, int i11) {
            super(str, iOException, b(i10, i11));
            this.f14124e = aVar;
            this.f14125i = i11;
        }
    }
}
