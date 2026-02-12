package io.sentry.android.core.util;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f28589a = null;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0384a f28590b;

    /* renamed from: io.sentry.android.core.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0384a {
        Object a(Context context);
    }

    public a(InterfaceC0384a interfaceC0384a) {
        this.f28590b = interfaceC0384a;
    }

    public Object a(Context context) {
        if (this.f28589a == null) {
            synchronized (this) {
                try {
                    if (this.f28589a == null) {
                        this.f28589a = this.f28590b.a(context);
                    }
                } finally {
                }
            }
        }
        return this.f28589a;
    }
}
