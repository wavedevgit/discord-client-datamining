package la;

import java.util.LinkedHashSet;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d {

    /* renamed from: a  reason: collision with root package name */
    private final int f36520a;

    /* renamed from: b  reason: collision with root package name */
    private final LinkedHashSet f36521b;

    public d(int i10) {
        this.f36520a = i10;
        this.f36521b = new LinkedHashSet(i10);
    }

    public final synchronized boolean a(Object obj) {
        try {
            if (this.f36521b.size() == this.f36520a) {
                LinkedHashSet linkedHashSet = this.f36521b;
                linkedHashSet.remove(linkedHashSet.iterator().next());
            }
            this.f36521b.remove(obj);
        } catch (Throwable th2) {
            throw th2;
        }
        return this.f36521b.add(obj);
    }

    public final synchronized boolean b(Object obj) {
        return this.f36521b.contains(obj);
    }
}
