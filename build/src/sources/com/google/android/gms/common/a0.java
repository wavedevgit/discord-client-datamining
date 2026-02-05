package com.google.android.gms.common;

import android.content.Context;
import android.util.Log;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a0 {

    /* renamed from: a  reason: collision with root package name */
    static final y f13767a = new q(w.h("0\u0082\u0005È0\u0082\u0003° \u0003\u0002\u0001\u0002\u0002\u0014\u007f¢fú§p\u0085xb±"));

    /* renamed from: b  reason: collision with root package name */
    static final y f13768b = new r(w.h("0\u0082\u0006\u00040\u0082\u0003ì \u0003\u0002\u0001\u0002\u0002\u0014QÕÛ\u0004÷XçB\u0086<"));

    /* renamed from: c  reason: collision with root package name */
    static final y f13769c = new s(w.h("0\u0082\u0005È0\u0082\u0003° \u0003\u0002\u0001\u0002\u0002\u0014\u0010\u008ae\bsù/\u008eQí"));

    /* renamed from: d  reason: collision with root package name */
    static final y f13770d = new t(w.h("0\u0082\u0006\u00040\u0082\u0003ì \u0003\u0002\u0001\u0002\u0002\u0014\u0003£²\u00ad×árÊkì"));

    /* renamed from: e  reason: collision with root package name */
    static final y f13771e = new u(w.h("0\u0082\u0004C0\u0082\u0003+ \u0003\u0002\u0001\u0002\u0002\t\u0000Âà\u0087FdJ0\u008d0"));

    /* renamed from: f  reason: collision with root package name */
    static final y f13772f = new v(w.h("0\u0082\u0004¨0\u0082\u0003\u0090 \u0003\u0002\u0001\u0002\u0002\t\u0000Õ\u0085¸l}ÓNõ0"));

    /* renamed from: g  reason: collision with root package name */
    private static final Object f13773g = new Object();

    /* renamed from: h  reason: collision with root package name */
    private static Context f13774h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public static synchronized void a(Context context) {
        synchronized (a0.class) {
            if (f13774h == null) {
                if (context != null) {
                    f13774h = context.getApplicationContext();
                    return;
                }
                return;
            }
            Log.w("GoogleCertificates", "GoogleCertificates has been initialized already");
        }
    }
}
