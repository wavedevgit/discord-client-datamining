package io.sentry.android.core.util;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f28261a = null;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0389a f28262b;

    /* renamed from: io.sentry.android.core.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0389a {
        Object a(Context context);
    }

    public a(InterfaceC0389a interfaceC0389a) {
        this.f28262b = interfaceC0389a;
    }

    public Object a(Context context) {
        if (this.f28261a == null) {
            synchronized (this) {
                try {
                    if (this.f28261a == null) {
                        this.f28261a = this.f28262b.a(context);
                    }
                } finally {
                }
            }
        }
        return this.f28261a;
    }
}
