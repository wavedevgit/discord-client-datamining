package ma;

import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f36166a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashSet f36167b;

    public d(int i10) {
        this.f36166a = i10;
        this.f36167b = new LinkedHashSet(i10);
    }

    public final synchronized boolean a(Object obj) {
        try {
            if (this.f36167b.size() == this.f36166a) {
                LinkedHashSet linkedHashSet = this.f36167b;
                linkedHashSet.remove(linkedHashSet.iterator().next());
            }
            this.f36167b.remove(obj);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f36167b.add(obj);
    }

    public final synchronized boolean b(Object obj) {
        return this.f36167b.contains(obj);
    }
}
