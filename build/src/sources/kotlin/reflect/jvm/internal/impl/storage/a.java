package kotlin.reflect.jvm.internal.impl.storage;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class a {

    /* renamed from: a  reason: collision with root package name */
    private final Object f35827a;

    /* renamed from: b  reason: collision with root package name */
    private final Thread f35828b = Thread.currentThread();

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(Object obj) {
        this.f35827a = obj;
    }

    public Object a() {
        if (b()) {
            return this.f35827a;
        }
        throw new IllegalStateException("No value in this thread (hasValue should be checked before)");
    }

    public boolean b() {
        if (this.f35828b == Thread.currentThread()) {
            return true;
        }
        return false;
    }
}
