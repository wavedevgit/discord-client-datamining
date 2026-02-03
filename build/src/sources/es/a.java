package es;

import fs.a0;
import fs.j3;
import gs.h;
import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Member;
import java.lang.reflect.Method;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KCallable;
import kotlin.reflect.KFunction;
import kotlin.reflect.KProperty;
import kotlin.reflect.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {
    public static final boolean a(KCallable kCallable) {
        boolean z10;
        Member member;
        boolean z11;
        boolean z12;
        h C;
        boolean z13;
        boolean z14;
        boolean z15;
        boolean z16;
        boolean z17;
        boolean z18;
        boolean z19;
        boolean z20;
        boolean z21;
        Intrinsics.checkNotNullParameter(kCallable, "<this>");
        if (kCallable instanceof e) {
            KProperty kProperty = (KProperty) kCallable;
            Field b10 = c.b(kProperty);
            if (b10 != null) {
                z19 = b10.isAccessible();
            } else {
                z19 = true;
            }
            if (z19) {
                Method c10 = c.c(kProperty);
                if (c10 != null) {
                    z20 = c10.isAccessible();
                } else {
                    z20 = true;
                }
                if (z20) {
                    Method e10 = c.e((e) kCallable);
                    if (e10 != null) {
                        z21 = e10.isAccessible();
                    } else {
                        z21 = true;
                    }
                    if (z21) {
                        return true;
                    }
                }
            }
            return false;
        } else if (kCallable instanceof KProperty) {
            KProperty kProperty2 = (KProperty) kCallable;
            Field b11 = c.b(kProperty2);
            if (b11 != null) {
                z17 = b11.isAccessible();
            } else {
                z17 = true;
            }
            if (z17) {
                Method c11 = c.c(kProperty2);
                if (c11 != null) {
                    z18 = c11.isAccessible();
                } else {
                    z18 = true;
                }
                if (z18) {
                    return true;
                }
            }
            return false;
        } else if (kCallable instanceof KProperty.b) {
            Field b12 = c.b(((KProperty.b) kCallable).a());
            if (b12 != null) {
                z15 = b12.isAccessible();
            } else {
                z15 = true;
            }
            if (z15) {
                Method d10 = c.d((KFunction) kCallable);
                if (d10 != null) {
                    z16 = d10.isAccessible();
                } else {
                    z16 = true;
                }
                if (z16) {
                    return true;
                }
            }
            return false;
        } else if (kCallable instanceof e.a) {
            Field b13 = c.b(((e.a) kCallable).a());
            if (b13 != null) {
                z13 = b13.isAccessible();
            } else {
                z13 = true;
            }
            if (z13) {
                Method d11 = c.d((KFunction) kCallable);
                if (d11 != null) {
                    z14 = d11.isAccessible();
                } else {
                    z14 = true;
                }
                if (z14) {
                    return true;
                }
            }
            return false;
        } else if (kCallable instanceof KFunction) {
            KFunction kFunction = (KFunction) kCallable;
            Method d12 = c.d(kFunction);
            if (d12 != null) {
                z10 = d12.isAccessible();
            } else {
                z10 = true;
            }
            if (z10) {
                a0 b14 = j3.b(kCallable);
                AccessibleObject accessibleObject = null;
                if (b14 != null && (C = b14.C()) != null) {
                    member = C.b();
                } else {
                    member = null;
                }
                if (member instanceof AccessibleObject) {
                    accessibleObject = (AccessibleObject) member;
                }
                if (accessibleObject != null) {
                    z11 = accessibleObject.isAccessible();
                } else {
                    z11 = true;
                }
                if (z11) {
                    Constructor a10 = c.a(kFunction);
                    if (a10 != null) {
                        z12 = a10.isAccessible();
                    } else {
                        z12 = true;
                    }
                    if (z12) {
                        return true;
                    }
                }
            }
            return false;
        } else {
            throw new UnsupportedOperationException("Unknown callable: " + kCallable + " (" + kCallable.getClass() + ')');
        }
    }
}
