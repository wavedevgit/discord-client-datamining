package io.sentry.android.core.util;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f29157a = null;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0384a f29158b;

    /* renamed from: io.sentry.android.core.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0384a {
        Object a(Context context);
    }

    public a(InterfaceC0384a interfaceC0384a) {
        this.f29158b = interfaceC0384a;
    }

    public Object a(Context context) {
        if (this.f29157a == null) {
            synchronized (this) {
                try {
                    if (this.f29157a == null) {
                        this.f29157a = this.f29158b.a(context);
                    }
                } finally {
                }
            }
        }
        return this.f29157a;
    }
}
