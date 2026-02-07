package ji;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f29933a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f29934b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f29935c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f29933a = obj;
        this.f29934b = field;
        this.f29935c = cls;
    }

    public final Object a() {
        try {
            return this.f29935c.cast(this.f29934b.get(this.f29933a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f29934b.getName(), this.f29933a.getClass().getName(), this.f29935c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f29934b;
    }

    public final void c(Object obj) {
        try {
            this.f29934b.set(this.f29933a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f29934b.getName(), this.f29933a.getClass().getName(), this.f29935c.getName()), e10);
        }
    }
}
