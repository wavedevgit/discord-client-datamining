package com.google.android.exoplayer2;

import android.os.Bundle;
import android.os.RemoteException;
import android.os.SystemClock;
import android.text.TextUtils;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class PlaybackException extends Exception implements g {

    /* renamed from: i  reason: collision with root package name */
    private static final String f12572i = ne.w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f12573o = ne.w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    private static final String f12574p = ne.w0.B0(2);

    /* renamed from: q  reason: collision with root package name */
    private static final String f12575q = ne.w0.B0(3);

    /* renamed from: r  reason: collision with root package name */
    private static final String f12576r = ne.w0.B0(4);

    /* renamed from: s  reason: collision with root package name */
    public static final g.a f12577s = new g.a() { // from class: com.google.android.exoplayer2.q1
        @Override // com.google.android.exoplayer2.g.a
        public final g a(Bundle bundle) {
            return new PlaybackException(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f12578d;

    /* renamed from: e  reason: collision with root package name */
    public final long f12579e;

    /* JADX INFO: Access modifiers changed from: protected */
    public PlaybackException(Bundle bundle) {
        this(bundle.getString(f12574p), c(bundle), bundle.getInt(f12572i, 1000), bundle.getLong(f12573o, SystemClock.elapsedRealtime()));
    }

    private static RemoteException a(String str) {
        return new RemoteException(str);
    }

    private static Throwable b(Class cls, String str) {
        return (Throwable) cls.getConstructor(String.class).newInstance(str);
    }

    private static Throwable c(Bundle bundle) {
        String string = bundle.getString(f12575q);
        String string2 = bundle.getString(f12576r);
        Throwable th2 = null;
        if (TextUtils.isEmpty(string)) {
            return null;
        }
        try {
            Class<?> cls = Class.forName(string, true, PlaybackException.class.getClassLoader());
            if (Throwable.class.isAssignableFrom(cls)) {
                th2 = b(cls, string2);
            }
            if (th2 == null) {
                return a(string2);
            }
            return th2;
        } catch (Throwable unused) {
            return a(string2);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public PlaybackException(String str, Throwable th2, int i10, long j10) {
        super(str, th2);
        this.f12578d = i10;
        this.f12579e = j10;
    }
}
