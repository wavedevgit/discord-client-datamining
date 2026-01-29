package com.facebook.react.uimanager;

import android.content.Context;
import android.view.View;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.DynamicFromObject;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.withpersona.sdk2.inquiry.network.dto.InquiryField;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ViewManagersPropertyCache {
    private static final Map<Class, Map<String, PropSetter>> CLASS_PROPS_CACHE = new HashMap();
    private static final Map<String, PropSetter> EMPTY_PROPS_MAP = new HashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class ArrayPropSetter extends PropSetter {
        public ArrayPropSetter(ReactProp reactProp, Method method) {
            super(reactProp, "Array", method);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            return (ReadableArray) obj;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class BooleanPropSetter extends PropSetter {
        private final boolean mDefaultValue;

        public BooleanPropSetter(ReactProp reactProp, Method method, boolean z10) {
            super(reactProp, InquiryField.BooleanField.TYPE, method);
            this.mDefaultValue = z10;
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            boolean booleanValue;
            if (obj == null) {
                booleanValue = this.mDefaultValue;
            } else {
                booleanValue = ((Boolean) obj).booleanValue();
            }
            if (booleanValue) {
                return Boolean.TRUE;
            }
            return Boolean.FALSE;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class BoxedBooleanPropSetter extends PropSetter {
        public BoxedBooleanPropSetter(ReactProp reactProp, Method method) {
            super(reactProp, InquiryField.BooleanField.TYPE, method);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            if (obj != null) {
                if (((Boolean) obj).booleanValue()) {
                    return Boolean.TRUE;
                }
                return Boolean.FALSE;
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class BoxedColorPropSetter extends PropSetter {
        public BoxedColorPropSetter(ReactProp reactProp, Method method) {
            super(reactProp, "mixed", method);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            if (obj != null) {
                return ColorPropConverter.getColor(obj, context);
            }
            return null;
        }

        public BoxedColorPropSetter(ReactPropGroup reactPropGroup, Method method, int i10) {
            super(reactPropGroup, "mixed", method, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class BoxedIntPropSetter extends PropSetter {
        public BoxedIntPropSetter(ReactProp reactProp, Method method) {
            super(reactProp, InquiryField.FloatField.TYPE2, method);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            if (obj != null) {
                if (obj instanceof Double) {
                    return Integer.valueOf(((Double) obj).intValue());
                }
                return (Integer) obj;
            }
            return null;
        }

        public BoxedIntPropSetter(ReactPropGroup reactPropGroup, Method method, int i10) {
            super(reactPropGroup, InquiryField.FloatField.TYPE2, method, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class ColorPropSetter extends PropSetter {
        private final int mDefaultValue;

        public ColorPropSetter(ReactProp reactProp, Method method) {
            this(reactProp, method, 0);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            if (obj == null) {
                return Integer.valueOf(this.mDefaultValue);
            }
            return ColorPropConverter.getColor(obj, context);
        }

        public ColorPropSetter(ReactProp reactProp, Method method, int i10) {
            super(reactProp, "mixed", method);
            this.mDefaultValue = i10;
        }

        public ColorPropSetter(ReactPropGroup reactPropGroup, Method method, int i10, int i11) {
            super(reactPropGroup, "mixed", method, i10);
            this.mDefaultValue = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class DynamicPropSetter extends PropSetter {
        public DynamicPropSetter(ReactProp reactProp, Method method) {
            super(reactProp, "mixed", method);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            if (obj instanceof Dynamic) {
                return obj;
            }
            return new DynamicFromObject(obj);
        }

        public DynamicPropSetter(ReactPropGroup reactPropGroup, Method method, int i10) {
            super(reactPropGroup, "mixed", method, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class MapPropSetter extends PropSetter {
        public MapPropSetter(ReactProp reactProp, Method method) {
            super(reactProp, "Map", method);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            return (ReadableMap) obj;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class StringPropSetter extends PropSetter {
        public StringPropSetter(ReactProp reactProp, Method method) {
            super(reactProp, "String", method);
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            return (String) obj;
        }
    }

    ViewManagersPropertyCache() {
    }

    public static void clear() {
        CLASS_PROPS_CACHE.clear();
        EMPTY_PROPS_MAP.clear();
    }

    private static PropSetter createPropSetter(ReactProp reactProp, Method method, Class<?> cls) {
        if (cls == Dynamic.class) {
            return new DynamicPropSetter(reactProp, method);
        }
        if (cls == Boolean.TYPE) {
            return new BooleanPropSetter(reactProp, method, reactProp.defaultBoolean());
        }
        if (cls == Integer.TYPE) {
            if ("Color".equals(reactProp.customType())) {
                return new ColorPropSetter(reactProp, method, reactProp.defaultInt());
            }
            return new IntPropSetter(reactProp, method, reactProp.defaultInt());
        } else if (cls == Float.TYPE) {
            return new FloatPropSetter(reactProp, method, reactProp.defaultFloat());
        } else {
            if (cls == Double.TYPE) {
                return new DoublePropSetter(reactProp, method, reactProp.defaultDouble());
            }
            if (cls == String.class) {
                return new StringPropSetter(reactProp, method);
            }
            if (cls == Boolean.class) {
                return new BoxedBooleanPropSetter(reactProp, method);
            }
            if (cls == Integer.class) {
                if ("Color".equals(reactProp.customType())) {
                    return new BoxedColorPropSetter(reactProp, method);
                }
                return new BoxedIntPropSetter(reactProp, method);
            } else if (cls == ReadableArray.class) {
                return new ArrayPropSetter(reactProp, method);
            } else {
                if (cls == ReadableMap.class) {
                    return new MapPropSetter(reactProp, method);
                }
                throw new RuntimeException("Unrecognized type: " + cls + " for method: " + method.getDeclaringClass().getName() + "#" + method.getName());
            }
        }
    }

    private static void createPropSetters(ReactPropGroup reactPropGroup, Method method, Class<?> cls, Map<String, PropSetter> map) {
        String[] names = reactPropGroup.names();
        int i10 = 0;
        if (cls == Dynamic.class) {
            while (i10 < names.length) {
                map.put(names[i10], new DynamicPropSetter(reactPropGroup, method, i10));
                i10++;
            }
        } else if (cls == Integer.TYPE) {
            while (i10 < names.length) {
                if ("Color".equals(reactPropGroup.customType())) {
                    map.put(names[i10], new ColorPropSetter(reactPropGroup, method, i10, reactPropGroup.defaultInt()));
                } else {
                    map.put(names[i10], new IntPropSetter(reactPropGroup, method, i10, reactPropGroup.defaultInt()));
                }
                i10++;
            }
        } else if (cls == Float.TYPE) {
            while (i10 < names.length) {
                map.put(names[i10], new FloatPropSetter(reactPropGroup, method, i10, reactPropGroup.defaultFloat()));
                i10++;
            }
        } else if (cls == Double.TYPE) {
            for (int i11 = 0; i11 < names.length; i11++) {
                map.put(names[i11], new DoublePropSetter(reactPropGroup, method, i11, reactPropGroup.defaultDouble()));
            }
        } else if (cls == Integer.class) {
            while (i10 < names.length) {
                if ("Color".equals(reactPropGroup.customType())) {
                    map.put(names[i10], new BoxedColorPropSetter(reactPropGroup, method, i10));
                } else {
                    map.put(names[i10], new BoxedIntPropSetter(reactPropGroup, method, i10));
                }
                i10++;
            }
        } else {
            throw new RuntimeException("Unrecognized type: " + cls + " for method: " + method.getDeclaringClass().getName() + "#" + method.getName());
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static ThreadLocal<Object[]> createThreadLocalArray(final int i10) {
        if (i10 <= 0) {
            return null;
        }
        return new ThreadLocal<Object[]>() { // from class: com.facebook.react.uimanager.ViewManagersPropertyCache.1
            /* JADX INFO: Access modifiers changed from: protected */
            @Override // java.lang.ThreadLocal
            public Object[] initialValue() {
                return new Object[i10];
            }
        };
    }

    private static void extractPropSettersFromShadowNodeClassDefinition(Class<? extends ReactShadowNode> cls, Map<String, PropSetter> map) {
        Method[] declaredMethods;
        for (Method method : cls.getDeclaredMethods()) {
            ReactProp reactProp = (ReactProp) method.getAnnotation(ReactProp.class);
            if (reactProp != null) {
                Class<?>[] parameterTypes = method.getParameterTypes();
                if (parameterTypes.length == 1) {
                    map.put(reactProp.name(), createPropSetter(reactProp, method, parameterTypes[0]));
                } else {
                    throw new RuntimeException("Wrong number of args for prop setter: " + cls.getName() + "#" + method.getName());
                }
            }
            ReactPropGroup reactPropGroup = (ReactPropGroup) method.getAnnotation(ReactPropGroup.class);
            if (reactPropGroup != null) {
                Class<?>[] parameterTypes2 = method.getParameterTypes();
                if (parameterTypes2.length == 2) {
                    if (parameterTypes2[0] == Integer.TYPE) {
                        createPropSetters(reactPropGroup, method, parameterTypes2[1], map);
                    } else {
                        throw new RuntimeException("Second argument should be property index: " + cls.getName() + "#" + method.getName());
                    }
                } else {
                    throw new RuntimeException("Wrong number of args for group prop setter: " + cls.getName() + "#" + method.getName());
                }
            }
        }
    }

    private static void extractPropSettersFromViewManagerClassDefinition(Class<? extends ViewManager> cls, Map<String, PropSetter> map) {
        Method[] declaredMethods;
        for (Method method : cls.getDeclaredMethods()) {
            ReactProp reactProp = (ReactProp) method.getAnnotation(ReactProp.class);
            if (reactProp != null) {
                Class<?>[] parameterTypes = method.getParameterTypes();
                if (parameterTypes.length == 2) {
                    if (View.class.isAssignableFrom(parameterTypes[0])) {
                        map.put(reactProp.name(), createPropSetter(reactProp, method, parameterTypes[1]));
                    } else {
                        throw new RuntimeException("First param should be a view subclass to be updated: " + cls.getName() + "#" + method.getName());
                    }
                } else {
                    throw new RuntimeException("Wrong number of args for prop setter: " + cls.getName() + "#" + method.getName());
                }
            }
            ReactPropGroup reactPropGroup = (ReactPropGroup) method.getAnnotation(ReactPropGroup.class);
            if (reactPropGroup != null) {
                Class<?>[] parameterTypes2 = method.getParameterTypes();
                if (parameterTypes2.length == 3) {
                    if (View.class.isAssignableFrom(parameterTypes2[0])) {
                        if (parameterTypes2[1] == Integer.TYPE) {
                            createPropSetters(reactPropGroup, method, parameterTypes2[2], map);
                        } else {
                            throw new RuntimeException("Second argument should be property index: " + cls.getName() + "#" + method.getName());
                        }
                    } else {
                        throw new RuntimeException("First param should be a view subclass to be updated: " + cls.getName() + "#" + method.getName());
                    }
                } else {
                    throw new RuntimeException("Wrong number of args for group prop setter: " + cls.getName() + "#" + method.getName());
                }
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Map<String, PropSetter> getNativePropSettersForShadowNodeClass(Class<? extends ReactShadowNode> cls) {
        if (cls == null) {
            return EMPTY_PROPS_MAP;
        }
        for (Class<?> cls2 : cls.getInterfaces()) {
            if (cls2 == ReactShadowNode.class) {
                return EMPTY_PROPS_MAP;
            }
        }
        Map<Class, Map<String, PropSetter>> map = CLASS_PROPS_CACHE;
        Map<String, PropSetter> map2 = map.get(cls);
        if (map2 != null) {
            return map2;
        }
        HashMap hashMap = new HashMap(getNativePropSettersForShadowNodeClass(cls.getSuperclass()));
        extractPropSettersFromShadowNodeClassDefinition(cls, hashMap);
        map.put(cls, hashMap);
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Map<String, PropSetter> getNativePropSettersForViewManagerClass(Class<? extends ViewManager> cls) {
        if (cls == ViewManager.class) {
            return EMPTY_PROPS_MAP;
        }
        Map<Class, Map<String, PropSetter>> map = CLASS_PROPS_CACHE;
        Map<String, PropSetter> map2 = map.get(cls);
        if (map2 != null) {
            return map2;
        }
        HashMap hashMap = new HashMap(getNativePropSettersForViewManagerClass(cls.getSuperclass()));
        extractPropSettersFromViewManagerClassDefinition(cls, hashMap);
        map.put(cls, hashMap);
        return hashMap;
    }

    static Map<String, String> getNativePropsForView(Class<? extends ViewManager> cls, Class<? extends ReactShadowNode> cls2) {
        HashMap hashMap = new HashMap();
        for (PropSetter propSetter : getNativePropSettersForViewManagerClass(cls).values()) {
            hashMap.put(propSetter.getPropName(), propSetter.getPropType());
        }
        for (PropSetter propSetter2 : getNativePropSettersForShadowNodeClass(cls2).values()) {
            hashMap.put(propSetter2.getPropName(), propSetter2.getPropType());
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class DoublePropSetter extends PropSetter {
        private final double mDefaultValue;

        public DoublePropSetter(ReactProp reactProp, Method method, double d10) {
            super(reactProp, InquiryField.FloatField.TYPE2, method);
            this.mDefaultValue = d10;
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            double doubleValue;
            if (obj == null) {
                doubleValue = this.mDefaultValue;
            } else {
                doubleValue = ((Double) obj).doubleValue();
            }
            return Double.valueOf(doubleValue);
        }

        public DoublePropSetter(ReactPropGroup reactPropGroup, Method method, int i10, double d10) {
            super(reactPropGroup, InquiryField.FloatField.TYPE2, method, i10);
            this.mDefaultValue = d10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class FloatPropSetter extends PropSetter {
        private final float mDefaultValue;

        public FloatPropSetter(ReactProp reactProp, Method method, float f10) {
            super(reactProp, InquiryField.FloatField.TYPE2, method);
            this.mDefaultValue = f10;
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            float floatValue;
            if (obj == null) {
                floatValue = this.mDefaultValue;
            } else {
                floatValue = ((Double) obj).floatValue();
            }
            return Float.valueOf(floatValue);
        }

        public FloatPropSetter(ReactPropGroup reactPropGroup, Method method, int i10, float f10) {
            super(reactPropGroup, InquiryField.FloatField.TYPE2, method, i10);
            this.mDefaultValue = f10;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class IntPropSetter extends PropSetter {
        private final int mDefaultValue;

        public IntPropSetter(ReactProp reactProp, Method method, int i10) {
            super(reactProp, InquiryField.FloatField.TYPE2, method);
            this.mDefaultValue = i10;
        }

        @Override // com.facebook.react.uimanager.ViewManagersPropertyCache.PropSetter
        protected Object getValueOrDefault(Object obj, Context context) {
            int intValue;
            if (obj == null) {
                intValue = this.mDefaultValue;
            } else {
                intValue = ((Double) obj).intValue();
            }
            return Integer.valueOf(intValue);
        }

        public IntPropSetter(ReactPropGroup reactPropGroup, Method method, int i10, int i11) {
            super(reactPropGroup, InquiryField.FloatField.TYPE2, method, i10);
            this.mDefaultValue = i11;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class PropSetter {
        protected final Integer mIndex;
        protected final String mPropName;
        protected final String mPropType;
        protected final Method mSetter;
        private static final ThreadLocal<Object[]> VIEW_MGR_ARGS = ViewManagersPropertyCache.createThreadLocalArray(2);
        private static final ThreadLocal<Object[]> VIEW_MGR_GROUP_ARGS = ViewManagersPropertyCache.createThreadLocalArray(3);
        private static final ThreadLocal<Object[]> SHADOW_ARGS = ViewManagersPropertyCache.createThreadLocalArray(1);
        private static final ThreadLocal<Object[]> SHADOW_GROUP_ARGS = ViewManagersPropertyCache.createThreadLocalArray(2);

        public String getPropName() {
            return this.mPropName;
        }

        public String getPropType() {
            return this.mPropType;
        }

        protected abstract Object getValueOrDefault(Object obj, Context context);

        public void updateShadowNodeProp(ReactShadowNode reactShadowNode, Object obj) {
            Object[] objArr;
            try {
                if (this.mIndex == null) {
                    objArr = SHADOW_ARGS.get();
                    objArr[0] = getValueOrDefault(obj, reactShadowNode.getThemedContext());
                } else {
                    objArr = SHADOW_GROUP_ARGS.get();
                    objArr[0] = this.mIndex;
                    objArr[1] = getValueOrDefault(obj, reactShadowNode.getThemedContext());
                }
                this.mSetter.invoke(reactShadowNode, objArr);
                Arrays.fill(objArr, (Object) null);
            } catch (Throwable th2) {
                p8.a.j(ViewManager.class, "Error while updating prop " + this.mPropName, th2);
                throw new JSApplicationIllegalArgumentException("Error while updating property '" + this.mPropName + "' in shadow node of type: " + reactShadowNode.getViewClass(), th2);
            }
        }

        public void updateViewProp(ViewManager viewManager, View view, Object obj) {
            Object[] objArr;
            try {
                if (this.mIndex == null) {
                    objArr = VIEW_MGR_ARGS.get();
                    objArr[0] = view;
                    objArr[1] = getValueOrDefault(obj, view.getContext());
                } else {
                    objArr = VIEW_MGR_GROUP_ARGS.get();
                    objArr[0] = view;
                    objArr[1] = this.mIndex;
                    objArr[2] = getValueOrDefault(obj, view.getContext());
                }
                this.mSetter.invoke(viewManager, objArr);
                Arrays.fill(objArr, (Object) null);
            } catch (Throwable th2) {
                p8.a.j(ViewManager.class, "Error while updating prop " + this.mPropName, th2);
                throw new JSApplicationIllegalArgumentException("Error while updating property '" + this.mPropName + "' of a view managed by: " + viewManager.getName(), th2);
            }
        }

        private PropSetter(ReactProp reactProp, String str, Method method) {
            this.mPropName = reactProp.name();
            this.mPropType = "__default_type__".equals(reactProp.customType()) ? str : reactProp.customType();
            this.mSetter = method;
            this.mIndex = null;
        }

        private PropSetter(ReactPropGroup reactPropGroup, String str, Method method, int i10) {
            this.mPropName = reactPropGroup.names()[i10];
            this.mPropType = "__default_type__".equals(reactPropGroup.customType()) ? str : reactPropGroup.customType();
            this.mSetter = method;
            this.mIndex = Integer.valueOf(i10);
        }
    }
}
