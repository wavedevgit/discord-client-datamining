package fi;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f24403a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f24404b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f24405c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f24403a = obj;
        this.f24404b = field;
        this.f24405c = cls;
    }

    public final Object a() {
        try {
            return this.f24405c.cast(this.f24404b.get(this.f24403a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f24404b.getName(), this.f24403a.getClass().getName(), this.f24405c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f24404b;
    }

    public final void c(Object obj) {
        try {
            this.f24404b.set(this.f24403a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f24404b.getName(), this.f24403a.getClass().getName(), this.f24405c.getName()), e10);
        }
    }
}
