package ii;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f27387a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f27388b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f27389c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f27387a = obj;
        this.f27388b = field;
        this.f27389c = cls;
    }

    public final Object a() {
        try {
            return this.f27389c.cast(this.f27388b.get(this.f27387a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f27388b.getName(), this.f27387a.getClass().getName(), this.f27389c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f27388b;
    }

    public final void c(Object obj) {
        try {
            this.f27388b.set(this.f27387a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f27388b.getName(), this.f27387a.getClass().getName(), this.f27389c.getName()), e10);
        }
    }
}
