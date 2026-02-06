package ji;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f29885a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f29886b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f29887c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f29885a = obj;
        this.f29886b = field;
        this.f29887c = cls;
    }

    public final Object a() {
        try {
            return this.f29887c.cast(this.f29886b.get(this.f29885a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f29886b.getName(), this.f29885a.getClass().getName(), this.f29887c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f29886b;
    }

    public final void c(Object obj) {
        try {
            this.f29886b.set(this.f29885a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f29886b.getName(), this.f29885a.getClass().getName(), this.f29887c.getName()), e10);
        }
    }
}
