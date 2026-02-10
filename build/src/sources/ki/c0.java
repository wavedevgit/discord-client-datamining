package ki;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f30884a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f30885b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f30886c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f30884a = obj;
        this.f30885b = field;
        this.f30886c = cls;
    }

    public final Object a() {
        try {
            return this.f30886c.cast(this.f30885b.get(this.f30884a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f30885b.getName(), this.f30884a.getClass().getName(), this.f30886c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f30885b;
    }

    public final void c(Object obj) {
        try {
            this.f30885b.set(this.f30884a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f30885b.getName(), this.f30884a.getClass().getName(), this.f30886c.getName()), e10);
        }
    }
}
