package lt;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.Collections;
import java.util.EnumMap;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class o implements h {

    /* renamed from: d  reason: collision with root package name */
    private final jt.p f37681d;

    /* renamed from: e  reason: collision with root package name */
    private final Map f37682e;

    /* renamed from: i  reason: collision with root package name */
    private final int f37683i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f37684o;

    /* renamed from: p  reason: collision with root package name */
    private final Locale f37685p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(jt.p pVar, Map map) {
        Map hashMap;
        Class type = pVar.getType();
        if (type.isEnum()) {
            if (map.size() >= type.getEnumConstants().length) {
                hashMap = b(type);
            } else {
                throw new IllegalArgumentException("Not enough text resources defined for enum: " + type.getName());
            }
        } else {
            hashMap = new HashMap(map.size());
        }
        hashMap.putAll(map);
        this.f37681d = pVar;
        this.f37682e = Collections.unmodifiableMap(hashMap);
        this.f37683i = 0;
        this.f37684o = true;
        this.f37685p = Locale.getDefault();
    }

    private static Map b(Class cls) {
        return new EnumMap(cls);
    }

    private String c(Object obj) {
        String str = (String) this.f37682e.get(obj);
        if (str == null) {
            return obj.toString();
        }
        return str;
    }

    private int h(jt.o oVar, Appendable appendable) {
        String c10 = c(oVar.p(this.f37681d));
        appendable.append(c10);
        return c10.length();
    }

    @Override // lt.h
    public h a(c cVar, jt.d dVar, int i10) {
        return new o(this.f37681d, this.f37682e, ((Integer) dVar.b(kt.a.f36562s, 0)).intValue(), ((Boolean) dVar.b(kt.a.f36552i, Boolean.TRUE)).booleanValue(), (Locale) dVar.b(kt.a.f36546c, Locale.getDefault()));
    }

    @Override // lt.h
    public int d(jt.o oVar, Appendable appendable, jt.d dVar, Set set, boolean z10) {
        if (appendable instanceof CharSequence) {
            CharSequence charSequence = (CharSequence) appendable;
            int length = charSequence.length();
            int h10 = h(oVar, appendable);
            if (set != null) {
                set.add(new g(this.f37681d, length, charSequence.length()));
            }
            return h10;
        }
        return h(oVar, appendable);
    }

    @Override // lt.h
    public void e(CharSequence charSequence, s sVar, jt.d dVar, t tVar, boolean z10) {
        int intValue;
        boolean booleanValue;
        Locale locale;
        int f10 = sVar.f();
        int length = charSequence.length();
        if (z10) {
            intValue = this.f37683i;
        } else {
            intValue = ((Integer) dVar.b(kt.a.f36562s, 0)).intValue();
        }
        if (intValue > 0) {
            length -= intValue;
        }
        if (f10 >= length) {
            sVar.k(f10, "Missing chars for: " + this.f37681d.name());
            sVar.n();
            return;
        }
        if (z10) {
            booleanValue = this.f37684o;
        } else {
            booleanValue = ((Boolean) dVar.b(kt.a.f36552i, Boolean.TRUE)).booleanValue();
        }
        if (z10) {
            locale = this.f37685p;
        } else {
            locale = (Locale) dVar.b(kt.a.f36546c, Locale.getDefault());
        }
        int i10 = length - f10;
        for (Object obj : this.f37682e.keySet()) {
            String c10 = c(obj);
            if (booleanValue) {
                String upperCase = c10.toUpperCase(locale);
                int length2 = c10.length();
                if (length2 <= i10) {
                    int i11 = length2 + f10;
                    if (upperCase.equals(charSequence.subSequence(f10, i11).toString().toUpperCase(locale))) {
                        tVar.I(this.f37681d, obj);
                        sVar.l(i11);
                        return;
                    }
                } else {
                    continue;
                }
            } else {
                int length3 = c10.length();
                if (length3 <= i10) {
                    int i12 = length3 + f10;
                    if (c10.equals(charSequence.subSequence(f10, i12).toString())) {
                        tVar.I(this.f37681d, obj);
                        sVar.l(i12);
                        return;
                    }
                } else {
                    continue;
                }
            }
        }
        sVar.k(f10, "Element value could not be parsed: " + this.f37681d.name());
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof o) {
            o oVar = (o) obj;
            if (this.f37681d.equals(oVar.f37681d) && this.f37682e.equals(oVar.f37682e)) {
                return true;
            }
        }
        return false;
    }

    @Override // lt.h
    public boolean f() {
        return false;
    }

    @Override // lt.h
    public h g(jt.p pVar) {
        if (this.f37681d == pVar) {
            return this;
        }
        return new o(pVar, this.f37682e);
    }

    @Override // lt.h
    public jt.p getElement() {
        return this.f37681d;
    }

    public int hashCode() {
        return (this.f37681d.hashCode() * 7) + (this.f37682e.hashCode() * 31);
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING);
        sb2.append(o.class.getName());
        sb2.append("[element=");
        sb2.append(this.f37681d.name());
        sb2.append(", resources=");
        sb2.append(this.f37682e);
        sb2.append(']');
        return sb2.toString();
    }

    private o(jt.p pVar, Map map, int i10, boolean z10, Locale locale) {
        this.f37681d = pVar;
        this.f37682e = map;
        this.f37683i = i10;
        this.f37684o = z10;
        this.f37685p = locale;
    }
}
