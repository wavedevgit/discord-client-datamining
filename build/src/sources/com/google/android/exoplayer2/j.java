package com.google.android.exoplayer2;

import android.os.Bundle;
import android.os.SystemClock;
import android.text.TextUtils;
import com.google.android.exoplayer2.g;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends PlaybackException {
    public static final g.a A = new g.a() { // from class: lc.h
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return com.google.android.exoplayer2.j.d(bundle);
        }
    };
    private static final String B = ne.w0.B0(RNCWebViewManager.COMMAND_CLEAR_CACHE);
    private static final String C = ne.w0.B0(RNCWebViewManager.COMMAND_CLEAR_HISTORY);
    private static final String D = ne.w0.B0(1003);
    private static final String E = ne.w0.B0(1004);
    private static final String F = ne.w0.B0(1005);
    private static final String G = ne.w0.B0(1006);

    /* renamed from: t  reason: collision with root package name */
    public final int f13622t;

    /* renamed from: u  reason: collision with root package name */
    public final String f13623u;

    /* renamed from: v  reason: collision with root package name */
    public final int f13624v;

    /* renamed from: w  reason: collision with root package name */
    public final Format f13625w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13626x;

    /* renamed from: y  reason: collision with root package name */
    public final qd.q f13627y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f13628z;

    private j(int i10, Throwable th2, int i11) {
        this(i10, th2, null, i11, null, -1, null, 4, false);
    }

    public static /* synthetic */ j d(Bundle bundle) {
        return new j(bundle);
    }

    public static j f(Throwable th2, String str, int i10, Format format, int i11, boolean z10, int i12) {
        if (format == null) {
            i11 = 4;
        }
        return new j(1, th2, null, i12, str, i10, format, i11, z10);
    }

    public static j g(IOException iOException, int i10) {
        return new j(0, iOException, i10);
    }

    public static j h(RuntimeException runtimeException) {
        return i(runtimeException, 1000);
    }

    public static j i(RuntimeException runtimeException, int i10) {
        return new j(2, runtimeException, i10);
    }

    private static String j(int i10, String str, String str2, int i11, Format format, int i12) {
        String str3;
        if (i10 != 0) {
            if (i10 != 1) {
                if (i10 != 3) {
                    str3 = "Unexpected runtime error";
                } else {
                    str3 = "Remote error";
                }
            } else {
                str3 = str2 + " error, index=" + i11 + ", format=" + format + ", format_supported=" + ne.w0.a0(i12);
            }
        } else {
            str3 = "Source error";
        }
        if (!TextUtils.isEmpty(str)) {
            return str3 + ": " + str;
        }
        return str3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j e(qd.q qVar) {
        return new j((String) ne.w0.j(getMessage()), getCause(), this.f12949d, this.f13622t, this.f13623u, this.f13624v, this.f13625w, this.f13626x, qVar, this.f12950e, this.f13628z);
    }

    public Exception k() {
        boolean z10 = true;
        if (this.f13622t != 1) {
            z10 = false;
        }
        ne.a.g(z10);
        return (Exception) ne.a.e(getCause());
    }

    public IOException l() {
        boolean z10;
        if (this.f13622t == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        return (IOException) ne.a.e(getCause());
    }

    private j(int i10, Throwable th2, String str, int i11, String str2, int i12, Format format, int i13, boolean z10) {
        this(j(i10, str, str2, i12, format, i13), th2, i11, i10, str2, i12, format, i13, null, SystemClock.elapsedRealtime(), z10);
    }

    private j(Bundle bundle) {
        super(bundle);
        this.f13622t = bundle.getInt(B, 2);
        this.f13623u = bundle.getString(C);
        this.f13624v = bundle.getInt(D, -1);
        Bundle bundle2 = bundle.getBundle(E);
        this.f13625w = bundle2 == null ? null : (Format) Format.A0.a(bundle2);
        this.f13626x = bundle.getInt(F, 4);
        this.f13628z = bundle.getBoolean(G, false);
        this.f13627y = null;
    }

    private j(String str, Throwable th2, int i10, int i11, String str2, int i12, Format format, int i13, qd.q qVar, long j10, boolean z10) {
        super(str, th2, i10, j10);
        boolean z11 = false;
        ne.a.a(!z10 || i11 == 1);
        ne.a.a((th2 != null || i11 == 3) ? true : z11);
        this.f13622t = i11;
        this.f13623u = str2;
        this.f13624v = i12;
        this.f13625w = format;
        this.f13626x = i13;
        this.f13627y = qVar;
        this.f13628z = z10;
    }
}
