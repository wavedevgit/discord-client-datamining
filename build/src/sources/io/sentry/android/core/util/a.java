package io.sentry.android.core.util;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f27653a = null;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0409a f27654b;

    /* renamed from: io.sentry.android.core.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0409a {
        Object a(Context context);
    }

    public a(InterfaceC0409a interfaceC0409a) {
        this.f27654b = interfaceC0409a;
    }

    public Object a(Context context) {
        if (this.f27653a == null) {
            synchronized (this) {
                try {
                    if (this.f27653a == null) {
                        this.f27653a = this.f27654b.a(context);
                    }
                } finally {
                }
            }
        }
        return this.f27653a;
    }
}
