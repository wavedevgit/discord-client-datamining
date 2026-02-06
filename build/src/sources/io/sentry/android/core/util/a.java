package io.sentry.android.core.util;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f27405a = null;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0383a f27406b;

    /* renamed from: io.sentry.android.core.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0383a {
        Object a(Context context);
    }

    public a(InterfaceC0383a interfaceC0383a) {
        this.f27406b = interfaceC0383a;
    }

    public Object a(Context context) {
        if (this.f27405a == null) {
            synchronized (this) {
                try {
                    if (this.f27405a == null) {
                        this.f27405a = this.f27406b.a(context);
                    }
                } finally {
                }
            }
        }
        return this.f27405a;
    }
}
