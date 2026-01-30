package io.sentry.android.core.util;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f29276a = null;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0380a f29277b;

    /* renamed from: io.sentry.android.core.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0380a {
        Object a(Context context);
    }

    public a(InterfaceC0380a interfaceC0380a) {
        this.f29277b = interfaceC0380a;
    }

    public Object a(Context context) {
        if (this.f29276a == null) {
            synchronized (this) {
                try {
                    if (this.f29276a == null) {
                        this.f29276a = this.f29277b.a(context);
                    }
                } finally {
                }
            }
        }
        return this.f29276a;
    }
}
