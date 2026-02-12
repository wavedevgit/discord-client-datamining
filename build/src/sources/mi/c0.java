package mi;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f36486a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f36487b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f36488c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f36486a = obj;
        this.f36487b = field;
        this.f36488c = cls;
    }

    public final Object a() {
        try {
            return this.f36488c.cast(this.f36487b.get(this.f36486a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f36487b.getName(), this.f36486a.getClass().getName(), this.f36488c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f36487b;
    }

    public final void c(Object obj) {
        try {
            this.f36487b.set(this.f36486a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f36487b.getName(), this.f36486a.getClass().getName(), this.f36488c.getName()), e10);
        }
    }
}
