package mi;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f37054a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f37055b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f37056c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f37054a = obj;
        this.f37055b = field;
        this.f37056c = cls;
    }

    public final Object a() {
        try {
            return this.f37056c.cast(this.f37055b.get(this.f37054a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f37055b.getName(), this.f37054a.getClass().getName(), this.f37056c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f37055b;
    }

    public final void c(Object obj) {
        try {
            this.f37055b.set(this.f37054a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f37055b.getName(), this.f37054a.getClass().getName(), this.f37056c.getName()), e10);
        }
    }
}
