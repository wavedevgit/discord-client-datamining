package fi;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f25192a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f25193b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f25194c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f25192a = obj;
        this.f25193b = field;
        this.f25194c = cls;
    }

    public final Object a() {
        try {
            return this.f25194c.cast(this.f25193b.get(this.f25192a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f25193b.getName(), this.f25192a.getClass().getName(), this.f25194c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f25193b;
    }

    public final void c(Object obj) {
        try {
            this.f25193b.set(this.f25192a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f25193b.getName(), this.f25192a.getClass().getName(), this.f25194c.getName()), e10);
        }
    }
}
