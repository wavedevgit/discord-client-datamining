package fi;

import java.lang.reflect.Field;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c0 {

    /* renamed from: a  reason: collision with root package name */
    private final Object f23995a;

    /* renamed from: b  reason: collision with root package name */
    private final Field f23996b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f23997c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c0(Object obj, Field field, Class cls) {
        this.f23995a = obj;
        this.f23996b = field;
        this.f23997c = cls;
    }

    public final Object a() {
        try {
            return this.f23997c.cast(this.f23996b.get(this.f23995a));
        } catch (Exception e10) {
            throw new e0(String.format("Failed to get value of field %s of type %s on object of type %s", this.f23996b.getName(), this.f23995a.getClass().getName(), this.f23997c.getName()), e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final Field b() {
        return this.f23996b;
    }

    public final void c(Object obj) {
        try {
            this.f23996b.set(this.f23995a, obj);
        } catch (Exception e10) {
            throw new e0(String.format("Failed to set value of field %s of type %s on object of type %s", this.f23996b.getName(), this.f23995a.getClass().getName(), this.f23997c.getName()), e10);
        }
    }
}
