package la;

import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f35961a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashSet f35962b;

    public d(int i10) {
        this.f35961a = i10;
        this.f35962b = new LinkedHashSet(i10);
    }

    public final synchronized boolean a(Object obj) {
        try {
            if (this.f35962b.size() == this.f35961a) {
                LinkedHashSet linkedHashSet = this.f35962b;
                linkedHashSet.remove(linkedHashSet.iterator().next());
            }
            this.f35962b.remove(obj);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f35962b.add(obj);
    }

    public final synchronized boolean b(Object obj) {
        return this.f35962b.contains(obj);
    }
}
