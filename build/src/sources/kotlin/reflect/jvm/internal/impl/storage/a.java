package kotlin.reflect.jvm.internal.impl.storage;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: a  reason: collision with root package name */
    private final Object f34517a;

    /* renamed from: b  reason: collision with root package name */
    private final Thread f34518b = Thread.currentThread();

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Object obj) {
        this.f34517a = obj;
    }

    public Object a() {
        if (b()) {
            return this.f34517a;
        }
        throw new IllegalStateException("No value in this thread (hasValue should be checked before)");
    }

    public boolean b() {
        if (this.f34518b == Thread.currentThread()) {
            return true;
        }
        return false;
    }
}
