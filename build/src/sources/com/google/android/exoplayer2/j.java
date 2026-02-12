package com.google.android.exoplayer2;

import android.os.Bundle;
import android.os.SystemClock;
import android.text.TextUtils;
import com.google.android.exoplayer2.g;
import com.reactnativecommunity.webview.RNCWebViewManager;
import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j extends PlaybackException {
    public static final g.a A = new g.a() { // from class: mc.h
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return com.google.android.exoplayer2.j.d(bundle);
        }
    };
    private static final String B = oe.w0.B0(RNCWebViewManager.COMMAND_CLEAR_CACHE);
    private static final String C = oe.w0.B0(RNCWebViewManager.COMMAND_CLEAR_HISTORY);
    private static final String D = oe.w0.B0(1003);
    private static final String E = oe.w0.B0(1004);
    private static final String F = oe.w0.B0(1005);
    private static final String G = oe.w0.B0(1006);

    /* renamed from: t  reason: collision with root package name */
    public final int f13283t;

    /* renamed from: u  reason: collision with root package name */
    public final String f13284u;

    /* renamed from: v  reason: collision with root package name */
    public final int f13285v;

    /* renamed from: w  reason: collision with root package name */
    public final Format f13286w;

    /* renamed from: x  reason: collision with root package name */
    public final int f13287x;

    /* renamed from: y  reason: collision with root package name */
    public final rd.q f13288y;

    /* renamed from: z  reason: collision with root package name */
    final boolean f13289z;

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
                str3 = str2 + " error, index=" + i11 + ", format=" + format + ", format_supported=" + oe.w0.a0(i12);
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
    public j e(rd.q qVar) {
        return new j((String) oe.w0.j(getMessage()), getCause(), this.f12548d, this.f13283t, this.f13284u, this.f13285v, this.f13286w, this.f13287x, qVar, this.f12549e, this.f13289z);
    }

    public Exception k() {
        boolean z10 = true;
        if (this.f13283t != 1) {
            z10 = false;
        }
        oe.a.g(z10);
        return (Exception) oe.a.e(getCause());
    }

    public IOException l() {
        boolean z10;
        if (this.f13283t == 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        return (IOException) oe.a.e(getCause());
    }

    private j(int i10, Throwable th2, String str, int i11, String str2, int i12, Format format, int i13, boolean z10) {
        this(j(i10, str, str2, i12, format, i13), th2, i11, i10, str2, i12, format, i13, null, SystemClock.elapsedRealtime(), z10);
    }

    private j(Bundle bundle) {
        super(bundle);
        this.f13283t = bundle.getInt(B, 2);
        this.f13284u = bundle.getString(C);
        this.f13285v = bundle.getInt(D, -1);
        Bundle bundle2 = bundle.getBundle(E);
        this.f13286w = bundle2 == null ? null : (Format) Format.A0.a(bundle2);
        this.f13287x = bundle.getInt(F, 4);
        this.f13289z = bundle.getBoolean(G, false);
        this.f13288y = null;
    }

    private j(String str, Throwable th2, int i10, int i11, String str2, int i12, Format format, int i13, rd.q qVar, long j10, boolean z10) {
        super(str, th2, i10, j10);
        boolean z11 = false;
        oe.a.a(!z10 || i11 == 1);
        oe.a.a((th2 != null || i11 == 3) ? true : z11);
        this.f13283t = i11;
        this.f13284u = str2;
        this.f13285v = i12;
        this.f13286w = format;
        this.f13287x = i13;
        this.f13288y = qVar;
        this.f13289z = z10;
    }
}
