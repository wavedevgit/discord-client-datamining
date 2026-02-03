package io.sentry.android.core.util;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private volatile Object f29203a = null;

    /* renamed from: b  reason: collision with root package name */
    private final InterfaceC0382a f29204b;

    /* renamed from: io.sentry.android.core.util.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface InterfaceC0382a {
        Object a(Context context);
    }

    public a(InterfaceC0382a interfaceC0382a) {
        this.f29204b = interfaceC0382a;
    }

    public Object a(Context context) {
        if (this.f29203a == null) {
            synchronized (this) {
                try {
                    if (this.f29203a == null) {
                        this.f29203a = this.f29204b.a(context);
                    }
                } finally {
                }
            }
        }
        return this.f29203a;
    }
}
