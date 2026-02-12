package com.google.android.gms.common;

import android.content.Context;
import android.util.Log;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c0 {

    /* renamed from: a  reason: collision with root package name */
    static final a0 f14477a = new s(y.i("0\u0082\u0005È0\u0082\u0003° \u0003\u0002\u0001\u0002\u0002\u0014\u007f¢fú§p\u0085xb±"));

    /* renamed from: b  reason: collision with root package name */
    static final a0 f14478b = new t(y.i("0\u0082\u0006\u00040\u0082\u0003ì \u0003\u0002\u0001\u0002\u0002\u0014QÕÛ\u0004÷XçB\u0086<"));

    /* renamed from: c  reason: collision with root package name */
    static final a0 f14479c = new u(y.i("0\u0082\u0005È0\u0082\u0003° \u0003\u0002\u0001\u0002\u0002\u0014\u0010\u008ae\bsù/\u008eQí"));

    /* renamed from: d  reason: collision with root package name */
    static final a0 f14480d = new v(y.i("0\u0082\u0006\u00040\u0082\u0003ì \u0003\u0002\u0001\u0002\u0002\u0014\u0003£²\u00ad×árÊkì"));

    /* renamed from: e  reason: collision with root package name */
    static final a0 f14481e = new w(y.i("0\u0082\u0004C0\u0082\u0003+ \u0003\u0002\u0001\u0002\u0002\t\u0000Âà\u0087FdJ0\u008d0"));

    /* renamed from: f  reason: collision with root package name */
    static final a0 f14482f = new x(y.i("0\u0082\u0004¨0\u0082\u0003\u0090 \u0003\u0002\u0001\u0002\u0002\t\u0000Õ\u0085¸l}ÓNõ0"));

    /* renamed from: g  reason: collision with root package name */
    private static final Object f14483g = new Object();

    /* renamed from: h  reason: collision with root package name */
    private static Context f14484h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static synchronized void a(Context context) {
        synchronized (c0.class) {
            if (f14484h == null) {
                if (context != null) {
                    f14484h = context.getApplicationContext();
                    return;
                }
                return;
            }
            Log.w("GoogleCertificates", "GoogleCertificates has been initialized already");
        }
    }
}
