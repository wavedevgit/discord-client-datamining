package com.facebook.react.bridge;

import com.facebook.react.bridge.JavaMethodWrapper;
import com.facebook.react.bridge.JavaModuleWrapper;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Arrays;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
import qb.b;
@Metadata(d1 = {"\u0000^\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0002\b\u0005\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0006\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\u0002\n\u0002\b\f\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\u0000\u0018\u0000 32\u00020\u0001:\u000223B\u001f\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0007¢\u0006\u0004\b\b\u0010\tJ\b\u0010!\u001a\u00020\"H\u0002J/\u0010%\u001a\u00020\u00132\u0006\u0010\u0004\u001a\u00020\u00052\u0010\u0010&\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u000e0\r2\u0006\u0010\u0006\u001a\u00020\u0007H\u0002¢\u0006\u0002\u0010'J)\u0010(\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u001a0\r2\u0010\u0010&\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u000e0\rH\u0002¢\u0006\u0002\u0010)J\b\u0010*\u001a\u00020\u0011H\u0002J\u0018\u0010+\u001a\u00020\u00132\u0006\u0010,\u001a\u00020\u00112\u0006\u0010 \u001a\u00020\u0011H\u0002J\u0018\u0010-\u001a\u00020\"2\u0006\u0010.\u001a\u00020/2\u0006\u00100\u001a\u000201H\u0016R\u000e\u0010\u0002\u001a\u00020\u0003X\u0082\u0004¢\u0006\u0002\n\u0000R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u001a\u0010\f\u001a\f\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u000e0\rX\u0082\u0004¢\u0006\u0004\n\u0002\u0010\u000fR\u000e\u0010\u0010\u001a\u00020\u0011X\u0082\u0004¢\u0006\u0002\n\u0000R\u001a\u0010\u0012\u001a\u00020\u0013X\u0096\u000e¢\u0006\u000e\n\u0000\u001a\u0004\b\u0014\u0010\u0015\"\u0004\b\u0016\u0010\u0017R\u000e\u0010\u0018\u001a\u00020\u0007X\u0082\u000e¢\u0006\u0002\n\u0000R\u001c\u0010\u0019\u001a\u000e\u0012\b\u0012\u0006\u0012\u0002\b\u00030\u001a\u0018\u00010\rX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u001bR\u0010\u0010\u001c\u001a\u0004\u0018\u00010\u0013X\u0082\u000e¢\u0006\u0002\n\u0000R\u001a\u0010\u001d\u001a\f\u0012\u0006\u0012\u0004\u0018\u00010\u001e\u0018\u00010\rX\u0082\u000e¢\u0006\u0004\n\u0002\u0010\u001fR\u000e\u0010 \u001a\u00020\u0011X\u0082\u000e¢\u0006\u0002\n\u0000R\u0013\u0010#\u001a\u0004\u0018\u00010\u00138F¢\u0006\u0006\u001a\u0004\b$\u0010\u0015¨\u00064"}, d2 = {"Lcom/facebook/react/bridge/JavaMethodWrapper;", "Lcom/facebook/react/bridge/JavaModuleWrapper$NativeMethod;", "moduleWrapper", "Lcom/facebook/react/bridge/JavaModuleWrapper;", "method", "Ljava/lang/reflect/Method;", "isSync", "", "<init>", "(Lcom/facebook/react/bridge/JavaModuleWrapper;Ljava/lang/reflect/Method;Z)V", "getMethod", "()Ljava/lang/reflect/Method;", "parameterTypes", "", "Ljava/lang/Class;", "[Ljava/lang/Class;", "paramLength", "", "type", "", "getType", "()Ljava/lang/String;", "setType", "(Ljava/lang/String;)V", "argumentsProcessed", "argumentExtractors", "Lcom/facebook/react/bridge/JavaMethodWrapper$ArgumentExtractor;", "[Lcom/facebook/react/bridge/JavaMethodWrapper$ArgumentExtractor;", "internalSignature", "arguments", "", "[Ljava/lang/Object;", "jsArgumentsNeeded", "processArguments", "", "signature", "getSignature", "buildSignature", "paramTypes", "(Ljava/lang/reflect/Method;[Ljava/lang/Class;Z)Ljava/lang/String;", "buildArgumentExtractors", "([Ljava/lang/Class;)[Lcom/facebook/react/bridge/JavaMethodWrapper$ArgumentExtractor;", "calculateJSArgumentsNeeded", "getAffectedRange", "startIndex", "invoke", "jsInstance", "Lcom/facebook/react/bridge/JSInstance;", "parameters", "Lcom/facebook/react/bridge/ReadableArray;", "ArgumentExtractor", "Companion", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nJavaMethodWrapper.kt\nKotlin\n*S Kotlin\n*F\n+ 1 JavaMethodWrapper.kt\ncom/facebook/react/bridge/JavaMethodWrapper\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,400:1\n1#2:401\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class JavaMethodWrapper implements JavaModuleWrapper.NativeMethod {
    @NotNull
    private static final ArgumentExtractor<ReadableArray> ARGUMENT_EXTRACTOR_ARRAY;
    @NotNull
    private static final ArgumentExtractor<Boolean> ARGUMENT_EXTRACTOR_BOOLEAN;
    @NotNull
    private static final ArgumentExtractor<Callback> ARGUMENT_EXTRACTOR_CALLBACK;
    @NotNull
    private static final ArgumentExtractor<Double> ARGUMENT_EXTRACTOR_DOUBLE;
    @NotNull
    private static final ArgumentExtractor<Dynamic> ARGUMENT_EXTRACTOR_DYNAMIC;
    @NotNull
    private static final ArgumentExtractor<Float> ARGUMENT_EXTRACTOR_FLOAT;
    @NotNull
    private static final ArgumentExtractor<Integer> ARGUMENT_EXTRACTOR_INTEGER;
    @NotNull
    private static final ArgumentExtractor<ReadableMap> ARGUMENT_EXTRACTOR_MAP;
    @NotNull
    private static final ArgumentExtractor<Promise> ARGUMENT_EXTRACTOR_PROMISE;
    @NotNull
    private static final ArgumentExtractor<String> ARGUMENT_EXTRACTOR_STRING;
    @NotNull
    public static final Companion Companion = new Companion(null);
    private static final boolean DEBUG;
    private ArgumentExtractor<?>[] argumentExtractors;
    private Object[] arguments;
    private boolean argumentsProcessed;
    private String internalSignature;
    private int jsArgumentsNeeded;
    @NotNull
    private final Method method;
    @NotNull
    private final JavaModuleWrapper moduleWrapper;
    private final int paramLength;
    @NotNull
    private final Class<?>[] parameterTypes;
    @NotNull
    private String type;

    /* JADX INFO: Access modifiers changed from: private */
    @Metadata(d1 = {"\u0000$\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\b\"\u0018\u0000*\u0004\b\u0000\u0010\u00012\u00020\u0002B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J\b\u0010\u0005\u001a\u00020\u0006H\u0016J'\u0010\u0007\u001a\u0004\u0018\u00018\u00002\u0006\u0010\b\u001a\u00020\t2\u0006\u0010\n\u001a\u00020\u000b2\u0006\u0010\f\u001a\u00020\u0006H&¢\u0006\u0002\u0010\r¨\u0006\u000e"}, d2 = {"Lcom/facebook/react/bridge/JavaMethodWrapper$ArgumentExtractor;", "T", "", "<init>", "()V", "getJSArgumentsNeeded", "", "extractArgument", "jsInstance", "Lcom/facebook/react/bridge/JSInstance;", "jsArguments", "Lcom/facebook/react/bridge/ReadableArray;", "atIndex", "(Lcom/facebook/react/bridge/JSInstance;Lcom/facebook/react/bridge/ReadableArray;I)Ljava/lang/Object;", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class ArgumentExtractor<T> {
        public abstract T extractArgument(@NotNull JSInstance jSInstance, @NotNull ReadableArray readableArray, int i10);

        public int getJSArgumentsNeeded() {
            return 1;
        }
    }

    @Metadata(d1 = {"\u0000\\\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u0006\n\u0000\n\u0002\u0010\u0007\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\f\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\u0014\u0010\u001a\u001a\u00020\u001b2\n\u0010\u001c\u001a\u0006\u0012\u0002\b\u00030\u001dH\u0002J\u0014\u0010\u001e\u001a\u00020\u001b2\n\u0010\u001f\u001a\u0006\u0012\u0002\b\u00030\u001dH\u0002J\u0014\u0010 \u001a\u00020\u001b2\n\u0010!\u001a\u0006\u0012\u0002\b\u00030\u001dH\u0002J\u0010\u0010\"\u001a\u00020\u000e2\u0006\u0010#\u001a\u00020\u000eH\u0002R\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0007\u001a\b\u0012\u0004\u0012\u00020\b0\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\t\u001a\b\u0012\u0004\u0012\u00020\n0\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u000b\u001a\b\u0012\u0004\u0012\u00020\f0\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\r\u001a\b\u0012\u0004\u0012\u00020\u000e0\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00100\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0011\u001a\b\u0012\u0004\u0012\u00020\u00120\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0013\u001a\b\u0012\u0004\u0012\u00020\u00140\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0015\u001a\b\u0012\u0004\u0012\u00020\u00160\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u0014\u0010\u0017\u001a\b\u0012\u0004\u0012\u00020\u00180\u0005X\u0082\u0004¢\u0006\u0002\n\u0000R\u000e\u0010\u0019\u001a\u00020\u0006X\u0082\u0004¢\u0006\u0002\n\u0000¨\u0006$"}, d2 = {"Lcom/facebook/react/bridge/JavaMethodWrapper$Companion;", "", "<init>", "()V", "ARGUMENT_EXTRACTOR_BOOLEAN", "Lcom/facebook/react/bridge/JavaMethodWrapper$ArgumentExtractor;", "", "ARGUMENT_EXTRACTOR_DOUBLE", "", "ARGUMENT_EXTRACTOR_FLOAT", "", "ARGUMENT_EXTRACTOR_INTEGER", "", "ARGUMENT_EXTRACTOR_STRING", "", "ARGUMENT_EXTRACTOR_ARRAY", "Lcom/facebook/react/bridge/ReadableArray;", "ARGUMENT_EXTRACTOR_DYNAMIC", "Lcom/facebook/react/bridge/Dynamic;", "ARGUMENT_EXTRACTOR_MAP", "Lcom/facebook/react/bridge/ReadableMap;", "ARGUMENT_EXTRACTOR_CALLBACK", "Lcom/facebook/react/bridge/Callback;", "ARGUMENT_EXTRACTOR_PROMISE", "Lcom/facebook/react/bridge/Promise;", "DEBUG", "paramTypeToChar", "", "paramClass", "Ljava/lang/Class;", "returnTypeToChar", "returnClass", "commonTypeToChar", "typeClass", "createInvokeExceptionMessage", "traceName", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final char commonTypeToChar(Class<?> cls) {
            if (Intrinsics.areEqual(cls, Boolean.TYPE)) {
                return 'z';
            }
            if (Intrinsics.areEqual(cls, Boolean.class)) {
                return 'Z';
            }
            if (Intrinsics.areEqual(cls, Integer.TYPE)) {
                return 'i';
            }
            if (Intrinsics.areEqual(cls, Integer.class)) {
                return 'I';
            }
            if (Intrinsics.areEqual(cls, Double.TYPE)) {
                return 'd';
            }
            if (Intrinsics.areEqual(cls, Double.class)) {
                return 'D';
            }
            if (Intrinsics.areEqual(cls, Float.TYPE)) {
                return 'f';
            }
            if (Intrinsics.areEqual(cls, Float.class)) {
                return 'F';
            }
            if (Intrinsics.areEqual(cls, String.class)) {
                return 'S';
            }
            return (char) 0;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final String createInvokeExceptionMessage(String str) {
            return "Could not invoke " + str;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final char paramTypeToChar(Class<?> cls) {
            char commonTypeToChar = commonTypeToChar(cls);
            if (commonTypeToChar != 0) {
                return commonTypeToChar;
            }
            if (Intrinsics.areEqual(cls, Callback.class)) {
                return 'X';
            }
            if (Intrinsics.areEqual(cls, Promise.class)) {
                return 'P';
            }
            if (Intrinsics.areEqual(cls, ReadableMap.class)) {
                return 'M';
            }
            if (Intrinsics.areEqual(cls, ReadableArray.class)) {
                return 'A';
            }
            if (Intrinsics.areEqual(cls, Dynamic.class)) {
                return 'Y';
            }
            String simpleName = cls.getSimpleName();
            throw new RuntimeException("Got unknown param class: " + simpleName);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final char returnTypeToChar(Class<?> cls) {
            char commonTypeToChar = commonTypeToChar(cls);
            if (commonTypeToChar != 0) {
                return commonTypeToChar;
            }
            if (Intrinsics.areEqual(cls, Void.TYPE)) {
                return 'v';
            }
            if (Intrinsics.areEqual(cls, WritableMap.class)) {
                return 'M';
            }
            if (Intrinsics.areEqual(cls, WritableArray.class)) {
                return 'A';
            }
            String simpleName = cls.getSimpleName();
            throw new RuntimeException("Got unknown return class: " + simpleName);
        }

        private Companion() {
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("JavaMethodWrapper", LegacyArchitectureLogLevel.ERROR);
        ARGUMENT_EXTRACTOR_BOOLEAN = new ArgumentExtractor<Boolean>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_BOOLEAN$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public Boolean extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return Boolean.valueOf(jsArguments.getBoolean(i10));
            }
        };
        ARGUMENT_EXTRACTOR_DOUBLE = new ArgumentExtractor<Double>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_DOUBLE$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public Double extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return Double.valueOf(jsArguments.getDouble(i10));
            }
        };
        ARGUMENT_EXTRACTOR_FLOAT = new ArgumentExtractor<Float>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_FLOAT$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public Float extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return Float.valueOf((float) jsArguments.getDouble(i10));
            }
        };
        ARGUMENT_EXTRACTOR_INTEGER = new ArgumentExtractor<Integer>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_INTEGER$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public Integer extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return Integer.valueOf((int) jsArguments.getDouble(i10));
            }
        };
        ARGUMENT_EXTRACTOR_STRING = new ArgumentExtractor<String>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_STRING$1
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public String extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return jsArguments.getString(i10);
            }
        };
        ARGUMENT_EXTRACTOR_ARRAY = new ArgumentExtractor<ReadableArray>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_ARRAY$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public ReadableArray extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return jsArguments.getArray(i10);
            }
        };
        ARGUMENT_EXTRACTOR_DYNAMIC = new ArgumentExtractor<Dynamic>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_DYNAMIC$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public Dynamic extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return DynamicFromArray.Companion.create(jsArguments, i10);
            }
        };
        ARGUMENT_EXTRACTOR_MAP = new ArgumentExtractor<ReadableMap>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_MAP$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public ReadableMap extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                return jsArguments.getMap(i10);
            }
        };
        ARGUMENT_EXTRACTOR_CALLBACK = new ArgumentExtractor<Callback>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_CALLBACK$1
            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public Callback extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                if (jsArguments.isNull(i10)) {
                    return null;
                }
                return new CallbackImpl(jsInstance, (int) jsArguments.getDouble(i10));
            }
        };
        ARGUMENT_EXTRACTOR_PROMISE = new ArgumentExtractor<Promise>() { // from class: com.facebook.react.bridge.JavaMethodWrapper$Companion$ARGUMENT_EXTRACTOR_PROMISE$1
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public int getJSArgumentsNeeded() {
                return 2;
            }

            /* JADX WARN: Can't rename method to resolve collision */
            @Override // com.facebook.react.bridge.JavaMethodWrapper.ArgumentExtractor
            public Promise extractArgument(JSInstance jsInstance, ReadableArray jsArguments, int i10) {
                JavaMethodWrapper.ArgumentExtractor argumentExtractor;
                JavaMethodWrapper.ArgumentExtractor argumentExtractor2;
                Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
                Intrinsics.checkNotNullParameter(jsArguments, "jsArguments");
                argumentExtractor = JavaMethodWrapper.ARGUMENT_EXTRACTOR_CALLBACK;
                argumentExtractor2 = JavaMethodWrapper.ARGUMENT_EXTRACTOR_CALLBACK;
                return new PromiseImpl((Callback) argumentExtractor.extractArgument(jsInstance, jsArguments, i10), (Callback) argumentExtractor2.extractArgument(jsInstance, jsArguments, i10 + 1));
            }
        };
        DEBUG = a9.c.a().a(b9.a.f6501e);
    }

    public JavaMethodWrapper(@NotNull JavaModuleWrapper moduleWrapper, @NotNull Method method, boolean z10) {
        Intrinsics.checkNotNullParameter(moduleWrapper, "moduleWrapper");
        Intrinsics.checkNotNullParameter(method, "method");
        this.moduleWrapper = moduleWrapper;
        this.method = method;
        this.type = BaseJavaModule.METHOD_TYPE_ASYNC;
        method.setAccessible(true);
        Class<?>[] parameterTypes = method.getParameterTypes();
        Intrinsics.checkNotNullExpressionValue(parameterTypes, "getParameterTypes(...)");
        this.parameterTypes = parameterTypes;
        int length = parameterTypes.length;
        this.paramLength = length;
        if (z10) {
            setType(BaseJavaModule.METHOD_TYPE_SYNC);
        } else if (length > 0 && Intrinsics.areEqual(parameterTypes[length - 1], Promise.class)) {
            setType(BaseJavaModule.METHOD_TYPE_PROMISE);
        }
    }

    private final ArgumentExtractor<?>[] buildArgumentExtractors(Class<?>[] clsArr) {
        ArgumentExtractor argumentExtractor;
        ArgumentExtractor[] argumentExtractorArr = new ArgumentExtractor[clsArr.length];
        int i10 = 0;
        while (i10 < clsArr.length) {
            Class<?> cls = clsArr[i10];
            if (!Intrinsics.areEqual(cls, Boolean.class) && !Intrinsics.areEqual(cls, Boolean.TYPE)) {
                if (!Intrinsics.areEqual(cls, Integer.class) && !Intrinsics.areEqual(cls, Integer.TYPE)) {
                    if (!Intrinsics.areEqual(cls, Double.class) && !Intrinsics.areEqual(cls, Double.TYPE)) {
                        if (!Intrinsics.areEqual(cls, Float.class) && !Intrinsics.areEqual(cls, Float.TYPE)) {
                            if (Intrinsics.areEqual(cls, String.class)) {
                                argumentExtractor = ARGUMENT_EXTRACTOR_STRING;
                            } else if (Intrinsics.areEqual(cls, Callback.class)) {
                                argumentExtractor = ARGUMENT_EXTRACTOR_CALLBACK;
                            } else if (Intrinsics.areEqual(cls, Promise.class)) {
                                if (i10 == clsArr.length - 1) {
                                    argumentExtractor = ARGUMENT_EXTRACTOR_PROMISE;
                                } else {
                                    throw new IllegalStateException("Promise must be used as last parameter only");
                                }
                            } else if (Intrinsics.areEqual(cls, ReadableMap.class)) {
                                argumentExtractor = ARGUMENT_EXTRACTOR_MAP;
                            } else if (Intrinsics.areEqual(cls, ReadableArray.class)) {
                                argumentExtractor = ARGUMENT_EXTRACTOR_ARRAY;
                            } else if (Intrinsics.areEqual(cls, Dynamic.class)) {
                                argumentExtractor = ARGUMENT_EXTRACTOR_DYNAMIC;
                            } else {
                                String simpleName = cls.getSimpleName();
                                throw new RuntimeException("Got unknown argument class: " + simpleName);
                            }
                        } else {
                            argumentExtractor = ARGUMENT_EXTRACTOR_FLOAT;
                        }
                    } else {
                        argumentExtractor = ARGUMENT_EXTRACTOR_DOUBLE;
                    }
                } else {
                    argumentExtractor = ARGUMENT_EXTRACTOR_INTEGER;
                }
            } else {
                argumentExtractor = ARGUMENT_EXTRACTOR_BOOLEAN;
            }
            argumentExtractorArr[i10] = argumentExtractor;
            i10 += argumentExtractor.getJSArgumentsNeeded();
        }
        return (ArgumentExtractor[]) kotlin.collections.i.z0(argumentExtractorArr);
    }

    private final String buildSignature(Method method, Class<?>[] clsArr, boolean z10) {
        StringBuilder sb2 = new StringBuilder(clsArr.length + 2);
        if (z10) {
            Companion companion = Companion;
            Class<?> returnType = method.getReturnType();
            Intrinsics.checkNotNullExpressionValue(returnType, "getReturnType(...)");
            sb2.append(companion.returnTypeToChar(returnType));
            sb2.append('.');
        } else {
            sb2.append("v.");
        }
        int length = clsArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            Class<?> cls = clsArr[i10];
            if (Intrinsics.areEqual(cls, Promise.class) && i10 != clsArr.length - 1) {
                throw new IllegalStateException("Promise must be used as last parameter only");
            }
            sb2.append(Companion.paramTypeToChar(cls));
        }
        return sb2.toString();
    }

    private final int calculateJSArgumentsNeeded() {
        ArgumentExtractor<?>[] argumentExtractorArr = this.argumentExtractors;
        if (argumentExtractorArr != null) {
            int i10 = 0;
            for (ArgumentExtractor<?> argumentExtractor : argumentExtractorArr) {
                i10 += argumentExtractor.getJSArgumentsNeeded();
            }
            return i10;
        }
        throw new IllegalStateException("Required value was null.");
    }

    private final String getAffectedRange(int i10, int i11) {
        if (i11 > 1) {
            return i10 + "-" + ((i11 + i10) - 1);
        }
        return String.valueOf(i10);
    }

    private final void processArguments() {
        if (this.argumentsProcessed) {
            return;
        }
        b.a a10 = qb.b.a(0L, "processArguments");
        String name = this.moduleWrapper.getName();
        String name2 = this.method.getName();
        a10.b("method", name + "." + name2).c();
        try {
            this.argumentsProcessed = true;
            this.argumentExtractors = buildArgumentExtractors(this.parameterTypes);
            this.internalSignature = buildSignature(this.method, this.parameterTypes, Intrinsics.areEqual(getType(), BaseJavaModule.METHOD_TYPE_SYNC));
            this.arguments = new Object[this.parameterTypes.length];
            this.jsArgumentsNeeded = calculateJSArgumentsNeeded();
        } finally {
            qb.b.b(0L).c();
        }
    }

    @NotNull
    public final Method getMethod() {
        return this.method;
    }

    public final String getSignature() {
        if (!this.argumentsProcessed) {
            processArguments();
        }
        String str = this.internalSignature;
        if (str != null) {
            return str;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // com.facebook.react.bridge.JavaModuleWrapper.NativeMethod
    @NotNull
    public String getType() {
        return this.type;
    }

    @Override // com.facebook.react.bridge.JavaModuleWrapper.NativeMethod
    public void invoke(@NotNull JSInstance jsInstance, @NotNull ReadableArray parameters) {
        Intrinsics.checkNotNullParameter(jsInstance, "jsInstance");
        Intrinsics.checkNotNullParameter(parameters, "parameters");
        String str = this.moduleWrapper.getName() + "." + this.method.getName();
        qb.b.a(0L, "callJavaModuleMethod").b("method", str).c();
        if (DEBUG) {
            a9.c.a().b(b9.a.f6501e, "JS->Java: %s.%s()", this.moduleWrapper.getName(), this.method.getName());
        }
        try {
            if (!this.argumentsProcessed) {
                processArguments();
            }
            Object[] objArr = this.arguments;
            if (objArr != null) {
                ArgumentExtractor<?>[] argumentExtractorArr = this.argumentExtractors;
                if (argumentExtractorArr != null) {
                    if (this.jsArgumentsNeeded == parameters.size()) {
                        int i10 = 0;
                        for (int i11 = 0; i11 < argumentExtractorArr.length; i11++) {
                            try {
                                objArr[i11] = argumentExtractorArr[i11].extractArgument(jsInstance, parameters, i10);
                                i10 += argumentExtractorArr[i11].getJSArgumentsNeeded();
                            } catch (UnexpectedNativeTypeException e10) {
                                throw new NativeArgumentsParseException(e10.getMessage() + " (constructing arguments for " + str + " at argument index " + getAffectedRange(i10, argumentExtractorArr[i11].getJSArgumentsNeeded()) + ")", e10);
                            } catch (NullPointerException e11) {
                                throw new NativeArgumentsParseException(e11.getMessage() + " (constructing arguments for " + str + " at argument index " + getAffectedRange(i10, argumentExtractorArr[i11].getJSArgumentsNeeded()) + ")", e11);
                            }
                        }
                        try {
                            this.method.invoke(this.moduleWrapper.getModule(), Arrays.copyOf(objArr, objArr.length));
                            qb.b.b(0L).c();
                            return;
                        } catch (IllegalAccessException e12) {
                            throw new RuntimeException(Companion.createInvokeExceptionMessage(str), e12);
                        } catch (IllegalArgumentException e13) {
                            throw new RuntimeException(Companion.createInvokeExceptionMessage(str), e13);
                        } catch (InvocationTargetException e14) {
                            if (e14.getCause() instanceof RuntimeException) {
                                Throwable cause = e14.getCause();
                                Intrinsics.checkNotNull(cause, "null cannot be cast to non-null type java.lang.RuntimeException");
                                throw ((RuntimeException) cause);
                            }
                            throw new RuntimeException(Companion.createInvokeExceptionMessage(str), e14);
                        }
                    }
                    throw new NativeArgumentsParseException(str + " got " + parameters.size() + " arguments, expected " + this.jsArgumentsNeeded);
                }
                throw new IllegalArgumentException("processArguments failed: 'argumentExtractors' is null.");
            }
            throw new IllegalArgumentException("processArguments failed: 'arguments' is null.");
        } catch (Throwable th2) {
            qb.b.b(0L).c();
            throw th2;
        }
    }

    public void setType(@NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "<set-?>");
        this.type = str;
    }
}
