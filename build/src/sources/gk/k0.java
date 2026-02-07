package gk;

import com.facebook.react.views.textinput.ReactEditTextInputConnectionWrapper;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k0 {

    /* renamed from: a  reason: collision with root package name */
    private static final char[] f25356a;

    static {
        char[] cArr = new char[80];
        f25356a = cArr;
        Arrays.fill(cArr, ' ');
    }

    private static void a(int i10, StringBuilder sb2) {
        int i11;
        while (i10 > 0) {
            char[] cArr = f25356a;
            if (i10 > cArr.length) {
                i11 = cArr.length;
            } else {
                i11 = i10;
            }
            sb2.append(cArr, 0, i11);
            i10 -= i11;
        }
    }

    private static boolean b(Object obj) {
        if (obj instanceof Boolean) {
            return !((Boolean) obj).booleanValue();
        }
        if (obj instanceof Integer) {
            if (((Integer) obj).intValue() == 0) {
                return true;
            }
            return false;
        } else if (obj instanceof Float) {
            if (Float.floatToRawIntBits(((Float) obj).floatValue()) == 0) {
                return true;
            }
            return false;
        } else if (obj instanceof Double) {
            if (Double.doubleToRawLongBits(((Double) obj).doubleValue()) == 0) {
                return true;
            }
            return false;
        } else if (obj instanceof String) {
            return obj.equals("");
        } else {
            if (obj instanceof f) {
                return obj.equals(f.f25254e);
            }
            if (obj instanceof i0) {
                if (obj == ((i0) obj).getDefaultInstanceForType()) {
                    return true;
                }
                return false;
            } else if ((obj instanceof Enum) && ((Enum) obj).ordinal() == 0) {
                return true;
            } else {
                return false;
            }
        }
    }

    private static String c(String str) {
        if (str.isEmpty()) {
            return str;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append(Character.toLowerCase(str.charAt(0)));
        for (int i10 = 1; i10 < str.length(); i10++) {
            char charAt = str.charAt(i10);
            if (Character.isUpperCase(charAt)) {
                sb2.append("_");
            }
            sb2.append(Character.toLowerCase(charAt));
        }
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void d(StringBuilder sb2, int i10, String str, Object obj) {
        if (obj instanceof List) {
            for (Object obj2 : (List) obj) {
                d(sb2, i10, str, obj2);
            }
        } else if (obj instanceof Map) {
            for (Map.Entry entry : ((Map) obj).entrySet()) {
                d(sb2, i10, str, entry);
            }
        } else {
            sb2.append('\n');
            a(i10, sb2);
            sb2.append(c(str));
            if (obj instanceof String) {
                sb2.append(": \"");
                sb2.append(b1.c((String) obj));
                sb2.append('\"');
            } else if (obj instanceof f) {
                sb2.append(": \"");
                sb2.append(b1.a((f) obj));
                sb2.append('\"');
            } else if (obj instanceof s) {
                sb2.append(" {");
                e((s) obj, sb2, i10 + 2);
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                a(i10, sb2);
                sb2.append("}");
            } else if (obj instanceof Map.Entry) {
                sb2.append(" {");
                Map.Entry entry2 = (Map.Entry) obj;
                int i11 = i10 + 2;
                d(sb2, i11, "key", entry2.getKey());
                d(sb2, i11, "value", entry2.getValue());
                sb2.append(ReactEditTextInputConnectionWrapper.NEWLINE_RAW_VALUE);
                a(i10, sb2);
                sb2.append("}");
            } else {
                sb2.append(": ");
                sb2.append(obj);
            }
        }
    }

    private static void e(i0 i0Var, StringBuilder sb2, int i10) {
        int i11;
        int i12;
        boolean booleanValue;
        Method method;
        Method method2;
        HashSet hashSet = new HashSet();
        HashMap hashMap = new HashMap();
        TreeMap treeMap = new TreeMap();
        Method[] declaredMethods = i0Var.getClass().getDeclaredMethods();
        int length = declaredMethods.length;
        int i13 = 0;
        while (true) {
            i11 = 3;
            if (i13 >= length) {
                break;
            }
            Method method3 = declaredMethods[i13];
            if (!Modifier.isStatic(method3.getModifiers()) && method3.getName().length() >= 3) {
                if (method3.getName().startsWith("set")) {
                    hashSet.add(method3.getName());
                } else if (Modifier.isPublic(method3.getModifiers()) && method3.getParameterTypes().length == 0) {
                    if (method3.getName().startsWith("has")) {
                        hashMap.put(method3.getName(), method3);
                    } else if (method3.getName().startsWith("get")) {
                        treeMap.put(method3.getName(), method3);
                    }
                }
            }
            i13++;
        }
        for (Map.Entry entry : treeMap.entrySet()) {
            String substring = ((String) entry.getKey()).substring(i11);
            if (substring.endsWith("List") && !substring.endsWith("OrBuilderList") && !substring.equals("List") && (method2 = (Method) entry.getValue()) != null) {
                i12 = i11;
                if (method2.getReturnType().equals(List.class)) {
                    d(sb2, i10, substring.substring(0, substring.length() - 4), s.p(method2, i0Var, new Object[0]));
                    i11 = i12;
                }
            } else {
                i12 = i11;
            }
            if (substring.endsWith("Map") && !substring.equals("Map") && (method = (Method) entry.getValue()) != null && method.getReturnType().equals(Map.class) && !method.isAnnotationPresent(Deprecated.class) && Modifier.isPublic(method.getModifiers())) {
                d(sb2, i10, substring.substring(0, substring.length() - 3), s.p(method, i0Var, new Object[0]));
            } else {
                if (hashSet.contains("set" + substring)) {
                    if (substring.endsWith("Bytes")) {
                        if (treeMap.containsKey("get" + substring.substring(0, substring.length() - 5))) {
                        }
                    }
                    Method method4 = (Method) entry.getValue();
                    Method method5 = (Method) hashMap.get("has" + substring);
                    if (method4 != null) {
                        Object p10 = s.p(method4, i0Var, new Object[0]);
                        if (method5 == null) {
                            if (!b(p10)) {
                                booleanValue = true;
                            } else {
                                booleanValue = false;
                            }
                        } else {
                            booleanValue = ((Boolean) s.p(method5, i0Var, new Object[0])).booleanValue();
                        }
                        if (booleanValue) {
                            d(sb2, i10, substring, p10);
                        }
                    }
                }
            }
            i11 = i12;
        }
        e1 e1Var = ((s) i0Var).f25393i;
        if (e1Var != null) {
            e1Var.k(sb2, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static String f(i0 i0Var, String str) {
        StringBuilder sb2 = new StringBuilder();
        sb2.append("# ");
        sb2.append(str);
        e(i0Var, sb2, 0);
        return sb2.toString();
    }
}
