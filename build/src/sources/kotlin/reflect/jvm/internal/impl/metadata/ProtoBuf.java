package kotlin.reflect.jvm.internal.impl.metadata;

import androidx.recyclerview.widget.RecyclerView;
import androidx.recyclerview.widget.h;
import com.discord.chat.presentation.message.view.MediaImageViewKt;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.events.PointerEventHelper;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.AbstractParser;
import kotlin.reflect.jvm.internal.impl.protobuf.ByteString;
import kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.CodedOutputStream;
import kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite;
import kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.Internal;
import kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException;
import kotlin.reflect.jvm.internal.impl.protobuf.LazyStringArrayList;
import kotlin.reflect.jvm.internal.impl.protobuf.LazyStringList;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLite;
import kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder;
import kotlin.reflect.jvm.internal.impl.protobuf.Parser;
import kotlin.reflect.jvm.internal.impl.protobuf.ProtocolStringList;
import org.webrtc.PeerConnection;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ProtoBuf {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Annotation extends GeneratedMessageLite implements AnnotationOrBuilder {
        public static Parser<Annotation> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final Annotation f33053s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33054e;

        /* renamed from: i  reason: collision with root package name */
        private int f33055i;

        /* renamed from: o  reason: collision with root package name */
        private int f33056o;

        /* renamed from: p  reason: collision with root package name */
        private List f33057p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33058q;

        /* renamed from: r  reason: collision with root package name */
        private int f33059r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: s  reason: collision with root package name */
            private static final Argument f33060s;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33061e;

            /* renamed from: i  reason: collision with root package name */
            private int f33062i;

            /* renamed from: o  reason: collision with root package name */
            private int f33063o;

            /* renamed from: p  reason: collision with root package name */
            private Value f33064p;

            /* renamed from: q  reason: collision with root package name */
            private byte f33065q;

            /* renamed from: r  reason: collision with root package name */
            private int f33066r;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33067e;

                /* renamed from: i  reason: collision with root package name */
                private int f33068i;

                /* renamed from: o  reason: collision with root package name */
                private Value f33069o = Value.getDefaultInstance();

                private Builder() {
                    d();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                }

                public Argument buildPartial() {
                    Argument argument = new Argument(this);
                    int i10 = this.f33067e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f33063o = this.f33068i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f33064p = this.f33069o;
                    argument.f33062i = i11;
                    return argument;
                }

                public Value getValue() {
                    return this.f33069o;
                }

                public boolean hasNameId() {
                    if ((this.f33067e & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                public boolean hasValue() {
                    if ((this.f33067e & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    if (!hasNameId() || !hasValue() || !getValue().isInitialized()) {
                        return false;
                    }
                    return true;
                }

                public Builder mergeValue(Value value) {
                    if ((this.f33067e & 2) == 2 && this.f33069o != Value.getDefaultInstance()) {
                        this.f33069o = Value.newBuilder(this.f33069o).mergeFrom(value).buildPartial();
                    } else {
                        this.f33069o = value;
                    }
                    this.f33067e |= 2;
                    return this;
                }

                public Builder setNameId(int i10) {
                    this.f33067e |= 1;
                    this.f33068i = i10;
                    return this;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                public Argument build() {
                    Argument buildPartial = buildPartial();
                    if (buildPartial.isInitialized()) {
                        return buildPartial;
                    }
                    throw AbstractMessageLite.Builder.a(buildPartial);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public Argument getDefaultInstanceForType() {
                    return Argument.getDefaultInstance();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                public Builder clone() {
                    return c().mergeFrom(buildPartial());
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                public Builder mergeFrom(Argument argument) {
                    if (argument == Argument.getDefaultInstance()) {
                        return this;
                    }
                    if (argument.hasNameId()) {
                        setNameId(argument.getNameId());
                    }
                    if (argument.hasValue()) {
                        mergeValue(argument.getValue());
                    }
                    setUnknownFields(getUnknownFields().concat(argument.f33061e));
                    return this;
                }

                /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                    /*
                        r2 = this;
                        r0 = 0
                        kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        if (r3 == 0) goto Le
                        r2.mergeFrom(r3)
                    Le:
                        return r2
                    Lf:
                        r3 = move-exception
                        goto L1b
                    L11:
                        r3 = move-exception
                        kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument) r4     // Catch: java.lang.Throwable -> Lf
                        throw r3     // Catch: java.lang.Throwable -> L19
                    L19:
                        r3 = move-exception
                        r0 = r4
                    L1b:
                        if (r0 == 0) goto L20
                        r2.mergeFrom(r0)
                    L20:
                        throw r3
                    */
                    throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Builder");
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Value extends GeneratedMessageLite implements ValueOrBuilder {
                private static final Value B;
                public static Parser<Value> PARSER = new a();
                private int A;

                /* renamed from: e  reason: collision with root package name */
                private final ByteString f33070e;

                /* renamed from: i  reason: collision with root package name */
                private int f33071i;

                /* renamed from: o  reason: collision with root package name */
                private Type f33072o;

                /* renamed from: p  reason: collision with root package name */
                private long f33073p;

                /* renamed from: q  reason: collision with root package name */
                private float f33074q;

                /* renamed from: r  reason: collision with root package name */
                private double f33075r;

                /* renamed from: s  reason: collision with root package name */
                private int f33076s;

                /* renamed from: t  reason: collision with root package name */
                private int f33077t;

                /* renamed from: u  reason: collision with root package name */
                private int f33078u;

                /* renamed from: v  reason: collision with root package name */
                private Annotation f33079v;

                /* renamed from: w  reason: collision with root package name */
                private List f33080w;

                /* renamed from: x  reason: collision with root package name */
                private int f33081x;

                /* renamed from: y  reason: collision with root package name */
                private int f33082y;

                /* renamed from: z  reason: collision with root package name */
                private byte f33083z;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class Builder extends GeneratedMessageLite.Builder<Value, Builder> implements ValueOrBuilder {

                    /* renamed from: e  reason: collision with root package name */
                    private int f33084e;

                    /* renamed from: o  reason: collision with root package name */
                    private long f33086o;

                    /* renamed from: p  reason: collision with root package name */
                    private float f33087p;

                    /* renamed from: q  reason: collision with root package name */
                    private double f33088q;

                    /* renamed from: r  reason: collision with root package name */
                    private int f33089r;

                    /* renamed from: s  reason: collision with root package name */
                    private int f33090s;

                    /* renamed from: t  reason: collision with root package name */
                    private int f33091t;

                    /* renamed from: w  reason: collision with root package name */
                    private int f33094w;

                    /* renamed from: x  reason: collision with root package name */
                    private int f33095x;

                    /* renamed from: i  reason: collision with root package name */
                    private Type f33085i = Type.BYTE;

                    /* renamed from: u  reason: collision with root package name */
                    private Annotation f33092u = Annotation.getDefaultInstance();

                    /* renamed from: v  reason: collision with root package name */
                    private List f33093v = Collections.EMPTY_LIST;

                    private Builder() {
                        e();
                    }

                    static /* synthetic */ Builder b() {
                        return c();
                    }

                    private static Builder c() {
                        return new Builder();
                    }

                    private void d() {
                        if ((this.f33084e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                            this.f33093v = new ArrayList(this.f33093v);
                            this.f33084e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                    }

                    private void e() {
                    }

                    public Value buildPartial() {
                        Value value = new Value(this);
                        int i10 = this.f33084e;
                        int i11 = 1;
                        if ((i10 & 1) != 1) {
                            i11 = 0;
                        }
                        value.f33072o = this.f33085i;
                        if ((i10 & 2) == 2) {
                            i11 |= 2;
                        }
                        value.f33073p = this.f33086o;
                        if ((i10 & 4) == 4) {
                            i11 |= 4;
                        }
                        value.f33074q = this.f33087p;
                        if ((i10 & 8) == 8) {
                            i11 |= 8;
                        }
                        value.f33075r = this.f33088q;
                        if ((i10 & 16) == 16) {
                            i11 |= 16;
                        }
                        value.f33076s = this.f33089r;
                        if ((i10 & 32) == 32) {
                            i11 |= 32;
                        }
                        value.f33077t = this.f33090s;
                        if ((i10 & 64) == 64) {
                            i11 |= 64;
                        }
                        value.f33078u = this.f33091t;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        }
                        value.f33079v = this.f33092u;
                        if ((this.f33084e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                            this.f33093v = Collections.unmodifiableList(this.f33093v);
                            this.f33084e &= -257;
                        }
                        value.f33080w = this.f33093v;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                        value.f33081x = this.f33094w;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        }
                        value.f33082y = this.f33095x;
                        value.f33071i = i11;
                        return value;
                    }

                    public Annotation getAnnotation() {
                        return this.f33092u;
                    }

                    public Value getArrayElement(int i10) {
                        return (Value) this.f33093v.get(i10);
                    }

                    public int getArrayElementCount() {
                        return this.f33093v.size();
                    }

                    public boolean hasAnnotation() {
                        if ((this.f33084e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                            return true;
                        }
                        return false;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                    public final boolean isInitialized() {
                        if (hasAnnotation() && !getAnnotation().isInitialized()) {
                            return false;
                        }
                        for (int i10 = 0; i10 < getArrayElementCount(); i10++) {
                            if (!getArrayElement(i10).isInitialized()) {
                                return false;
                            }
                        }
                        return true;
                    }

                    public Builder mergeAnnotation(Annotation annotation) {
                        if ((this.f33084e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 && this.f33092u != Annotation.getDefaultInstance()) {
                            this.f33092u = Annotation.newBuilder(this.f33092u).mergeFrom(annotation).buildPartial();
                        } else {
                            this.f33092u = annotation;
                        }
                        this.f33084e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        return this;
                    }

                    public Builder setArrayDimensionCount(int i10) {
                        this.f33084e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        this.f33094w = i10;
                        return this;
                    }

                    public Builder setClassId(int i10) {
                        this.f33084e |= 32;
                        this.f33090s = i10;
                        return this;
                    }

                    public Builder setDoubleValue(double d10) {
                        this.f33084e |= 8;
                        this.f33088q = d10;
                        return this;
                    }

                    public Builder setEnumValueId(int i10) {
                        this.f33084e |= 64;
                        this.f33091t = i10;
                        return this;
                    }

                    public Builder setFlags(int i10) {
                        this.f33084e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        this.f33095x = i10;
                        return this;
                    }

                    public Builder setFloatValue(float f10) {
                        this.f33084e |= 4;
                        this.f33087p = f10;
                        return this;
                    }

                    public Builder setIntValue(long j10) {
                        this.f33084e |= 2;
                        this.f33086o = j10;
                        return this;
                    }

                    public Builder setStringValue(int i10) {
                        this.f33084e |= 16;
                        this.f33089r = i10;
                        return this;
                    }

                    public Builder setType(Type type) {
                        type.getClass();
                        this.f33084e |= 1;
                        this.f33085i = type;
                        return this;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                    public Value build() {
                        Value buildPartial = buildPartial();
                        if (buildPartial.isInitialized()) {
                            return buildPartial;
                        }
                        throw AbstractMessageLite.Builder.a(buildPartial);
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                    public Value getDefaultInstanceForType() {
                        return Value.getDefaultInstance();
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                    public Builder clone() {
                        return c().mergeFrom(buildPartial());
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                    public Builder mergeFrom(Value value) {
                        if (value == Value.getDefaultInstance()) {
                            return this;
                        }
                        if (value.hasType()) {
                            setType(value.getType());
                        }
                        if (value.hasIntValue()) {
                            setIntValue(value.getIntValue());
                        }
                        if (value.hasFloatValue()) {
                            setFloatValue(value.getFloatValue());
                        }
                        if (value.hasDoubleValue()) {
                            setDoubleValue(value.getDoubleValue());
                        }
                        if (value.hasStringValue()) {
                            setStringValue(value.getStringValue());
                        }
                        if (value.hasClassId()) {
                            setClassId(value.getClassId());
                        }
                        if (value.hasEnumValueId()) {
                            setEnumValueId(value.getEnumValueId());
                        }
                        if (value.hasAnnotation()) {
                            mergeAnnotation(value.getAnnotation());
                        }
                        if (!value.f33080w.isEmpty()) {
                            if (this.f33093v.isEmpty()) {
                                this.f33093v = value.f33080w;
                                this.f33084e &= -257;
                            } else {
                                d();
                                this.f33093v.addAll(value.f33080w);
                            }
                        }
                        if (value.hasArrayDimensionCount()) {
                            setArrayDimensionCount(value.getArrayDimensionCount());
                        }
                        if (value.hasFlags()) {
                            setFlags(value.getFlags());
                        }
                        setUnknownFields(getUnknownFields().concat(value.f33070e));
                        return this;
                    }

                    /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                    /*
                        Code decompiled incorrectly, please refer to instructions dump.
                        To view partially-correct add '--show-bad-code' argument
                    */
                    public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                        /*
                            r2 = this;
                            r0 = 0
                            kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                            java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                            kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                            if (r3 == 0) goto Le
                            r2.mergeFrom(r3)
                        Le:
                            return r2
                        Lf:
                            r3 = move-exception
                            goto L1b
                        L11:
                            r3 = move-exception
                            kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                            kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value) r4     // Catch: java.lang.Throwable -> Lf
                            throw r3     // Catch: java.lang.Throwable -> L19
                        L19:
                            r3 = move-exception
                            r0 = r4
                        L1b:
                            if (r0 == 0) goto L20
                            r2.mergeFrom(r0)
                        L20:
                            throw r3
                        */
                        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Argument.Value.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Argument$Value$Builder");
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public enum Type implements Internal.EnumLite {
                    BYTE(0, 0),
                    CHAR(1, 1),
                    SHORT(2, 2),
                    INT(3, 3),
                    LONG(4, 4),
                    FLOAT(5, 5),
                    DOUBLE(6, 6),
                    BOOLEAN(7, 7),
                    STRING(8, 8),
                    CLASS(9, 9),
                    ENUM(10, 10),
                    ANNOTATION(11, 11),
                    ARRAY(12, 12);
                    

                    /* renamed from: e  reason: collision with root package name */
                    private static Internal.EnumLiteMap f33096e = new a();

                    /* renamed from: d  reason: collision with root package name */
                    private final int f33098d;

                    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                    static class a implements Internal.EnumLiteMap {
                        a() {
                        }

                        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                        /* renamed from: a */
                        public Type findValueByNumber(int i10) {
                            return Type.valueOf(i10);
                        }
                    }

                    Type(int i10, int i11) {
                        this.f33098d = i11;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                    public final int getNumber() {
                        return this.f33098d;
                    }

                    public static Type valueOf(int i10) {
                        switch (i10) {
                            case 0:
                                return BYTE;
                            case 1:
                                return CHAR;
                            case 2:
                                return SHORT;
                            case 3:
                                return INT;
                            case 4:
                                return LONG;
                            case 5:
                                return FLOAT;
                            case 6:
                                return DOUBLE;
                            case 7:
                                return BOOLEAN;
                            case 8:
                                return STRING;
                            case 9:
                                return CLASS;
                            case 10:
                                return ENUM;
                            case 11:
                                return ANNOTATION;
                            case 12:
                                return ARRAY;
                            default:
                                return null;
                        }
                    }
                }

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                static class a extends AbstractParser {
                    a() {
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                    /* renamed from: c */
                    public Value parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                        return new Value(codedInputStream, extensionRegistryLite);
                    }
                }

                static {
                    Value value = new Value(true);
                    B = value;
                    value.v();
                }

                public static Value getDefaultInstance() {
                    return B;
                }

                public static Builder newBuilder() {
                    return Builder.b();
                }

                private void v() {
                    this.f33072o = Type.BYTE;
                    this.f33073p = 0L;
                    this.f33074q = 0.0f;
                    this.f33075r = 0.0d;
                    this.f33076s = 0;
                    this.f33077t = 0;
                    this.f33078u = 0;
                    this.f33079v = Annotation.getDefaultInstance();
                    this.f33080w = Collections.EMPTY_LIST;
                    this.f33081x = 0;
                    this.f33082y = 0;
                }

                public Annotation getAnnotation() {
                    return this.f33079v;
                }

                public int getArrayDimensionCount() {
                    return this.f33081x;
                }

                public Value getArrayElement(int i10) {
                    return (Value) this.f33080w.get(i10);
                }

                public int getArrayElementCount() {
                    return this.f33080w.size();
                }

                public List<Value> getArrayElementList() {
                    return this.f33080w;
                }

                public int getClassId() {
                    return this.f33077t;
                }

                public double getDoubleValue() {
                    return this.f33075r;
                }

                public int getEnumValueId() {
                    return this.f33078u;
                }

                public int getFlags() {
                    return this.f33082y;
                }

                public float getFloatValue() {
                    return this.f33074q;
                }

                public long getIntValue() {
                    return this.f33073p;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public Parser<Value> getParserForType() {
                    return PARSER;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public int getSerializedSize() {
                    int i10;
                    int i11 = this.A;
                    if (i11 != -1) {
                        return i11;
                    }
                    if ((this.f33071i & 1) == 1) {
                        i10 = CodedOutputStream.computeEnumSize(1, this.f33072o.getNumber());
                    } else {
                        i10 = 0;
                    }
                    if ((this.f33071i & 2) == 2) {
                        i10 += CodedOutputStream.computeSInt64Size(2, this.f33073p);
                    }
                    if ((this.f33071i & 4) == 4) {
                        i10 += CodedOutputStream.computeFloatSize(3, this.f33074q);
                    }
                    if ((this.f33071i & 8) == 8) {
                        i10 += CodedOutputStream.computeDoubleSize(4, this.f33075r);
                    }
                    if ((this.f33071i & 16) == 16) {
                        i10 += CodedOutputStream.computeInt32Size(5, this.f33076s);
                    }
                    if ((this.f33071i & 32) == 32) {
                        i10 += CodedOutputStream.computeInt32Size(6, this.f33077t);
                    }
                    if ((this.f33071i & 64) == 64) {
                        i10 += CodedOutputStream.computeInt32Size(7, this.f33078u);
                    }
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        i10 += CodedOutputStream.computeMessageSize(8, this.f33079v);
                    }
                    for (int i12 = 0; i12 < this.f33080w.size(); i12++) {
                        i10 += CodedOutputStream.computeMessageSize(9, (MessageLite) this.f33080w.get(i12));
                    }
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        i10 += CodedOutputStream.computeInt32Size(10, this.f33082y);
                    }
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        i10 += CodedOutputStream.computeInt32Size(11, this.f33081x);
                    }
                    int size = i10 + this.f33070e.size();
                    this.A = size;
                    return size;
                }

                public int getStringValue() {
                    return this.f33076s;
                }

                public Type getType() {
                    return this.f33072o;
                }

                public boolean hasAnnotation() {
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        return true;
                    }
                    return false;
                }

                public boolean hasArrayDimensionCount() {
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        return true;
                    }
                    return false;
                }

                public boolean hasClassId() {
                    if ((this.f33071i & 32) == 32) {
                        return true;
                    }
                    return false;
                }

                public boolean hasDoubleValue() {
                    if ((this.f33071i & 8) == 8) {
                        return true;
                    }
                    return false;
                }

                public boolean hasEnumValueId() {
                    if ((this.f33071i & 64) == 64) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFlags() {
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFloatValue() {
                    if ((this.f33071i & 4) == 4) {
                        return true;
                    }
                    return false;
                }

                public boolean hasIntValue() {
                    if ((this.f33071i & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                public boolean hasStringValue() {
                    if ((this.f33071i & 16) == 16) {
                        return true;
                    }
                    return false;
                }

                public boolean hasType() {
                    if ((this.f33071i & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    byte b10 = this.f33083z;
                    if (b10 == 1) {
                        return true;
                    }
                    if (b10 == 0) {
                        return false;
                    }
                    if (hasAnnotation() && !getAnnotation().isInitialized()) {
                        this.f33083z = (byte) 0;
                        return false;
                    }
                    for (int i10 = 0; i10 < getArrayElementCount(); i10++) {
                        if (!getArrayElement(i10).isInitialized()) {
                            this.f33083z = (byte) 0;
                            return false;
                        }
                    }
                    this.f33083z = (byte) 1;
                    return true;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public void writeTo(CodedOutputStream codedOutputStream) {
                    getSerializedSize();
                    if ((this.f33071i & 1) == 1) {
                        codedOutputStream.writeEnum(1, this.f33072o.getNumber());
                    }
                    if ((this.f33071i & 2) == 2) {
                        codedOutputStream.writeSInt64(2, this.f33073p);
                    }
                    if ((this.f33071i & 4) == 4) {
                        codedOutputStream.writeFloat(3, this.f33074q);
                    }
                    if ((this.f33071i & 8) == 8) {
                        codedOutputStream.writeDouble(4, this.f33075r);
                    }
                    if ((this.f33071i & 16) == 16) {
                        codedOutputStream.writeInt32(5, this.f33076s);
                    }
                    if ((this.f33071i & 32) == 32) {
                        codedOutputStream.writeInt32(6, this.f33077t);
                    }
                    if ((this.f33071i & 64) == 64) {
                        codedOutputStream.writeInt32(7, this.f33078u);
                    }
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        codedOutputStream.writeMessage(8, this.f33079v);
                    }
                    for (int i10 = 0; i10 < this.f33080w.size(); i10++) {
                        codedOutputStream.writeMessage(9, (MessageLite) this.f33080w.get(i10));
                    }
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        codedOutputStream.writeInt32(10, this.f33082y);
                    }
                    if ((this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        codedOutputStream.writeInt32(11, this.f33081x);
                    }
                    codedOutputStream.writeRawBytes(this.f33070e);
                }

                public static Builder newBuilder(Value value) {
                    return newBuilder().mergeFrom(value);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public Value getDefaultInstanceForType() {
                    return B;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public Builder newBuilderForType() {
                    return newBuilder();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public Builder toBuilder() {
                    return newBuilder(this);
                }

                private Value(GeneratedMessageLite.Builder builder) {
                    super(builder);
                    this.f33083z = (byte) -1;
                    this.A = -1;
                    this.f33070e = builder.getUnknownFields();
                }

                private Value(boolean z10) {
                    this.f33083z = (byte) -1;
                    this.A = -1;
                    this.f33070e = ByteString.EMPTY;
                }

                /* JADX WARN: Multi-variable type inference failed */
                /* JADX WARN: Type inference failed for: r5v0 */
                /* JADX WARN: Type inference failed for: r5v1 */
                /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
                private Value(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    this.f33083z = (byte) -1;
                    this.A = -1;
                    v();
                    ByteString.Output newOutput = ByteString.newOutput();
                    CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                    boolean z10 = false;
                    boolean z11 = false;
                    while (true) {
                        ?? r52 = 256;
                        if (!z10) {
                            try {
                                try {
                                    int readTag = codedInputStream.readTag();
                                    switch (readTag) {
                                        case 0:
                                            break;
                                        case 8:
                                            int readEnum = codedInputStream.readEnum();
                                            Type valueOf = Type.valueOf(readEnum);
                                            if (valueOf == null) {
                                                newInstance.writeRawVarint32(readTag);
                                                newInstance.writeRawVarint32(readEnum);
                                            } else {
                                                this.f33071i |= 1;
                                                this.f33072o = valueOf;
                                                continue;
                                            }
                                        case 16:
                                            this.f33071i |= 2;
                                            this.f33073p = codedInputStream.readSInt64();
                                            continue;
                                        case 29:
                                            this.f33071i |= 4;
                                            this.f33074q = codedInputStream.readFloat();
                                            continue;
                                        case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                                            this.f33071i |= 8;
                                            this.f33075r = codedInputStream.readDouble();
                                            continue;
                                        case 40:
                                            this.f33071i |= 16;
                                            this.f33076s = codedInputStream.readInt32();
                                            continue;
                                        case 48:
                                            this.f33071i |= 32;
                                            this.f33077t = codedInputStream.readInt32();
                                            continue;
                                        case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                            this.f33071i |= 64;
                                            this.f33078u = codedInputStream.readInt32();
                                            continue;
                                        case 66:
                                            Builder builder = (this.f33071i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.f33079v.toBuilder() : null;
                                            Annotation annotation = (Annotation) codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite);
                                            this.f33079v = annotation;
                                            if (builder != null) {
                                                builder.mergeFrom(annotation);
                                                this.f33079v = builder.buildPartial();
                                            }
                                            this.f33071i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                            continue;
                                        case 74:
                                            if (!(z11 & true)) {
                                                this.f33080w = new ArrayList();
                                                z11 = true;
                                            }
                                            this.f33080w.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                                            continue;
                                        case 80:
                                            this.f33071i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                            this.f33082y = codedInputStream.readInt32();
                                            continue;
                                        case 88:
                                            this.f33071i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                            this.f33081x = codedInputStream.readInt32();
                                            continue;
                                        default:
                                            r52 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                            if (r52 == 0) {
                                                break;
                                            } else {
                                                continue;
                                            }
                                    }
                                    z10 = true;
                                } catch (Throwable th2) {
                                    if ((z11 & true) == r52) {
                                        this.f33080w = Collections.unmodifiableList(this.f33080w);
                                    }
                                    try {
                                        newInstance.flush();
                                    } catch (IOException unused) {
                                    } catch (Throwable th3) {
                                        this.f33070e = newOutput.toByteString();
                                        throw th3;
                                    }
                                    this.f33070e = newOutput.toByteString();
                                    e();
                                    throw th2;
                                }
                            } catch (InvalidProtocolBufferException e10) {
                                throw e10.setUnfinishedMessage(this);
                            } catch (IOException e11) {
                                throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                            }
                        } else {
                            if (z11 & true) {
                                this.f33080w = Collections.unmodifiableList(this.f33080w);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused2) {
                            } catch (Throwable th4) {
                                this.f33070e = newOutput.toByteString();
                                throw th4;
                            }
                            this.f33070e = newOutput.toByteString();
                            e();
                            return;
                        }
                    }
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public interface ValueOrBuilder extends MessageLiteOrBuilder {
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a extends AbstractParser {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                /* renamed from: c */
                public Argument parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    return new Argument(codedInputStream, extensionRegistryLite);
                }
            }

            static {
                Argument argument = new Argument(true);
                f33060s = argument;
                argument.l();
            }

            public static Argument getDefaultInstance() {
                return f33060s;
            }

            private void l() {
                this.f33063o = 0;
                this.f33064p = Value.getDefaultInstance();
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public int getNameId() {
                return this.f33063o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33066r;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33062i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33063o);
                } else {
                    i10 = 0;
                }
                if ((this.f33062i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f33064p);
                }
                int size = i10 + this.f33061e.size();
                this.f33066r = size;
                return size;
            }

            public Value getValue() {
                return this.f33064p;
            }

            public boolean hasNameId() {
                if ((this.f33062i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasValue() {
                if ((this.f33062i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33065q;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasNameId()) {
                    this.f33065q = (byte) 0;
                    return false;
                } else if (!hasValue()) {
                    this.f33065q = (byte) 0;
                    return false;
                } else if (!getValue().isInitialized()) {
                    this.f33065q = (byte) 0;
                    return false;
                } else {
                    this.f33065q = (byte) 1;
                    return true;
                }
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33062i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33063o);
                }
                if ((this.f33062i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f33064p);
                }
                codedOutputStream.writeRawBytes(this.f33061e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f33060s;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder newBuilderForType() {
                return newBuilder();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder toBuilder() {
                return newBuilder(this);
            }

            private Argument(GeneratedMessageLite.Builder builder) {
                super(builder);
                this.f33065q = (byte) -1;
                this.f33066r = -1;
                this.f33061e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f33065q = (byte) -1;
                this.f33066r = -1;
                this.f33061e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33065q = (byte) -1;
                this.f33066r = -1;
                l();
                ByteString.Output newOutput = ByteString.newOutput();
                CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                boolean z10 = false;
                while (!z10) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag == 8) {
                                    this.f33062i |= 1;
                                    this.f33063o = codedInputStream.readInt32();
                                } else if (readTag != 18) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    Value.Builder builder = (this.f33062i & 2) == 2 ? this.f33064p.toBuilder() : null;
                                    Value value = (Value) codedInputStream.readMessage(Value.PARSER, extensionRegistryLite);
                                    this.f33064p = value;
                                    if (builder != null) {
                                        builder.mergeFrom(value);
                                        this.f33064p = builder.buildPartial();
                                    }
                                    this.f33062i |= 2;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33061e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33061e = newOutput.toByteString();
                            e();
                            throw th2;
                        }
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f33061e = newOutput.toByteString();
                    throw th4;
                }
                this.f33061e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface ArgumentOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Annotation, Builder> implements AnnotationOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33099e;

            /* renamed from: i  reason: collision with root package name */
            private int f33100i;

            /* renamed from: o  reason: collision with root package name */
            private List f33101o = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33099e & 2) != 2) {
                    this.f33101o = new ArrayList(this.f33101o);
                    this.f33099e |= 2;
                }
            }

            private void e() {
            }

            public Annotation buildPartial() {
                Annotation annotation = new Annotation(this);
                int i10 = 1;
                if ((this.f33099e & 1) != 1) {
                    i10 = 0;
                }
                annotation.f33056o = this.f33100i;
                if ((this.f33099e & 2) == 2) {
                    this.f33101o = Collections.unmodifiableList(this.f33101o);
                    this.f33099e &= -3;
                }
                annotation.f33057p = this.f33101o;
                annotation.f33055i = i10;
                return annotation;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f33101o.get(i10);
            }

            public int getArgumentCount() {
                return this.f33101o.size();
            }

            public boolean hasId() {
                if ((this.f33099e & 1) == 1) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasId()) {
                    return false;
                }
                for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                    if (!getArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            public Builder setId(int i10) {
                this.f33099e |= 1;
                this.f33100i = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Annotation build() {
                Annotation buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Annotation getDefaultInstanceForType() {
                return Annotation.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Annotation annotation) {
                if (annotation == Annotation.getDefaultInstance()) {
                    return this;
                }
                if (annotation.hasId()) {
                    setId(annotation.getId());
                }
                if (!annotation.f33057p.isEmpty()) {
                    if (this.f33101o.isEmpty()) {
                        this.f33101o = annotation.f33057p;
                        this.f33099e &= -3;
                    } else {
                        d();
                        this.f33101o.addAll(annotation.f33057p);
                    }
                }
                setUnknownFields(getUnknownFields().concat(annotation.f33054e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Annotation.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Annotation$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Annotation parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Annotation(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Annotation annotation = new Annotation(true);
            f33053s = annotation;
            annotation.m();
        }

        public static Annotation getDefaultInstance() {
            return f33053s;
        }

        private void m() {
            this.f33056o = 0;
            this.f33057p = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f33057p.get(i10);
        }

        public int getArgumentCount() {
            return this.f33057p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f33057p;
        }

        public int getId() {
            return this.f33056o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Annotation> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33059r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33055i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33056o);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33057p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33057p.get(i12));
            }
            int size = i10 + this.f33054e.size();
            this.f33059r = size;
            return size;
        }

        public boolean hasId() {
            if ((this.f33055i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33058q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f33058q = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                if (!getArgument(i10).isInitialized()) {
                    this.f33058q = (byte) 0;
                    return false;
                }
            }
            this.f33058q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33055i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33056o);
            }
            for (int i10 = 0; i10 < this.f33057p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33057p.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33054e);
        }

        public static Builder newBuilder(Annotation annotation) {
            return newBuilder().mergeFrom(annotation);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Annotation getDefaultInstanceForType() {
            return f33053s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Annotation(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33058q = (byte) -1;
            this.f33059r = -1;
            this.f33054e = builder.getUnknownFields();
        }

        private Annotation(boolean z10) {
            this.f33058q = (byte) -1;
            this.f33059r = -1;
            this.f33054e = ByteString.EMPTY;
        }

        private Annotation(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33058q = (byte) -1;
            this.f33059r = -1;
            m();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33055i |= 1;
                                this.f33056o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33057p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33057p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33057p = Collections.unmodifiableList(this.f33057p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33054e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33054e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f33057p = Collections.unmodifiableList(this.f33057p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33054e = newOutput.toByteString();
                throw th4;
            }
            this.f33054e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface AnnotationOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Class extends GeneratedMessageLite.ExtendableMessage<Class> implements ClassOrBuilder {
        public static Parser<Class> PARSER = new a();
        private static final Class W;
        private int A;
        private List B;
        private List C;
        private List D;
        private List E;
        private List F;
        private List G;
        private int H;
        private int I;
        private Type J;
        private int K;
        private List L;
        private int M;
        private List N;
        private List O;
        private int P;
        private TypeTable Q;
        private List R;
        private VersionRequirementTable S;
        private List T;
        private byte U;
        private int V;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33102i;

        /* renamed from: o  reason: collision with root package name */
        private int f33103o;

        /* renamed from: p  reason: collision with root package name */
        private int f33104p;

        /* renamed from: q  reason: collision with root package name */
        private int f33105q;

        /* renamed from: r  reason: collision with root package name */
        private int f33106r;

        /* renamed from: s  reason: collision with root package name */
        private List f33107s;

        /* renamed from: t  reason: collision with root package name */
        private List f33108t;

        /* renamed from: u  reason: collision with root package name */
        private List f33109u;

        /* renamed from: v  reason: collision with root package name */
        private int f33110v;

        /* renamed from: w  reason: collision with root package name */
        private List f33111w;

        /* renamed from: x  reason: collision with root package name */
        private int f33112x;

        /* renamed from: y  reason: collision with root package name */
        private List f33113y;

        /* renamed from: z  reason: collision with root package name */
        private List f33114z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Class, Builder> implements ClassOrBuilder {
            private List A;
            private List B;
            private List C;
            private List D;
            private int E;
            private Type F;
            private int G;
            private List H;
            private List I;
            private List J;
            private TypeTable K;
            private List L;
            private VersionRequirementTable M;
            private List N;

            /* renamed from: o  reason: collision with root package name */
            private int f33115o;

            /* renamed from: p  reason: collision with root package name */
            private int f33116p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33117q;

            /* renamed from: r  reason: collision with root package name */
            private int f33118r;

            /* renamed from: s  reason: collision with root package name */
            private List f33119s;

            /* renamed from: t  reason: collision with root package name */
            private List f33120t;

            /* renamed from: u  reason: collision with root package name */
            private List f33121u;

            /* renamed from: v  reason: collision with root package name */
            private List f33122v;

            /* renamed from: w  reason: collision with root package name */
            private List f33123w;

            /* renamed from: x  reason: collision with root package name */
            private List f33124x;

            /* renamed from: y  reason: collision with root package name */
            private List f33125y;

            /* renamed from: z  reason: collision with root package name */
            private List f33126z;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33119s = list;
                this.f33120t = list;
                this.f33121u = list;
                this.f33122v = list;
                this.f33123w = list;
                this.f33124x = list;
                this.f33125y = list;
                this.f33126z = list;
                this.A = list;
                this.B = list;
                this.C = list;
                this.D = list;
                this.F = Type.getDefaultInstance();
                this.H = list;
                this.I = list;
                this.J = list;
                this.K = TypeTable.getDefaultInstance();
                this.L = list;
                this.M = VersionRequirementTable.getDefaultInstance();
                this.N = list;
                D();
            }

            private void A() {
                if ((this.f33115o & 8) != 8) {
                    this.f33119s = new ArrayList(this.f33119s);
                    this.f33115o |= 8;
                }
            }

            private void B() {
                if ((this.f33115o & 4194304) != 4194304) {
                    this.L = new ArrayList(this.L);
                    this.f33115o |= 4194304;
                }
            }

            private void D() {
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33115o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 16777216) {
                    this.N = new ArrayList(this.N);
                    this.f33115o |= PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
                }
            }

            private void k() {
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33125y = new ArrayList(this.f33125y);
                    this.f33115o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33124x = new ArrayList(this.f33124x);
                    this.f33115o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f33123w = new ArrayList(this.f33123w);
                    this.f33115o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void n() {
                if ((this.f33115o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f33115o |= 8192;
                }
            }

            private void o() {
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f33126z = new ArrayList(this.f33126z);
                    this.f33115o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void q() {
                if ((this.f33115o & 262144) != 262144) {
                    this.H = new ArrayList(this.H);
                    this.f33115o |= 262144;
                }
            }

            private void r() {
                if ((this.f33115o & 1048576) != 1048576) {
                    this.J = new ArrayList(this.J);
                    this.f33115o |= 1048576;
                }
            }

            private void t() {
                if ((this.f33115o & 524288) != 524288) {
                    this.I = new ArrayList(this.I);
                    this.f33115o |= 524288;
                }
            }

            private void u() {
                if ((this.f33115o & 64) != 64) {
                    this.f33122v = new ArrayList(this.f33122v);
                    this.f33115o |= 64;
                }
            }

            private void v() {
                if ((this.f33115o & RecyclerView.ItemAnimator.FLAG_MOVED) != 2048) {
                    this.A = new ArrayList(this.A);
                    this.f33115o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                }
            }

            private void w() {
                if ((this.f33115o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33115o |= 16384;
                }
            }

            private void x() {
                if ((this.f33115o & 32) != 32) {
                    this.f33121u = new ArrayList(this.f33121u);
                    this.f33115o |= 32;
                }
            }

            private void y() {
                if ((this.f33115o & 16) != 16) {
                    this.f33120t = new ArrayList(this.f33120t);
                    this.f33115o |= 16;
                }
            }

            private void z() {
                if ((this.f33115o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f33115o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            public Class buildPartial() {
                Class r02 = new Class(this);
                int i10 = this.f33115o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                r02.f33104p = this.f33116p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                r02.f33105q = this.f33117q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                r02.f33106r = this.f33118r;
                if ((this.f33115o & 8) == 8) {
                    this.f33119s = Collections.unmodifiableList(this.f33119s);
                    this.f33115o &= -9;
                }
                r02.f33107s = this.f33119s;
                if ((this.f33115o & 16) == 16) {
                    this.f33120t = Collections.unmodifiableList(this.f33120t);
                    this.f33115o &= -17;
                }
                r02.f33108t = this.f33120t;
                if ((this.f33115o & 32) == 32) {
                    this.f33121u = Collections.unmodifiableList(this.f33121u);
                    this.f33115o &= -33;
                }
                r02.f33109u = this.f33121u;
                if ((this.f33115o & 64) == 64) {
                    this.f33122v = Collections.unmodifiableList(this.f33122v);
                    this.f33115o &= -65;
                }
                r02.f33111w = this.f33122v;
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f33123w = Collections.unmodifiableList(this.f33123w);
                    this.f33115o &= -129;
                }
                r02.f33113y = this.f33123w;
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33124x = Collections.unmodifiableList(this.f33124x);
                    this.f33115o &= -257;
                }
                r02.f33114z = this.f33124x;
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33125y = Collections.unmodifiableList(this.f33125y);
                    this.f33115o &= -513;
                }
                r02.B = this.f33125y;
                if ((this.f33115o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f33126z = Collections.unmodifiableList(this.f33126z);
                    this.f33115o &= -1025;
                }
                r02.C = this.f33126z;
                if ((this.f33115o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    this.A = Collections.unmodifiableList(this.A);
                    this.f33115o &= -2049;
                }
                r02.D = this.A;
                if ((this.f33115o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f33115o &= -4097;
                }
                r02.E = this.B;
                if ((this.f33115o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f33115o &= -8193;
                }
                r02.F = this.C;
                if ((this.f33115o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33115o &= -16385;
                }
                r02.G = this.D;
                if ((i10 & PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS) == 32768) {
                    i11 |= 8;
                }
                r02.I = this.E;
                if ((i10 & 65536) == 65536) {
                    i11 |= 16;
                }
                r02.J = this.F;
                if ((i10 & 131072) == 131072) {
                    i11 |= 32;
                }
                r02.K = this.G;
                if ((this.f33115o & 262144) == 262144) {
                    this.H = Collections.unmodifiableList(this.H);
                    this.f33115o &= -262145;
                }
                r02.L = this.H;
                if ((this.f33115o & 524288) == 524288) {
                    this.I = Collections.unmodifiableList(this.I);
                    this.f33115o &= -524289;
                }
                r02.N = this.I;
                if ((this.f33115o & 1048576) == 1048576) {
                    this.J = Collections.unmodifiableList(this.J);
                    this.f33115o &= -1048577;
                }
                r02.O = this.J;
                if ((i10 & 2097152) == 2097152) {
                    i11 |= 64;
                }
                r02.Q = this.K;
                if ((this.f33115o & 4194304) == 4194304) {
                    this.L = Collections.unmodifiableList(this.L);
                    this.f33115o &= -4194305;
                }
                r02.R = this.L;
                if ((i10 & 8388608) == 8388608) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                r02.S = this.M;
                if ((this.f33115o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) == 16777216) {
                    this.N = Collections.unmodifiableList(this.N);
                    this.f33115o &= -16777217;
                }
                r02.T = this.N;
                r02.f33103o = i11;
                return r02;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.N.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.N.size();
            }

            public Constructor getConstructor(int i10) {
                return (Constructor) this.f33125y.get(i10);
            }

            public int getConstructorCount() {
                return this.f33125y.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33123w.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33123w.size();
            }

            public EnumEntry getEnumEntry(int i10) {
                return (EnumEntry) this.C.get(i10);
            }

            public int getEnumEntryCount() {
                return this.C.size();
            }

            public Function getFunction(int i10) {
                return (Function) this.f33126z.get(i10);
            }

            public int getFunctionCount() {
                return this.f33126z.size();
            }

            public Type getInlineClassUnderlyingType() {
                return this.F;
            }

            public Type getMultiFieldValueClassUnderlyingType(int i10) {
                return (Type) this.I.get(i10);
            }

            public int getMultiFieldValueClassUnderlyingTypeCount() {
                return this.I.size();
            }

            public Property getProperty(int i10) {
                return (Property) this.A.get(i10);
            }

            public int getPropertyCount() {
                return this.A.size();
            }

            public Type getSupertype(int i10) {
                return (Type) this.f33120t.get(i10);
            }

            public int getSupertypeCount() {
                return this.f33120t.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.B.get(i10);
            }

            public int getTypeAliasCount() {
                return this.B.size();
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33119s.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33119s.size();
            }

            public TypeTable getTypeTable() {
                return this.K;
            }

            public boolean hasFqName() {
                if ((this.f33115o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasInlineClassUnderlyingType() {
                if ((this.f33115o & 65536) == 65536) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f33115o & 2097152) == 2097152) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasFqName()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getSupertypeCount(); i11++) {
                    if (!getSupertype(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getContextReceiverTypeCount(); i12++) {
                    if (!getContextReceiverType(i12).isInitialized()) {
                        return false;
                    }
                }
                for (int i13 = 0; i13 < getConstructorCount(); i13++) {
                    if (!getConstructor(i13).isInitialized()) {
                        return false;
                    }
                }
                for (int i14 = 0; i14 < getFunctionCount(); i14++) {
                    if (!getFunction(i14).isInitialized()) {
                        return false;
                    }
                }
                for (int i15 = 0; i15 < getPropertyCount(); i15++) {
                    if (!getProperty(i15).isInitialized()) {
                        return false;
                    }
                }
                for (int i16 = 0; i16 < getTypeAliasCount(); i16++) {
                    if (!getTypeAlias(i16).isInitialized()) {
                        return false;
                    }
                }
                for (int i17 = 0; i17 < getEnumEntryCount(); i17++) {
                    if (!getEnumEntry(i17).isInitialized()) {
                        return false;
                    }
                }
                if (hasInlineClassUnderlyingType() && !getInlineClassUnderlyingType().isInitialized()) {
                    return false;
                }
                for (int i18 = 0; i18 < getMultiFieldValueClassUnderlyingTypeCount(); i18++) {
                    if (!getMultiFieldValueClassUnderlyingType(i18).isInitialized()) {
                        return false;
                    }
                }
                if (hasTypeTable() && !getTypeTable().isInitialized()) {
                    return false;
                }
                for (int i19 = 0; i19 < getCompilerPluginDataCount(); i19++) {
                    if (!getCompilerPluginData(i19).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeInlineClassUnderlyingType(Type type) {
                if ((this.f33115o & 65536) == 65536 && this.F != Type.getDefaultInstance()) {
                    this.F = Type.newBuilder(this.F).mergeFrom(type).buildPartial();
                } else {
                    this.F = type;
                }
                this.f33115o |= 65536;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33115o & 2097152) == 2097152 && this.K != TypeTable.getDefaultInstance()) {
                    this.K = TypeTable.newBuilder(this.K).mergeFrom(typeTable).buildPartial();
                } else {
                    this.K = typeTable;
                }
                this.f33115o |= 2097152;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f33115o & 8388608) == 8388608 && this.M != VersionRequirementTable.getDefaultInstance()) {
                    this.M = VersionRequirementTable.newBuilder(this.M).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.M = versionRequirementTable;
                }
                this.f33115o |= 8388608;
                return this;
            }

            public Builder setCompanionObjectName(int i10) {
                this.f33115o |= 4;
                this.f33118r = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33115o |= 1;
                this.f33116p = i10;
                return this;
            }

            public Builder setFqName(int i10) {
                this.f33115o |= 2;
                this.f33117q = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingPropertyName(int i10) {
                this.f33115o |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                this.E = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingTypeId(int i10) {
                this.f33115o |= 131072;
                this.G = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Class build() {
                Class buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Class getDefaultInstanceForType() {
                return Class.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Class r32) {
                if (r32 == Class.getDefaultInstance()) {
                    return this;
                }
                if (r32.hasFlags()) {
                    setFlags(r32.getFlags());
                }
                if (r32.hasFqName()) {
                    setFqName(r32.getFqName());
                }
                if (r32.hasCompanionObjectName()) {
                    setCompanionObjectName(r32.getCompanionObjectName());
                }
                if (!r32.f33107s.isEmpty()) {
                    if (this.f33119s.isEmpty()) {
                        this.f33119s = r32.f33107s;
                        this.f33115o &= -9;
                    } else {
                        A();
                        this.f33119s.addAll(r32.f33107s);
                    }
                }
                if (!r32.f33108t.isEmpty()) {
                    if (this.f33120t.isEmpty()) {
                        this.f33120t = r32.f33108t;
                        this.f33115o &= -17;
                    } else {
                        y();
                        this.f33120t.addAll(r32.f33108t);
                    }
                }
                if (!r32.f33109u.isEmpty()) {
                    if (this.f33121u.isEmpty()) {
                        this.f33121u = r32.f33109u;
                        this.f33115o &= -33;
                    } else {
                        x();
                        this.f33121u.addAll(r32.f33109u);
                    }
                }
                if (!r32.f33111w.isEmpty()) {
                    if (this.f33122v.isEmpty()) {
                        this.f33122v = r32.f33111w;
                        this.f33115o &= -65;
                    } else {
                        u();
                        this.f33122v.addAll(r32.f33111w);
                    }
                }
                if (!r32.f33113y.isEmpty()) {
                    if (this.f33123w.isEmpty()) {
                        this.f33123w = r32.f33113y;
                        this.f33115o &= -129;
                    } else {
                        m();
                        this.f33123w.addAll(r32.f33113y);
                    }
                }
                if (!r32.f33114z.isEmpty()) {
                    if (this.f33124x.isEmpty()) {
                        this.f33124x = r32.f33114z;
                        this.f33115o &= -257;
                    } else {
                        l();
                        this.f33124x.addAll(r32.f33114z);
                    }
                }
                if (!r32.B.isEmpty()) {
                    if (this.f33125y.isEmpty()) {
                        this.f33125y = r32.B;
                        this.f33115o &= -513;
                    } else {
                        k();
                        this.f33125y.addAll(r32.B);
                    }
                }
                if (!r32.C.isEmpty()) {
                    if (this.f33126z.isEmpty()) {
                        this.f33126z = r32.C;
                        this.f33115o &= -1025;
                    } else {
                        o();
                        this.f33126z.addAll(r32.C);
                    }
                }
                if (!r32.D.isEmpty()) {
                    if (this.A.isEmpty()) {
                        this.A = r32.D;
                        this.f33115o &= -2049;
                    } else {
                        v();
                        this.A.addAll(r32.D);
                    }
                }
                if (!r32.E.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = r32.E;
                        this.f33115o &= -4097;
                    } else {
                        z();
                        this.B.addAll(r32.E);
                    }
                }
                if (!r32.F.isEmpty()) {
                    if (this.C.isEmpty()) {
                        this.C = r32.F;
                        this.f33115o &= -8193;
                    } else {
                        n();
                        this.C.addAll(r32.F);
                    }
                }
                if (!r32.G.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = r32.G;
                        this.f33115o &= -16385;
                    } else {
                        w();
                        this.D.addAll(r32.G);
                    }
                }
                if (r32.hasInlineClassUnderlyingPropertyName()) {
                    setInlineClassUnderlyingPropertyName(r32.getInlineClassUnderlyingPropertyName());
                }
                if (r32.hasInlineClassUnderlyingType()) {
                    mergeInlineClassUnderlyingType(r32.getInlineClassUnderlyingType());
                }
                if (r32.hasInlineClassUnderlyingTypeId()) {
                    setInlineClassUnderlyingTypeId(r32.getInlineClassUnderlyingTypeId());
                }
                if (!r32.L.isEmpty()) {
                    if (this.H.isEmpty()) {
                        this.H = r32.L;
                        this.f33115o &= -262145;
                    } else {
                        q();
                        this.H.addAll(r32.L);
                    }
                }
                if (!r32.N.isEmpty()) {
                    if (this.I.isEmpty()) {
                        this.I = r32.N;
                        this.f33115o &= -524289;
                    } else {
                        t();
                        this.I.addAll(r32.N);
                    }
                }
                if (!r32.O.isEmpty()) {
                    if (this.J.isEmpty()) {
                        this.J = r32.O;
                        this.f33115o &= -1048577;
                    } else {
                        r();
                        this.J.addAll(r32.O);
                    }
                }
                if (r32.hasTypeTable()) {
                    mergeTypeTable(r32.getTypeTable());
                }
                if (!r32.R.isEmpty()) {
                    if (this.L.isEmpty()) {
                        this.L = r32.R;
                        this.f33115o &= -4194305;
                    } else {
                        B();
                        this.L.addAll(r32.R);
                    }
                }
                if (r32.hasVersionRequirementTable()) {
                    mergeVersionRequirementTable(r32.getVersionRequirementTable());
                }
                if (!r32.T.isEmpty()) {
                    if (this.N.isEmpty()) {
                        this.N = r32.T;
                        this.f33115o &= -16777217;
                    } else {
                        j();
                        this.N.addAll(r32.T);
                    }
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f33102i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Class.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Class$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum Kind implements Internal.EnumLite {
            CLASS(0, 0),
            INTERFACE(1, 1),
            ENUM_CLASS(2, 2),
            ENUM_ENTRY(3, 3),
            ANNOTATION_CLASS(4, 4),
            OBJECT(5, 5),
            COMPANION_OBJECT(6, 6);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f33127e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33129d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public Kind findValueByNumber(int i10) {
                    return Kind.valueOf(i10);
                }
            }

            Kind(int i10, int i11) {
                this.f33129d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33129d;
            }

            public static Kind valueOf(int i10) {
                switch (i10) {
                    case 0:
                        return CLASS;
                    case 1:
                        return INTERFACE;
                    case 2:
                        return ENUM_CLASS;
                    case 3:
                        return ENUM_ENTRY;
                    case 4:
                        return ANNOTATION_CLASS;
                    case 5:
                        return OBJECT;
                    case 6:
                        return COMPANION_OBJECT;
                    default:
                        return null;
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Class parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Class(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Class r02 = new Class(true);
            W = r02;
            r02.e0();
        }

        private void e0() {
            this.f33104p = 6;
            this.f33105q = 0;
            this.f33106r = 0;
            List list = Collections.EMPTY_LIST;
            this.f33107s = list;
            this.f33108t = list;
            this.f33109u = list;
            this.f33111w = list;
            this.f33113y = list;
            this.f33114z = list;
            this.B = list;
            this.C = list;
            this.D = list;
            this.E = list;
            this.F = list;
            this.G = list;
            this.I = 0;
            this.J = Type.getDefaultInstance();
            this.K = 0;
            this.L = list;
            this.N = list;
            this.O = list;
            this.Q = TypeTable.getDefaultInstance();
            this.R = list;
            this.S = VersionRequirementTable.getDefaultInstance();
            this.T = list;
        }

        public static Class getDefaultInstance() {
            return W;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        public static Class parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        public int getCompanionObjectName() {
            return this.f33106r;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.T.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.T.size();
        }

        public Constructor getConstructor(int i10) {
            return (Constructor) this.B.get(i10);
        }

        public int getConstructorCount() {
            return this.B.size();
        }

        public List<Constructor> getConstructorList() {
            return this.B;
        }

        public Type getContextReceiverType(int i10) {
            return (Type) this.f33113y.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33113y.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33114z;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33113y;
        }

        public EnumEntry getEnumEntry(int i10) {
            return (EnumEntry) this.F.get(i10);
        }

        public int getEnumEntryCount() {
            return this.F.size();
        }

        public List<EnumEntry> getEnumEntryList() {
            return this.F;
        }

        public int getFlags() {
            return this.f33104p;
        }

        public int getFqName() {
            return this.f33105q;
        }

        public Function getFunction(int i10) {
            return (Function) this.C.get(i10);
        }

        public int getFunctionCount() {
            return this.C.size();
        }

        public List<Function> getFunctionList() {
            return this.C;
        }

        public int getInlineClassUnderlyingPropertyName() {
            return this.I;
        }

        public Type getInlineClassUnderlyingType() {
            return this.J;
        }

        public int getInlineClassUnderlyingTypeId() {
            return this.K;
        }

        public int getMultiFieldValueClassUnderlyingNameCount() {
            return this.L.size();
        }

        public List<Integer> getMultiFieldValueClassUnderlyingNameList() {
            return this.L;
        }

        public Type getMultiFieldValueClassUnderlyingType(int i10) {
            return (Type) this.N.get(i10);
        }

        public int getMultiFieldValueClassUnderlyingTypeCount() {
            return this.N.size();
        }

        public int getMultiFieldValueClassUnderlyingTypeIdCount() {
            return this.O.size();
        }

        public List<Integer> getMultiFieldValueClassUnderlyingTypeIdList() {
            return this.O;
        }

        public List<Type> getMultiFieldValueClassUnderlyingTypeList() {
            return this.N;
        }

        public List<Integer> getNestedClassNameList() {
            return this.f33111w;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Class> getParserForType() {
            return PARSER;
        }

        public Property getProperty(int i10) {
            return (Property) this.D.get(i10);
        }

        public int getPropertyCount() {
            return this.D.size();
        }

        public List<Property> getPropertyList() {
            return this.D;
        }

        public List<Integer> getSealedSubclassFqNameList() {
            return this.G;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.V;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33103o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33104p);
            } else {
                i10 = 0;
            }
            int i12 = 0;
            for (int i13 = 0; i13 < this.f33109u.size(); i13++) {
                i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33109u.get(i13)).intValue());
            }
            int i14 = i10 + i12;
            if (!getSupertypeIdList().isEmpty()) {
                i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
            }
            this.f33110v = i12;
            if ((this.f33103o & 2) == 2) {
                i14 += CodedOutputStream.computeInt32Size(3, this.f33105q);
            }
            if ((this.f33103o & 4) == 4) {
                i14 += CodedOutputStream.computeInt32Size(4, this.f33106r);
            }
            for (int i15 = 0; i15 < this.f33107s.size(); i15++) {
                i14 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33107s.get(i15));
            }
            for (int i16 = 0; i16 < this.f33108t.size(); i16++) {
                i14 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33108t.get(i16));
            }
            int i17 = 0;
            for (int i18 = 0; i18 < this.f33111w.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33111w.get(i18)).intValue());
            }
            int i19 = i14 + i17;
            if (!getNestedClassNameList().isEmpty()) {
                i19 = i19 + 1 + CodedOutputStream.computeInt32SizeNoTag(i17);
            }
            this.f33112x = i17;
            for (int i20 = 0; i20 < this.B.size(); i20++) {
                i19 += CodedOutputStream.computeMessageSize(8, (MessageLite) this.B.get(i20));
            }
            for (int i21 = 0; i21 < this.C.size(); i21++) {
                i19 += CodedOutputStream.computeMessageSize(9, (MessageLite) this.C.get(i21));
            }
            for (int i22 = 0; i22 < this.D.size(); i22++) {
                i19 += CodedOutputStream.computeMessageSize(10, (MessageLite) this.D.get(i22));
            }
            for (int i23 = 0; i23 < this.E.size(); i23++) {
                i19 += CodedOutputStream.computeMessageSize(11, (MessageLite) this.E.get(i23));
            }
            for (int i24 = 0; i24 < this.F.size(); i24++) {
                i19 += CodedOutputStream.computeMessageSize(13, (MessageLite) this.F.get(i24));
            }
            int i25 = 0;
            for (int i26 = 0; i26 < this.G.size(); i26++) {
                i25 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.G.get(i26)).intValue());
            }
            int i27 = i19 + i25;
            if (!getSealedSubclassFqNameList().isEmpty()) {
                i27 = i27 + 2 + CodedOutputStream.computeInt32SizeNoTag(i25);
            }
            this.H = i25;
            if ((this.f33103o & 8) == 8) {
                i27 += CodedOutputStream.computeInt32Size(17, this.I);
            }
            if ((this.f33103o & 16) == 16) {
                i27 += CodedOutputStream.computeMessageSize(18, this.J);
            }
            if ((this.f33103o & 32) == 32) {
                i27 += CodedOutputStream.computeInt32Size(19, this.K);
            }
            for (int i28 = 0; i28 < this.f33113y.size(); i28++) {
                i27 += CodedOutputStream.computeMessageSize(20, (MessageLite) this.f33113y.get(i28));
            }
            int i29 = 0;
            for (int i30 = 0; i30 < this.f33114z.size(); i30++) {
                i29 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33114z.get(i30)).intValue());
            }
            int i31 = i27 + i29;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i31 = i31 + 2 + CodedOutputStream.computeInt32SizeNoTag(i29);
            }
            this.A = i29;
            int i32 = 0;
            for (int i33 = 0; i33 < this.L.size(); i33++) {
                i32 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.L.get(i33)).intValue());
            }
            int i34 = i31 + i32;
            if (!getMultiFieldValueClassUnderlyingNameList().isEmpty()) {
                i34 = i34 + 2 + CodedOutputStream.computeInt32SizeNoTag(i32);
            }
            this.M = i32;
            for (int i35 = 0; i35 < this.N.size(); i35++) {
                i34 += CodedOutputStream.computeMessageSize(23, (MessageLite) this.N.get(i35));
            }
            int i36 = 0;
            for (int i37 = 0; i37 < this.O.size(); i37++) {
                i36 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.O.get(i37)).intValue());
            }
            int i38 = i34 + i36;
            if (!getMultiFieldValueClassUnderlyingTypeIdList().isEmpty()) {
                i38 = i38 + 2 + CodedOutputStream.computeInt32SizeNoTag(i36);
            }
            this.P = i36;
            if ((this.f33103o & 64) == 64) {
                i38 += CodedOutputStream.computeMessageSize(30, this.Q);
            }
            int i39 = 0;
            for (int i40 = 0; i40 < this.R.size(); i40++) {
                i39 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.R.get(i40)).intValue());
            }
            int size = i38 + i39 + (getVersionRequirementList().size() * 2);
            if ((this.f33103o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                size += CodedOutputStream.computeMessageSize(32, this.S);
            }
            for (int i41 = 0; i41 < this.T.size(); i41++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.T.get(i41));
            }
            int j10 = size + j() + this.f33102i.size();
            this.V = j10;
            return j10;
        }

        public Type getSupertype(int i10) {
            return (Type) this.f33108t.get(i10);
        }

        public int getSupertypeCount() {
            return this.f33108t.size();
        }

        public List<Integer> getSupertypeIdList() {
            return this.f33109u;
        }

        public List<Type> getSupertypeList() {
            return this.f33108t;
        }

        public TypeAlias getTypeAlias(int i10) {
            return (TypeAlias) this.E.get(i10);
        }

        public int getTypeAliasCount() {
            return this.E.size();
        }

        public List<TypeAlias> getTypeAliasList() {
            return this.E;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f33107s.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33107s.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33107s;
        }

        public TypeTable getTypeTable() {
            return this.Q;
        }

        public List<Integer> getVersionRequirementList() {
            return this.R;
        }

        public VersionRequirementTable getVersionRequirementTable() {
            return this.S;
        }

        public boolean hasCompanionObjectName() {
            if ((this.f33103o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33103o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasFqName() {
            if ((this.f33103o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingPropertyName() {
            if ((this.f33103o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingType() {
            if ((this.f33103o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingTypeId() {
            if ((this.f33103o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f33103o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f33103o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.U;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasFqName()) {
                this.U = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                if (!getTypeParameter(i10).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getSupertypeCount(); i11++) {
                if (!getSupertype(i11).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i12 = 0; i12 < getContextReceiverTypeCount(); i12++) {
                if (!getContextReceiverType(i12).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i13 = 0; i13 < getConstructorCount(); i13++) {
                if (!getConstructor(i13).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i14 = 0; i14 < getFunctionCount(); i14++) {
                if (!getFunction(i14).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i15 = 0; i15 < getPropertyCount(); i15++) {
                if (!getProperty(i15).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i16 = 0; i16 < getTypeAliasCount(); i16++) {
                if (!getTypeAlias(i16).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            for (int i17 = 0; i17 < getEnumEntryCount(); i17++) {
                if (!getEnumEntry(i17).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            if (hasInlineClassUnderlyingType() && !getInlineClassUnderlyingType().isInitialized()) {
                this.U = (byte) 0;
                return false;
            }
            for (int i18 = 0; i18 < getMultiFieldValueClassUnderlyingTypeCount(); i18++) {
                if (!getMultiFieldValueClassUnderlyingType(i18).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            if (hasTypeTable() && !getTypeTable().isInitialized()) {
                this.U = (byte) 0;
                return false;
            }
            for (int i19 = 0; i19 < getCompilerPluginDataCount(); i19++) {
                if (!getCompilerPluginData(i19).isInitialized()) {
                    this.U = (byte) 0;
                    return false;
                }
            }
            if (!i()) {
                this.U = (byte) 0;
                return false;
            }
            this.U = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33103o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33104p);
            }
            if (getSupertypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(18);
                codedOutputStream.writeRawVarint32(this.f33110v);
            }
            for (int i10 = 0; i10 < this.f33109u.size(); i10++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33109u.get(i10)).intValue());
            }
            if ((this.f33103o & 2) == 2) {
                codedOutputStream.writeInt32(3, this.f33105q);
            }
            if ((this.f33103o & 4) == 4) {
                codedOutputStream.writeInt32(4, this.f33106r);
            }
            for (int i11 = 0; i11 < this.f33107s.size(); i11++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33107s.get(i11));
            }
            for (int i12 = 0; i12 < this.f33108t.size(); i12++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33108t.get(i12));
            }
            if (getNestedClassNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(58);
                codedOutputStream.writeRawVarint32(this.f33112x);
            }
            for (int i13 = 0; i13 < this.f33111w.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33111w.get(i13)).intValue());
            }
            for (int i14 = 0; i14 < this.B.size(); i14++) {
                codedOutputStream.writeMessage(8, (MessageLite) this.B.get(i14));
            }
            for (int i15 = 0; i15 < this.C.size(); i15++) {
                codedOutputStream.writeMessage(9, (MessageLite) this.C.get(i15));
            }
            for (int i16 = 0; i16 < this.D.size(); i16++) {
                codedOutputStream.writeMessage(10, (MessageLite) this.D.get(i16));
            }
            for (int i17 = 0; i17 < this.E.size(); i17++) {
                codedOutputStream.writeMessage(11, (MessageLite) this.E.get(i17));
            }
            for (int i18 = 0; i18 < this.F.size(); i18++) {
                codedOutputStream.writeMessage(13, (MessageLite) this.F.get(i18));
            }
            if (getSealedSubclassFqNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(130);
                codedOutputStream.writeRawVarint32(this.H);
            }
            for (int i19 = 0; i19 < this.G.size(); i19++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.G.get(i19)).intValue());
            }
            if ((this.f33103o & 8) == 8) {
                codedOutputStream.writeInt32(17, this.I);
            }
            if ((this.f33103o & 16) == 16) {
                codedOutputStream.writeMessage(18, this.J);
            }
            if ((this.f33103o & 32) == 32) {
                codedOutputStream.writeInt32(19, this.K);
            }
            for (int i20 = 0; i20 < this.f33113y.size(); i20++) {
                codedOutputStream.writeMessage(20, (MessageLite) this.f33113y.get(i20));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(170);
                codedOutputStream.writeRawVarint32(this.A);
            }
            for (int i21 = 0; i21 < this.f33114z.size(); i21++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33114z.get(i21)).intValue());
            }
            if (getMultiFieldValueClassUnderlyingNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(178);
                codedOutputStream.writeRawVarint32(this.M);
            }
            for (int i22 = 0; i22 < this.L.size(); i22++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.L.get(i22)).intValue());
            }
            for (int i23 = 0; i23 < this.N.size(); i23++) {
                codedOutputStream.writeMessage(23, (MessageLite) this.N.get(i23));
            }
            if (getMultiFieldValueClassUnderlyingTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(194);
                codedOutputStream.writeRawVarint32(this.P);
            }
            for (int i24 = 0; i24 < this.O.size(); i24++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.O.get(i24)).intValue());
            }
            if ((this.f33103o & 64) == 64) {
                codedOutputStream.writeMessage(30, this.Q);
            }
            for (int i25 = 0; i25 < this.R.size(); i25++) {
                codedOutputStream.writeInt32(31, ((Integer) this.R.get(i25)).intValue());
            }
            if ((this.f33103o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(32, this.S);
            }
            for (int i26 = 0; i26 < this.T.size(); i26++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.T.get(i26));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33102i);
        }

        public static Builder newBuilder(Class r12) {
            return newBuilder().mergeFrom(r12);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Class getDefaultInstanceForType() {
            return W;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Class(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33110v = -1;
            this.f33112x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33102i = extendableBuilder.getUnknownFields();
        }

        private Class(boolean z10) {
            this.f33110v = -1;
            this.f33112x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33102i = ByteString.EMPTY;
        }

        /* JADX WARN: Type inference failed for: r4v2 */
        /* JADX WARN: Type inference failed for: r4v4 */
        /* JADX WARN: Type inference failed for: r4v8, types: [boolean] */
        private Class(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            boolean z11;
            this.f33110v = -1;
            this.f33112x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            e0();
            ByteString.Output newOutput = ByteString.newOutput();
            boolean z12 = true;
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z13 = false;
            boolean z14 = false;
            while (true) {
                boolean z15 = z12;
                ?? r42 = 64;
                char c10 = '@';
                if (!z13) {
                    try {
                        int readTag = codedInputStream.readTag();
                        switch (readTag) {
                            case 0:
                                break;
                            case 8:
                                this.f33103o |= 1;
                                this.f33104p = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 16:
                                boolean z16 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z16) {
                                    this.f33109u = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33109u.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z17 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z17) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33109u = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33109u.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                this.f33103o |= 2;
                                this.f33105q = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 32:
                                this.f33103o |= 4;
                                this.f33106r = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 42:
                                boolean z18 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z18) {
                                    this.f33107s = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33107s.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 50:
                                boolean z19 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z19) {
                                    this.f33108t = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33108t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                boolean z20 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z20) {
                                    this.f33111w = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33111w.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 58:
                                int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z21 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z21) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33111w = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33111w.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit2);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 66:
                                boolean z22 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z22) {
                                    this.B = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.B.add(codedInputStream.readMessage(Constructor.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 74:
                                boolean z23 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z23) {
                                    this.C = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.C.add(codedInputStream.readMessage(Function.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 82:
                                boolean z24 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z24) {
                                    this.D = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.D.add(codedInputStream.readMessage(Property.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 90:
                                boolean z25 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z25) {
                                    this.E = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.E.add(codedInputStream.readMessage(TypeAlias.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 106:
                                boolean z26 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z26) {
                                    this.F = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.F.add(codedInputStream.readMessage(EnumEntry.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT /* 128 */:
                                boolean z27 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z27) {
                                    this.G = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.G.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 130:
                                int pushLimit3 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z28 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z28) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.G = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.G.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit3);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 136:
                                this.f33103o |= 8;
                                this.I = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                                Type.Builder builder = (this.f33103o & 16) == 16 ? this.J.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.J = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.J = builder.buildPartial();
                                }
                                this.f33103o |= 16;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 152:
                                this.f33103o |= 32;
                                this.K = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 162:
                                boolean z29 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z29) {
                                    this.f33113y = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33113y.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 168:
                                boolean z30 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z30) {
                                    this.f33114z = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33114z.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 170:
                                int pushLimit4 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z31 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z31) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33114z = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33114z.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit4);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 176:
                                boolean z32 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z32) {
                                    this.L = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.L.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 178:
                                int pushLimit5 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z33 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z33) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.L = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.L.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit5);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 186:
                                boolean z34 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z34) {
                                    this.N = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.N.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 192:
                                boolean z35 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z35) {
                                    this.O = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.O.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 194:
                                int pushLimit6 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z36 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z36) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.O = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.O.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit6);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 242:
                                TypeTable.Builder builder2 = (this.f33103o & 64) == 64 ? this.Q.toBuilder() : null;
                                TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                this.Q = typeTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(typeTable);
                                    this.Q = builder2.buildPartial();
                                }
                                this.f33103o |= 64;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 248:
                                boolean z37 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z37) {
                                    this.R = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.R.add(Integer.valueOf(codedInputStream.readInt32()));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                int pushLimit7 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                boolean z38 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z38) {
                                    z14 = z14;
                                    if (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.R = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.R.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit7);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 258:
                                VersionRequirementTable.Builder builder3 = (this.f33103o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.S.toBuilder() : null;
                                VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                this.S = versionRequirementTable;
                                if (builder3 != null) {
                                    builder3.mergeFrom(versionRequirementTable);
                                    this.S = builder3.buildPartial();
                                }
                                this.f33103o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 266:
                                boolean z39 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z39) {
                                    this.T = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                z10 = true;
                                try {
                                    try {
                                        this.T.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                        continue;
                                        z12 = z15;
                                        z14 = z14;
                                    } catch (Throwable th2) {
                                        th = th2;
                                        z11 = z14;
                                        if (z11 & true) {
                                            this.f33109u = Collections.unmodifiableList(this.f33109u);
                                        }
                                        if (z11 & true) {
                                            this.f33107s = Collections.unmodifiableList(this.f33107s);
                                        }
                                        if (z11 & true) {
                                            this.f33108t = Collections.unmodifiableList(this.f33108t);
                                        }
                                        if ((z11 & true) == c10) {
                                            this.f33111w = Collections.unmodifiableList(this.f33111w);
                                        }
                                        if (z11 & true) {
                                            this.B = Collections.unmodifiableList(this.B);
                                        }
                                        if (z11 & true) {
                                            this.C = Collections.unmodifiableList(this.C);
                                        }
                                        if (z11 & true) {
                                            this.D = Collections.unmodifiableList(this.D);
                                        }
                                        if (z11 & true) {
                                            this.E = Collections.unmodifiableList(this.E);
                                        }
                                        if (z11 & true) {
                                            this.F = Collections.unmodifiableList(this.F);
                                        }
                                        if (z11 & true) {
                                            this.G = Collections.unmodifiableList(this.G);
                                        }
                                        if (z11 & true) {
                                            this.f33113y = Collections.unmodifiableList(this.f33113y);
                                        }
                                        if (z11 & true) {
                                            this.f33114z = Collections.unmodifiableList(this.f33114z);
                                        }
                                        if (z11 & true) {
                                            this.L = Collections.unmodifiableList(this.L);
                                        }
                                        if (z11 & true) {
                                            this.N = Collections.unmodifiableList(this.N);
                                        }
                                        if (z11 & true) {
                                            this.O = Collections.unmodifiableList(this.O);
                                        }
                                        if (z11 & true) {
                                            this.R = Collections.unmodifiableList(this.R);
                                        }
                                        if ((z11 & z10) == z10) {
                                            this.T = Collections.unmodifiableList(this.T);
                                        }
                                        try {
                                            newInstance.flush();
                                        } catch (IOException unused) {
                                        } catch (Throwable th3) {
                                            this.f33102i = newOutput.toByteString();
                                            throw th3;
                                        }
                                        this.f33102i = newOutput.toByteString();
                                        e();
                                        throw th;
                                    }
                                } catch (InvalidProtocolBufferException e10) {
                                    e = e10;
                                    throw e.setUnfinishedMessage(this);
                                } catch (IOException e11) {
                                    e = e11;
                                    throw new InvalidProtocolBufferException(e.getMessage()).setUnfinishedMessage(this);
                                }
                            default:
                                r42 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                if (r42 != 0) {
                                    continue;
                                    z12 = z15;
                                    z14 = z14;
                                }
                                break;
                        }
                        z13 = z15;
                        z12 = z15;
                        z14 = z14;
                    } catch (InvalidProtocolBufferException e12) {
                        e = e12;
                    } catch (IOException e13) {
                        e = e13;
                    } catch (Throwable th4) {
                        th = th4;
                        z10 = true;
                        c10 = r42;
                        z11 = z14;
                    }
                } else {
                    if ((z14 ? 1 : 0) & true) {
                        this.f33109u = Collections.unmodifiableList(this.f33109u);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33107s = Collections.unmodifiableList(this.f33107s);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33108t = Collections.unmodifiableList(this.f33108t);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33111w = Collections.unmodifiableList(this.f33111w);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.B = Collections.unmodifiableList(this.B);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.C = Collections.unmodifiableList(this.C);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.D = Collections.unmodifiableList(this.D);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.E = Collections.unmodifiableList(this.E);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.F = Collections.unmodifiableList(this.F);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.G = Collections.unmodifiableList(this.G);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33113y = Collections.unmodifiableList(this.f33113y);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33114z = Collections.unmodifiableList(this.f33114z);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.L = Collections.unmodifiableList(this.L);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.N = Collections.unmodifiableList(this.N);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.O = Collections.unmodifiableList(this.O);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.R = Collections.unmodifiableList(this.R);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.T = Collections.unmodifiableList(this.T);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th5) {
                        this.f33102i = newOutput.toByteString();
                        throw th5;
                    }
                    this.f33102i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ClassOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class CompilerPluginData extends GeneratedMessageLite implements CompilerPluginDataOrBuilder {
        public static Parser<CompilerPluginData> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final CompilerPluginData f33130s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33131e;

        /* renamed from: i  reason: collision with root package name */
        private int f33132i;

        /* renamed from: o  reason: collision with root package name */
        private int f33133o;

        /* renamed from: p  reason: collision with root package name */
        private ByteString f33134p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33135q;

        /* renamed from: r  reason: collision with root package name */
        private int f33136r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<CompilerPluginData, Builder> implements CompilerPluginDataOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33137e;

            /* renamed from: i  reason: collision with root package name */
            private int f33138i;

            /* renamed from: o  reason: collision with root package name */
            private ByteString f33139o = ByteString.EMPTY;

            private Builder() {
                d();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
            }

            public CompilerPluginData buildPartial() {
                CompilerPluginData compilerPluginData = new CompilerPluginData(this);
                int i10 = this.f33137e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                compilerPluginData.f33133o = this.f33138i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                compilerPluginData.f33134p = this.f33139o;
                compilerPluginData.f33132i = i11;
                return compilerPluginData;
            }

            public boolean hasData() {
                if ((this.f33137e & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasPluginId() {
                if ((this.f33137e & 1) == 1) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasPluginId() || !hasData()) {
                    return false;
                }
                return true;
            }

            public Builder setData(ByteString byteString) {
                byteString.getClass();
                this.f33137e |= 2;
                this.f33139o = byteString;
                return this;
            }

            public Builder setPluginId(int i10) {
                this.f33137e |= 1;
                this.f33138i = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public CompilerPluginData build() {
                CompilerPluginData buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public CompilerPluginData getDefaultInstanceForType() {
                return CompilerPluginData.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(CompilerPluginData compilerPluginData) {
                if (compilerPluginData == CompilerPluginData.getDefaultInstance()) {
                    return this;
                }
                if (compilerPluginData.hasPluginId()) {
                    setPluginId(compilerPluginData.getPluginId());
                }
                if (compilerPluginData.hasData()) {
                    setData(compilerPluginData.getData());
                }
                setUnknownFields(getUnknownFields().concat(compilerPluginData.f33131e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.CompilerPluginData.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$CompilerPluginData$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public CompilerPluginData parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new CompilerPluginData(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            CompilerPluginData compilerPluginData = new CompilerPluginData(true);
            f33130s = compilerPluginData;
            compilerPluginData.l();
        }

        public static CompilerPluginData getDefaultInstance() {
            return f33130s;
        }

        private void l() {
            this.f33133o = 0;
            this.f33134p = ByteString.EMPTY;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public ByteString getData() {
            return this.f33134p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<CompilerPluginData> getParserForType() {
            return PARSER;
        }

        public int getPluginId() {
            return this.f33133o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33136r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33132i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33133o);
            } else {
                i10 = 0;
            }
            if ((this.f33132i & 2) == 2) {
                i10 += CodedOutputStream.computeBytesSize(2, this.f33134p);
            }
            int size = i10 + this.f33131e.size();
            this.f33136r = size;
            return size;
        }

        public boolean hasData() {
            if ((this.f33132i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasPluginId() {
            if ((this.f33132i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33135q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasPluginId()) {
                this.f33135q = (byte) 0;
                return false;
            } else if (!hasData()) {
                this.f33135q = (byte) 0;
                return false;
            } else {
                this.f33135q = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33132i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33133o);
            }
            if ((this.f33132i & 2) == 2) {
                codedOutputStream.writeBytes(2, this.f33134p);
            }
            codedOutputStream.writeRawBytes(this.f33131e);
        }

        public static Builder newBuilder(CompilerPluginData compilerPluginData) {
            return newBuilder().mergeFrom(compilerPluginData);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public CompilerPluginData getDefaultInstanceForType() {
            return f33130s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private CompilerPluginData(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33135q = (byte) -1;
            this.f33136r = -1;
            this.f33131e = builder.getUnknownFields();
        }

        private CompilerPluginData(boolean z10) {
            this.f33135q = (byte) -1;
            this.f33136r = -1;
            this.f33131e = ByteString.EMPTY;
        }

        private CompilerPluginData(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33135q = (byte) -1;
            this.f33136r = -1;
            l();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33132i |= 1;
                                this.f33133o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33132i |= 2;
                                this.f33134p = codedInputStream.readBytes();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33131e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33131e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33131e = newOutput.toByteString();
                throw th4;
            }
            this.f33131e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface CompilerPluginDataOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Constructor extends GeneratedMessageLite.ExtendableMessage<Constructor> implements ConstructorOrBuilder {
        public static Parser<Constructor> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final Constructor f33140v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33141i;

        /* renamed from: o  reason: collision with root package name */
        private int f33142o;

        /* renamed from: p  reason: collision with root package name */
        private int f33143p;

        /* renamed from: q  reason: collision with root package name */
        private List f33144q;

        /* renamed from: r  reason: collision with root package name */
        private List f33145r;

        /* renamed from: s  reason: collision with root package name */
        private List f33146s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33147t;

        /* renamed from: u  reason: collision with root package name */
        private int f33148u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Constructor, Builder> implements ConstructorOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33149o;

            /* renamed from: p  reason: collision with root package name */
            private int f33150p = 6;

            /* renamed from: q  reason: collision with root package name */
            private List f33151q;

            /* renamed from: r  reason: collision with root package name */
            private List f33152r;

            /* renamed from: s  reason: collision with root package name */
            private List f33153s;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33151q = list;
                this.f33152r = list;
                this.f33153s = list;
                m();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33149o & 8) != 8) {
                    this.f33153s = new ArrayList(this.f33153s);
                    this.f33149o |= 8;
                }
            }

            private void k() {
                if ((this.f33149o & 2) != 2) {
                    this.f33151q = new ArrayList(this.f33151q);
                    this.f33149o |= 2;
                }
            }

            private void l() {
                if ((this.f33149o & 4) != 4) {
                    this.f33152r = new ArrayList(this.f33152r);
                    this.f33149o |= 4;
                }
            }

            private void m() {
            }

            public Constructor buildPartial() {
                Constructor constructor = new Constructor(this);
                int i10 = 1;
                if ((this.f33149o & 1) != 1) {
                    i10 = 0;
                }
                constructor.f33143p = this.f33150p;
                if ((this.f33149o & 2) == 2) {
                    this.f33151q = Collections.unmodifiableList(this.f33151q);
                    this.f33149o &= -3;
                }
                constructor.f33144q = this.f33151q;
                if ((this.f33149o & 4) == 4) {
                    this.f33152r = Collections.unmodifiableList(this.f33152r);
                    this.f33149o &= -5;
                }
                constructor.f33145r = this.f33152r;
                if ((this.f33149o & 8) == 8) {
                    this.f33153s = Collections.unmodifiableList(this.f33153s);
                    this.f33149o &= -9;
                }
                constructor.f33146s = this.f33153s;
                constructor.f33142o = i10;
                return constructor;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f33153s.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f33153s.size();
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f33151q.get(i10);
            }

            public int getValueParameterCount() {
                return this.f33151q.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getValueParameterCount(); i10++) {
                    if (!getValueParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getCompilerPluginDataCount(); i11++) {
                    if (!getCompilerPluginData(i11).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder setFlags(int i10) {
                this.f33149o |= 1;
                this.f33150p = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Constructor build() {
                Constructor buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Constructor getDefaultInstanceForType() {
                return Constructor.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Constructor constructor) {
                if (constructor == Constructor.getDefaultInstance()) {
                    return this;
                }
                if (constructor.hasFlags()) {
                    setFlags(constructor.getFlags());
                }
                if (!constructor.f33144q.isEmpty()) {
                    if (this.f33151q.isEmpty()) {
                        this.f33151q = constructor.f33144q;
                        this.f33149o &= -3;
                    } else {
                        k();
                        this.f33151q.addAll(constructor.f33144q);
                    }
                }
                if (!constructor.f33145r.isEmpty()) {
                    if (this.f33152r.isEmpty()) {
                        this.f33152r = constructor.f33145r;
                        this.f33149o &= -5;
                    } else {
                        l();
                        this.f33152r.addAll(constructor.f33145r);
                    }
                }
                if (!constructor.f33146s.isEmpty()) {
                    if (this.f33153s.isEmpty()) {
                        this.f33153s = constructor.f33146s;
                        this.f33149o &= -9;
                    } else {
                        j();
                        this.f33153s.addAll(constructor.f33146s);
                    }
                }
                f(constructor);
                setUnknownFields(getUnknownFields().concat(constructor.f33141i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Constructor.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Constructor$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Constructor parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Constructor(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Constructor constructor = new Constructor(true);
            f33140v = constructor;
            constructor.v();
        }

        public static Constructor getDefaultInstance() {
            return f33140v;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        private void v() {
            this.f33143p = 6;
            List list = Collections.EMPTY_LIST;
            this.f33144q = list;
            this.f33145r = list;
            this.f33146s = list;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f33146s.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f33146s.size();
        }

        public int getFlags() {
            return this.f33143p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Constructor> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33148u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33142o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33143p);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33144q.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33144q.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33145r.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33145r.get(i14)).intValue());
            }
            int size = i10 + i13 + (getVersionRequirementList().size() * 2);
            for (int i15 = 0; i15 < this.f33146s.size(); i15++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f33146s.get(i15));
            }
            int j10 = size + j() + this.f33141i.size();
            this.f33148u = j10;
            return j10;
        }

        public ValueParameter getValueParameter(int i10) {
            return (ValueParameter) this.f33144q.get(i10);
        }

        public int getValueParameterCount() {
            return this.f33144q.size();
        }

        public List<ValueParameter> getValueParameterList() {
            return this.f33144q;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f33145r;
        }

        public boolean hasFlags() {
            if ((this.f33142o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33147t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getValueParameterCount(); i10++) {
                if (!getValueParameter(i10).isInitialized()) {
                    this.f33147t = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getCompilerPluginDataCount(); i11++) {
                if (!getCompilerPluginData(i11).isInitialized()) {
                    this.f33147t = (byte) 0;
                    return false;
                }
            }
            if (!i()) {
                this.f33147t = (byte) 0;
                return false;
            }
            this.f33147t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33142o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33143p);
            }
            for (int i10 = 0; i10 < this.f33144q.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33144q.get(i10));
            }
            for (int i11 = 0; i11 < this.f33145r.size(); i11++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f33145r.get(i11)).intValue());
            }
            for (int i12 = 0; i12 < this.f33146s.size(); i12++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f33146s.get(i12));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33141i);
        }

        public static Builder newBuilder(Constructor constructor) {
            return newBuilder().mergeFrom(constructor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Constructor getDefaultInstanceForType() {
            return f33140v;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Constructor(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33147t = (byte) -1;
            this.f33148u = -1;
            this.f33141i = extendableBuilder.getUnknownFields();
        }

        private Constructor(boolean z10) {
            this.f33147t = (byte) -1;
            this.f33148u = -1;
            this.f33141i = ByteString.EMPTY;
        }

        private Constructor(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33147t = (byte) -1;
            this.f33148u = -1;
            v();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33142o |= 1;
                                this.f33143p = codedInputStream.readInt32();
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33144q = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33144q.add(codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite));
                            } else if (readTag == 248) {
                                if (!(z11 & true)) {
                                    this.f33145r = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33145r.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag == 250) {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33145r = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33145r.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            } else if (readTag != 258) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33146s = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33146s.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33144q = Collections.unmodifiableList(this.f33144q);
                        }
                        if (z11 & true) {
                            this.f33145r = Collections.unmodifiableList(this.f33145r);
                        }
                        if (z11 & true) {
                            this.f33146s = Collections.unmodifiableList(this.f33146s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33141i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33141i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f33144q = Collections.unmodifiableList(this.f33144q);
            }
            if (z11 & true) {
                this.f33145r = Collections.unmodifiableList(this.f33145r);
            }
            if (z11 & true) {
                this.f33146s = Collections.unmodifiableList(this.f33146s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33141i = newOutput.toByteString();
                throw th4;
            }
            this.f33141i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ConstructorOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Contract extends GeneratedMessageLite implements ContractOrBuilder {
        public static Parser<Contract> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final Contract f33154q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33155e;

        /* renamed from: i  reason: collision with root package name */
        private List f33156i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33157o;

        /* renamed from: p  reason: collision with root package name */
        private int f33158p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Contract, Builder> implements ContractOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33159e;

            /* renamed from: i  reason: collision with root package name */
            private List f33160i = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33159e & 1) != 1) {
                    this.f33160i = new ArrayList(this.f33160i);
                    this.f33159e |= 1;
                }
            }

            private void e() {
            }

            public Contract buildPartial() {
                Contract contract = new Contract(this);
                if ((this.f33159e & 1) == 1) {
                    this.f33160i = Collections.unmodifiableList(this.f33160i);
                    this.f33159e &= -2;
                }
                contract.f33156i = this.f33160i;
                return contract;
            }

            public Effect getEffect(int i10) {
                return (Effect) this.f33160i.get(i10);
            }

            public int getEffectCount() {
                return this.f33160i.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getEffectCount(); i10++) {
                    if (!getEffect(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Contract build() {
                Contract buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Contract getDefaultInstanceForType() {
                return Contract.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Contract contract) {
                if (contract == Contract.getDefaultInstance()) {
                    return this;
                }
                if (!contract.f33156i.isEmpty()) {
                    if (this.f33160i.isEmpty()) {
                        this.f33160i = contract.f33156i;
                        this.f33159e &= -2;
                    } else {
                        d();
                        this.f33160i.addAll(contract.f33156i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(contract.f33155e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Contract.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Contract$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Contract parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Contract(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Contract contract = new Contract(true);
            f33154q = contract;
            contract.k();
        }

        public static Contract getDefaultInstance() {
            return f33154q;
        }

        private void k() {
            this.f33156i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Effect getEffect(int i10) {
            return (Effect) this.f33156i.get(i10);
        }

        public int getEffectCount() {
            return this.f33156i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Contract> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33158p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33156i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33156i.get(i12));
            }
            int size = i11 + this.f33155e.size();
            this.f33158p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33157o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectCount(); i10++) {
                if (!getEffect(i10).isInitialized()) {
                    this.f33157o = (byte) 0;
                    return false;
                }
            }
            this.f33157o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33156i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33156i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33155e);
        }

        public static Builder newBuilder(Contract contract) {
            return newBuilder().mergeFrom(contract);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Contract getDefaultInstanceForType() {
            return f33154q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Contract(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33157o = (byte) -1;
            this.f33158p = -1;
            this.f33155e = builder.getUnknownFields();
        }

        private Contract(boolean z10) {
            this.f33157o = (byte) -1;
            this.f33158p = -1;
            this.f33155e = ByteString.EMPTY;
        }

        private Contract(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33157o = (byte) -1;
            this.f33158p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    if (!z11) {
                                        this.f33156i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33156i.add(codedInputStream.readMessage(Effect.PARSER, extensionRegistryLite));
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f33156i = Collections.unmodifiableList(this.f33156i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33155e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33155e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33156i = Collections.unmodifiableList(this.f33156i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33155e = newOutput.toByteString();
                throw th4;
            }
            this.f33155e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ContractOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Effect extends GeneratedMessageLite implements EffectOrBuilder {
        public static Parser<Effect> PARSER = new a();

        /* renamed from: u  reason: collision with root package name */
        private static final Effect f33161u;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33162e;

        /* renamed from: i  reason: collision with root package name */
        private int f33163i;

        /* renamed from: o  reason: collision with root package name */
        private EffectType f33164o;

        /* renamed from: p  reason: collision with root package name */
        private List f33165p;

        /* renamed from: q  reason: collision with root package name */
        private Expression f33166q;

        /* renamed from: r  reason: collision with root package name */
        private InvocationKind f33167r;

        /* renamed from: s  reason: collision with root package name */
        private byte f33168s;

        /* renamed from: t  reason: collision with root package name */
        private int f33169t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Effect, Builder> implements EffectOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33170e;

            /* renamed from: i  reason: collision with root package name */
            private EffectType f33171i = EffectType.RETURNS_CONSTANT;

            /* renamed from: o  reason: collision with root package name */
            private List f33172o = Collections.EMPTY_LIST;

            /* renamed from: p  reason: collision with root package name */
            private Expression f33173p = Expression.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private InvocationKind f33174q = InvocationKind.AT_MOST_ONCE;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33170e & 2) != 2) {
                    this.f33172o = new ArrayList(this.f33172o);
                    this.f33170e |= 2;
                }
            }

            private void e() {
            }

            public Effect buildPartial() {
                Effect effect = new Effect(this);
                int i10 = this.f33170e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                effect.f33164o = this.f33171i;
                if ((this.f33170e & 2) == 2) {
                    this.f33172o = Collections.unmodifiableList(this.f33172o);
                    this.f33170e &= -3;
                }
                effect.f33165p = this.f33172o;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                effect.f33166q = this.f33173p;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                effect.f33167r = this.f33174q;
                effect.f33163i = i11;
                return effect;
            }

            public Expression getConclusionOfConditionalEffect() {
                return this.f33173p;
            }

            public Expression getEffectConstructorArgument(int i10) {
                return (Expression) this.f33172o.get(i10);
            }

            public int getEffectConstructorArgumentCount() {
                return this.f33172o.size();
            }

            public boolean hasConclusionOfConditionalEffect() {
                if ((this.f33170e & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getEffectConstructorArgumentCount(); i10++) {
                    if (!getEffectConstructorArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasConclusionOfConditionalEffect() && !getConclusionOfConditionalEffect().isInitialized()) {
                    return false;
                }
                return true;
            }

            public Builder mergeConclusionOfConditionalEffect(Expression expression) {
                if ((this.f33170e & 4) == 4 && this.f33173p != Expression.getDefaultInstance()) {
                    this.f33173p = Expression.newBuilder(this.f33173p).mergeFrom(expression).buildPartial();
                } else {
                    this.f33173p = expression;
                }
                this.f33170e |= 4;
                return this;
            }

            public Builder setEffectType(EffectType effectType) {
                effectType.getClass();
                this.f33170e |= 1;
                this.f33171i = effectType;
                return this;
            }

            public Builder setKind(InvocationKind invocationKind) {
                invocationKind.getClass();
                this.f33170e |= 8;
                this.f33174q = invocationKind;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Effect build() {
                Effect buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Effect getDefaultInstanceForType() {
                return Effect.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Effect effect) {
                if (effect == Effect.getDefaultInstance()) {
                    return this;
                }
                if (effect.hasEffectType()) {
                    setEffectType(effect.getEffectType());
                }
                if (!effect.f33165p.isEmpty()) {
                    if (this.f33172o.isEmpty()) {
                        this.f33172o = effect.f33165p;
                        this.f33170e &= -3;
                    } else {
                        d();
                        this.f33172o.addAll(effect.f33165p);
                    }
                }
                if (effect.hasConclusionOfConditionalEffect()) {
                    mergeConclusionOfConditionalEffect(effect.getConclusionOfConditionalEffect());
                }
                if (effect.hasKind()) {
                    setKind(effect.getKind());
                }
                setUnknownFields(getUnknownFields().concat(effect.f33162e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Effect.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Effect$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum EffectType implements Internal.EnumLite {
            RETURNS_CONSTANT(0, 0),
            CALLS(1, 1),
            RETURNS_NOT_NULL(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f33175e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33177d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public EffectType findValueByNumber(int i10) {
                    return EffectType.valueOf(i10);
                }
            }

            EffectType(int i10, int i11) {
                this.f33177d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33177d;
            }

            public static EffectType valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return RETURNS_NOT_NULL;
                    }
                    return CALLS;
                }
                return RETURNS_CONSTANT;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum InvocationKind implements Internal.EnumLite {
            AT_MOST_ONCE(0, 0),
            EXACTLY_ONCE(1, 1),
            AT_LEAST_ONCE(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f33178e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33180d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public InvocationKind findValueByNumber(int i10) {
                    return InvocationKind.valueOf(i10);
                }
            }

            InvocationKind(int i10, int i11) {
                this.f33180d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33180d;
            }

            public static InvocationKind valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return AT_LEAST_ONCE;
                    }
                    return EXACTLY_ONCE;
                }
                return AT_MOST_ONCE;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Effect parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Effect(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Effect effect = new Effect(true);
            f33161u = effect;
            effect.o();
        }

        public static Effect getDefaultInstance() {
            return f33161u;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f33164o = EffectType.RETURNS_CONSTANT;
            this.f33165p = Collections.EMPTY_LIST;
            this.f33166q = Expression.getDefaultInstance();
            this.f33167r = InvocationKind.AT_MOST_ONCE;
        }

        public Expression getConclusionOfConditionalEffect() {
            return this.f33166q;
        }

        public Expression getEffectConstructorArgument(int i10) {
            return (Expression) this.f33165p.get(i10);
        }

        public int getEffectConstructorArgumentCount() {
            return this.f33165p.size();
        }

        public EffectType getEffectType() {
            return this.f33164o;
        }

        public InvocationKind getKind() {
            return this.f33167r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Effect> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33169t;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33163i & 1) == 1) {
                i10 = CodedOutputStream.computeEnumSize(1, this.f33164o.getNumber());
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33165p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33165p.get(i12));
            }
            if ((this.f33163i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33166q);
            }
            if ((this.f33163i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f33167r.getNumber());
            }
            int size = i10 + this.f33162e.size();
            this.f33169t = size;
            return size;
        }

        public boolean hasConclusionOfConditionalEffect() {
            if ((this.f33163i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasEffectType() {
            if ((this.f33163i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasKind() {
            if ((this.f33163i & 4) == 4) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33168s;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectConstructorArgumentCount(); i10++) {
                if (!getEffectConstructorArgument(i10).isInitialized()) {
                    this.f33168s = (byte) 0;
                    return false;
                }
            }
            if (hasConclusionOfConditionalEffect() && !getConclusionOfConditionalEffect().isInitialized()) {
                this.f33168s = (byte) 0;
                return false;
            }
            this.f33168s = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33163i & 1) == 1) {
                codedOutputStream.writeEnum(1, this.f33164o.getNumber());
            }
            for (int i10 = 0; i10 < this.f33165p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33165p.get(i10));
            }
            if ((this.f33163i & 2) == 2) {
                codedOutputStream.writeMessage(3, this.f33166q);
            }
            if ((this.f33163i & 4) == 4) {
                codedOutputStream.writeEnum(4, this.f33167r.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f33162e);
        }

        public static Builder newBuilder(Effect effect) {
            return newBuilder().mergeFrom(effect);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Effect getDefaultInstanceForType() {
            return f33161u;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Effect(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33168s = (byte) -1;
            this.f33169t = -1;
            this.f33162e = builder.getUnknownFields();
        }

        private Effect(boolean z10) {
            this.f33168s = (byte) -1;
            this.f33169t = -1;
            this.f33162e = ByteString.EMPTY;
        }

        private Effect(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33168s = (byte) -1;
            this.f33169t = -1;
            o();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                int readEnum = codedInputStream.readEnum();
                                EffectType valueOf = EffectType.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33163i |= 1;
                                    this.f33164o = valueOf;
                                }
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33165p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33165p.add(codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite));
                            } else if (readTag == 26) {
                                Expression.Builder builder = (this.f33163i & 2) == 2 ? this.f33166q.toBuilder() : null;
                                Expression expression = (Expression) codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite);
                                this.f33166q = expression;
                                if (builder != null) {
                                    builder.mergeFrom(expression);
                                    this.f33166q = builder.buildPartial();
                                }
                                this.f33163i |= 2;
                            } else if (readTag != 32) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int readEnum2 = codedInputStream.readEnum();
                                InvocationKind valueOf2 = InvocationKind.valueOf(readEnum2);
                                if (valueOf2 == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum2);
                                } else {
                                    this.f33163i |= 4;
                                    this.f33167r = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33165p = Collections.unmodifiableList(this.f33165p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33162e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33162e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f33165p = Collections.unmodifiableList(this.f33165p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33162e = newOutput.toByteString();
                throw th4;
            }
            this.f33162e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface EffectOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class EnumEntry extends GeneratedMessageLite.ExtendableMessage<EnumEntry> implements EnumEntryOrBuilder {
        public static Parser<EnumEntry> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final EnumEntry f33181s;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33182i;

        /* renamed from: o  reason: collision with root package name */
        private int f33183o;

        /* renamed from: p  reason: collision with root package name */
        private int f33184p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33185q;

        /* renamed from: r  reason: collision with root package name */
        private int f33186r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<EnumEntry, Builder> implements EnumEntryOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33187o;

            /* renamed from: p  reason: collision with root package name */
            private int f33188p;

            private Builder() {
                j();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
            }

            public EnumEntry buildPartial() {
                EnumEntry enumEntry = new EnumEntry(this);
                int i10 = 1;
                if ((this.f33187o & 1) != 1) {
                    i10 = 0;
                }
                enumEntry.f33184p = this.f33188p;
                enumEntry.f33183o = i10;
                return enumEntry;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder setName(int i10) {
                this.f33187o |= 1;
                this.f33188p = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public EnumEntry build() {
                EnumEntry buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public EnumEntry getDefaultInstanceForType() {
                return EnumEntry.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(EnumEntry enumEntry) {
                if (enumEntry == EnumEntry.getDefaultInstance()) {
                    return this;
                }
                if (enumEntry.hasName()) {
                    setName(enumEntry.getName());
                }
                f(enumEntry);
                setUnknownFields(getUnknownFields().concat(enumEntry.f33182i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.EnumEntry.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$EnumEntry$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public EnumEntry parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new EnumEntry(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            EnumEntry enumEntry = new EnumEntry(true);
            f33181s = enumEntry;
            enumEntry.p();
        }

        public static EnumEntry getDefaultInstance() {
            return f33181s;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        private void p() {
            this.f33184p = 0;
        }

        public int getName() {
            return this.f33184p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<EnumEntry> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33186r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33183o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33184p);
            } else {
                i10 = 0;
            }
            int j10 = i10 + j() + this.f33182i.size();
            this.f33186r = j10;
            return j10;
        }

        public boolean hasName() {
            if ((this.f33183o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33185q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!i()) {
                this.f33185q = (byte) 0;
                return false;
            }
            this.f33185q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33183o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33184p);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33182i);
        }

        public static Builder newBuilder(EnumEntry enumEntry) {
            return newBuilder().mergeFrom(enumEntry);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public EnumEntry getDefaultInstanceForType() {
            return f33181s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private EnumEntry(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33185q = (byte) -1;
            this.f33186r = -1;
            this.f33182i = extendableBuilder.getUnknownFields();
        }

        private EnumEntry(boolean z10) {
            this.f33185q = (byte) -1;
            this.f33186r = -1;
            this.f33182i = ByteString.EMPTY;
        }

        private EnumEntry(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33185q = (byte) -1;
            this.f33186r = -1;
            p();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 8) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    this.f33183o |= 1;
                                    this.f33184p = codedInputStream.readInt32();
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33182i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33182i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33182i = newOutput.toByteString();
                throw th4;
            }
            this.f33182i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface EnumEntryOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Expression extends GeneratedMessageLite implements ExpressionOrBuilder {
        public static Parser<Expression> PARSER = new a();

        /* renamed from: x  reason: collision with root package name */
        private static final Expression f33189x;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33190e;

        /* renamed from: i  reason: collision with root package name */
        private int f33191i;

        /* renamed from: o  reason: collision with root package name */
        private int f33192o;

        /* renamed from: p  reason: collision with root package name */
        private int f33193p;

        /* renamed from: q  reason: collision with root package name */
        private ConstantValue f33194q;

        /* renamed from: r  reason: collision with root package name */
        private Type f33195r;

        /* renamed from: s  reason: collision with root package name */
        private int f33196s;

        /* renamed from: t  reason: collision with root package name */
        private List f33197t;

        /* renamed from: u  reason: collision with root package name */
        private List f33198u;

        /* renamed from: v  reason: collision with root package name */
        private byte f33199v;

        /* renamed from: w  reason: collision with root package name */
        private int f33200w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Expression, Builder> implements ExpressionOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33201e;

            /* renamed from: i  reason: collision with root package name */
            private int f33202i;

            /* renamed from: o  reason: collision with root package name */
            private int f33203o;

            /* renamed from: p  reason: collision with root package name */
            private ConstantValue f33204p = ConstantValue.TRUE;

            /* renamed from: q  reason: collision with root package name */
            private Type f33205q = Type.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private int f33206r;

            /* renamed from: s  reason: collision with root package name */
            private List f33207s;

            /* renamed from: t  reason: collision with root package name */
            private List f33208t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33207s = list;
                this.f33208t = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33201e & 32) != 32) {
                    this.f33207s = new ArrayList(this.f33207s);
                    this.f33201e |= 32;
                }
            }

            private void e() {
                if ((this.f33201e & 64) != 64) {
                    this.f33208t = new ArrayList(this.f33208t);
                    this.f33201e |= 64;
                }
            }

            private void f() {
            }

            public Expression buildPartial() {
                Expression expression = new Expression(this);
                int i10 = this.f33201e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                expression.f33192o = this.f33202i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                expression.f33193p = this.f33203o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                expression.f33194q = this.f33204p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                expression.f33195r = this.f33205q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                expression.f33196s = this.f33206r;
                if ((this.f33201e & 32) == 32) {
                    this.f33207s = Collections.unmodifiableList(this.f33207s);
                    this.f33201e &= -33;
                }
                expression.f33197t = this.f33207s;
                if ((this.f33201e & 64) == 64) {
                    this.f33208t = Collections.unmodifiableList(this.f33208t);
                    this.f33201e &= -65;
                }
                expression.f33198u = this.f33208t;
                expression.f33191i = i11;
                return expression;
            }

            public Expression getAndArgument(int i10) {
                return (Expression) this.f33207s.get(i10);
            }

            public int getAndArgumentCount() {
                return this.f33207s.size();
            }

            public Type getIsInstanceType() {
                return this.f33205q;
            }

            public Expression getOrArgument(int i10) {
                return (Expression) this.f33208t.get(i10);
            }

            public int getOrArgumentCount() {
                return this.f33208t.size();
            }

            public boolean hasIsInstanceType() {
                if ((this.f33201e & 8) == 8) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (hasIsInstanceType() && !getIsInstanceType().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getAndArgumentCount(); i10++) {
                    if (!getAndArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getOrArgumentCount(); i11++) {
                    if (!getOrArgument(i11).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            public Builder mergeIsInstanceType(Type type) {
                if ((this.f33201e & 8) == 8 && this.f33205q != Type.getDefaultInstance()) {
                    this.f33205q = Type.newBuilder(this.f33205q).mergeFrom(type).buildPartial();
                } else {
                    this.f33205q = type;
                }
                this.f33201e |= 8;
                return this;
            }

            public Builder setConstantValue(ConstantValue constantValue) {
                constantValue.getClass();
                this.f33201e |= 4;
                this.f33204p = constantValue;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33201e |= 1;
                this.f33202i = i10;
                return this;
            }

            public Builder setIsInstanceTypeId(int i10) {
                this.f33201e |= 16;
                this.f33206r = i10;
                return this;
            }

            public Builder setValueParameterReference(int i10) {
                this.f33201e |= 2;
                this.f33203o = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Expression build() {
                Expression buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Expression getDefaultInstanceForType() {
                return Expression.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Expression expression) {
                if (expression == Expression.getDefaultInstance()) {
                    return this;
                }
                if (expression.hasFlags()) {
                    setFlags(expression.getFlags());
                }
                if (expression.hasValueParameterReference()) {
                    setValueParameterReference(expression.getValueParameterReference());
                }
                if (expression.hasConstantValue()) {
                    setConstantValue(expression.getConstantValue());
                }
                if (expression.hasIsInstanceType()) {
                    mergeIsInstanceType(expression.getIsInstanceType());
                }
                if (expression.hasIsInstanceTypeId()) {
                    setIsInstanceTypeId(expression.getIsInstanceTypeId());
                }
                if (!expression.f33197t.isEmpty()) {
                    if (this.f33207s.isEmpty()) {
                        this.f33207s = expression.f33197t;
                        this.f33201e &= -33;
                    } else {
                        d();
                        this.f33207s.addAll(expression.f33197t);
                    }
                }
                if (!expression.f33198u.isEmpty()) {
                    if (this.f33208t.isEmpty()) {
                        this.f33208t = expression.f33198u;
                        this.f33201e &= -65;
                    } else {
                        e();
                        this.f33208t.addAll(expression.f33198u);
                    }
                }
                setUnknownFields(getUnknownFields().concat(expression.f33190e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Expression.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Expression$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum ConstantValue implements Internal.EnumLite {
            TRUE(0, 0),
            FALSE(1, 1),
            NULL(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f33209e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33211d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public ConstantValue findValueByNumber(int i10) {
                    return ConstantValue.valueOf(i10);
                }
            }

            ConstantValue(int i10, int i11) {
                this.f33211d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33211d;
            }

            public static ConstantValue valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return NULL;
                    }
                    return FALSE;
                }
                return TRUE;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Expression parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Expression(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Expression expression = new Expression(true);
            f33189x = expression;
            expression.s();
        }

        public static Expression getDefaultInstance() {
            return f33189x;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void s() {
            this.f33192o = 0;
            this.f33193p = 0;
            this.f33194q = ConstantValue.TRUE;
            this.f33195r = Type.getDefaultInstance();
            this.f33196s = 0;
            List list = Collections.EMPTY_LIST;
            this.f33197t = list;
            this.f33198u = list;
        }

        public Expression getAndArgument(int i10) {
            return (Expression) this.f33197t.get(i10);
        }

        public int getAndArgumentCount() {
            return this.f33197t.size();
        }

        public ConstantValue getConstantValue() {
            return this.f33194q;
        }

        public int getFlags() {
            return this.f33192o;
        }

        public Type getIsInstanceType() {
            return this.f33195r;
        }

        public int getIsInstanceTypeId() {
            return this.f33196s;
        }

        public Expression getOrArgument(int i10) {
            return (Expression) this.f33198u.get(i10);
        }

        public int getOrArgumentCount() {
            return this.f33198u.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Expression> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33200w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33191i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33192o);
            } else {
                i10 = 0;
            }
            if ((this.f33191i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33193p);
            }
            if ((this.f33191i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f33194q.getNumber());
            }
            if ((this.f33191i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33195r);
            }
            if ((this.f33191i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33196s);
            }
            for (int i12 = 0; i12 < this.f33197t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33197t.get(i12));
            }
            for (int i13 = 0; i13 < this.f33198u.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(7, (MessageLite) this.f33198u.get(i13));
            }
            int size = i10 + this.f33190e.size();
            this.f33200w = size;
            return size;
        }

        public int getValueParameterReference() {
            return this.f33193p;
        }

        public boolean hasConstantValue() {
            if ((this.f33191i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33191i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceType() {
            if ((this.f33191i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceTypeId() {
            if ((this.f33191i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasValueParameterReference() {
            if ((this.f33191i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33199v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasIsInstanceType() && !getIsInstanceType().isInitialized()) {
                this.f33199v = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getAndArgumentCount(); i10++) {
                if (!getAndArgument(i10).isInitialized()) {
                    this.f33199v = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getOrArgumentCount(); i11++) {
                if (!getOrArgument(i11).isInitialized()) {
                    this.f33199v = (byte) 0;
                    return false;
                }
            }
            this.f33199v = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33191i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33192o);
            }
            if ((this.f33191i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33193p);
            }
            if ((this.f33191i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f33194q.getNumber());
            }
            if ((this.f33191i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f33195r);
            }
            if ((this.f33191i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f33196s);
            }
            for (int i10 = 0; i10 < this.f33197t.size(); i10++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33197t.get(i10));
            }
            for (int i11 = 0; i11 < this.f33198u.size(); i11++) {
                codedOutputStream.writeMessage(7, (MessageLite) this.f33198u.get(i11));
            }
            codedOutputStream.writeRawBytes(this.f33190e);
        }

        public static Builder newBuilder(Expression expression) {
            return newBuilder().mergeFrom(expression);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Expression getDefaultInstanceForType() {
            return f33189x;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Expression(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33199v = (byte) -1;
            this.f33200w = -1;
            this.f33190e = builder.getUnknownFields();
        }

        private Expression(boolean z10) {
            this.f33199v = (byte) -1;
            this.f33200w = -1;
            this.f33190e = ByteString.EMPTY;
        }

        private Expression(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33199v = (byte) -1;
            this.f33200w = -1;
            s();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33191i |= 1;
                                this.f33192o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33191i |= 2;
                                this.f33193p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                ConstantValue valueOf = ConstantValue.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33191i |= 4;
                                    this.f33194q = valueOf;
                                }
                            } else if (readTag == 34) {
                                Type.Builder builder = (this.f33191i & 8) == 8 ? this.f33195r.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.f33195r = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.f33195r = builder.buildPartial();
                                }
                                this.f33191i |= 8;
                            } else if (readTag == 40) {
                                this.f33191i |= 16;
                                this.f33196s = codedInputStream.readInt32();
                            } else if (readTag == 50) {
                                if (!(z11 & true)) {
                                    this.f33197t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33197t.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            } else if (readTag != 58) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33198u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33198u.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33197t = Collections.unmodifiableList(this.f33197t);
                        }
                        if (z11 & true) {
                            this.f33198u = Collections.unmodifiableList(this.f33198u);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33190e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33190e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11 & true) {
                this.f33197t = Collections.unmodifiableList(this.f33197t);
            }
            if (z11 & true) {
                this.f33198u = Collections.unmodifiableList(this.f33198u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33190e = newOutput.toByteString();
                throw th4;
            }
            this.f33190e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ExpressionOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Function extends GeneratedMessageLite.ExtendableMessage<Function> implements FunctionOrBuilder {
        private static final Function H;
        public static Parser<Function> PARSER = new a();
        private List A;
        private TypeTable B;
        private List C;
        private Contract D;
        private List E;
        private byte F;
        private int G;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33212i;

        /* renamed from: o  reason: collision with root package name */
        private int f33213o;

        /* renamed from: p  reason: collision with root package name */
        private int f33214p;

        /* renamed from: q  reason: collision with root package name */
        private int f33215q;

        /* renamed from: r  reason: collision with root package name */
        private int f33216r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33217s;

        /* renamed from: t  reason: collision with root package name */
        private int f33218t;

        /* renamed from: u  reason: collision with root package name */
        private List f33219u;

        /* renamed from: v  reason: collision with root package name */
        private Type f33220v;

        /* renamed from: w  reason: collision with root package name */
        private int f33221w;

        /* renamed from: x  reason: collision with root package name */
        private List f33222x;

        /* renamed from: y  reason: collision with root package name */
        private List f33223y;

        /* renamed from: z  reason: collision with root package name */
        private int f33224z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Function, Builder> implements FunctionOrBuilder {
            private TypeTable A;
            private List B;
            private Contract C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f33225o;

            /* renamed from: r  reason: collision with root package name */
            private int f33228r;

            /* renamed from: t  reason: collision with root package name */
            private int f33230t;

            /* renamed from: u  reason: collision with root package name */
            private List f33231u;

            /* renamed from: v  reason: collision with root package name */
            private Type f33232v;

            /* renamed from: w  reason: collision with root package name */
            private int f33233w;

            /* renamed from: x  reason: collision with root package name */
            private List f33234x;

            /* renamed from: y  reason: collision with root package name */
            private List f33235y;

            /* renamed from: z  reason: collision with root package name */
            private List f33236z;

            /* renamed from: p  reason: collision with root package name */
            private int f33226p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33227q = 6;

            /* renamed from: s  reason: collision with root package name */
            private Type f33229s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33231u = list;
                this.f33232v = Type.getDefaultInstance();
                this.f33234x = list;
                this.f33235y = list;
                this.f33236z = list;
                this.A = TypeTable.getDefaultInstance();
                this.B = list;
                this.C = Contract.getDefaultInstance();
                this.D = list;
                q();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33225o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33225o |= 16384;
                }
            }

            private void k() {
                if ((this.f33225o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33235y = new ArrayList(this.f33235y);
                    this.f33225o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33225o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33234x = new ArrayList(this.f33234x);
                    this.f33225o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33225o & 32) != 32) {
                    this.f33231u = new ArrayList(this.f33231u);
                    this.f33225o |= 32;
                }
            }

            private void n() {
                if ((this.f33225o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f33236z = new ArrayList(this.f33236z);
                    this.f33225o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void o() {
                if ((this.f33225o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f33225o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            private void q() {
            }

            public Function buildPartial() {
                Function function = new Function(this);
                int i10 = this.f33225o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                function.f33214p = this.f33226p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                function.f33215q = this.f33227q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                function.f33216r = this.f33228r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                function.f33217s = this.f33229s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                function.f33218t = this.f33230t;
                if ((this.f33225o & 32) == 32) {
                    this.f33231u = Collections.unmodifiableList(this.f33231u);
                    this.f33225o &= -33;
                }
                function.f33219u = this.f33231u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                function.f33220v = this.f33232v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                function.f33221w = this.f33233w;
                if ((this.f33225o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33234x = Collections.unmodifiableList(this.f33234x);
                    this.f33225o &= -257;
                }
                function.f33222x = this.f33234x;
                if ((this.f33225o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33235y = Collections.unmodifiableList(this.f33235y);
                    this.f33225o &= -513;
                }
                function.f33223y = this.f33235y;
                if ((this.f33225o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f33236z = Collections.unmodifiableList(this.f33236z);
                    this.f33225o &= -1025;
                }
                function.A = this.f33236z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                function.B = this.A;
                if ((this.f33225o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f33225o &= -4097;
                }
                function.C = this.B;
                if ((i10 & 8192) == 8192) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                function.D = this.C;
                if ((this.f33225o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33225o &= -16385;
                }
                function.E = this.D;
                function.f33213o = i11;
                return function;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33234x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33234x.size();
            }

            public Contract getContract() {
                return this.C;
            }

            public Type getReceiverType() {
                return this.f33232v;
            }

            public Type getReturnType() {
                return this.f33229s;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33231u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33231u.size();
            }

            public TypeTable getTypeTable() {
                return this.A;
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f33236z.get(i10);
            }

            public int getValueParameterCount() {
                return this.f33236z.size();
            }

            public boolean hasContract() {
                if ((this.f33225o & 8192) == 8192) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f33225o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f33225o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f33225o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f33225o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                if (hasReturnType() && !getReturnType().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getValueParameterCount(); i12++) {
                    if (!getValueParameter(i12).isInitialized()) {
                        return false;
                    }
                }
                if (hasTypeTable() && !getTypeTable().isInitialized()) {
                    return false;
                }
                if (hasContract() && !getContract().isInitialized()) {
                    return false;
                }
                for (int i13 = 0; i13 < getCompilerPluginDataCount(); i13++) {
                    if (!getCompilerPluginData(i13).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeContract(Contract contract) {
                if ((this.f33225o & 8192) == 8192 && this.C != Contract.getDefaultInstance()) {
                    this.C = Contract.newBuilder(this.C).mergeFrom(contract).buildPartial();
                } else {
                    this.C = contract;
                }
                this.f33225o |= 8192;
                return this;
            }

            public Builder mergeReceiverType(Type type) {
                if ((this.f33225o & 64) == 64 && this.f33232v != Type.getDefaultInstance()) {
                    this.f33232v = Type.newBuilder(this.f33232v).mergeFrom(type).buildPartial();
                } else {
                    this.f33232v = type;
                }
                this.f33225o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f33225o & 8) == 8 && this.f33229s != Type.getDefaultInstance()) {
                    this.f33229s = Type.newBuilder(this.f33229s).mergeFrom(type).buildPartial();
                } else {
                    this.f33229s = type;
                }
                this.f33225o |= 8;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33225o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != TypeTable.getDefaultInstance()) {
                    this.A = TypeTable.newBuilder(this.A).mergeFrom(typeTable).buildPartial();
                } else {
                    this.A = typeTable;
                }
                this.f33225o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33225o |= 1;
                this.f33226p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33225o |= 4;
                this.f33228r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f33225o |= 2;
                this.f33227q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f33225o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33233w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f33225o |= 16;
                this.f33230t = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Function build() {
                Function buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Function getDefaultInstanceForType() {
                return Function.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Function function) {
                if (function == Function.getDefaultInstance()) {
                    return this;
                }
                if (function.hasFlags()) {
                    setFlags(function.getFlags());
                }
                if (function.hasOldFlags()) {
                    setOldFlags(function.getOldFlags());
                }
                if (function.hasName()) {
                    setName(function.getName());
                }
                if (function.hasReturnType()) {
                    mergeReturnType(function.getReturnType());
                }
                if (function.hasReturnTypeId()) {
                    setReturnTypeId(function.getReturnTypeId());
                }
                if (!function.f33219u.isEmpty()) {
                    if (this.f33231u.isEmpty()) {
                        this.f33231u = function.f33219u;
                        this.f33225o &= -33;
                    } else {
                        m();
                        this.f33231u.addAll(function.f33219u);
                    }
                }
                if (function.hasReceiverType()) {
                    mergeReceiverType(function.getReceiverType());
                }
                if (function.hasReceiverTypeId()) {
                    setReceiverTypeId(function.getReceiverTypeId());
                }
                if (!function.f33222x.isEmpty()) {
                    if (this.f33234x.isEmpty()) {
                        this.f33234x = function.f33222x;
                        this.f33225o &= -257;
                    } else {
                        l();
                        this.f33234x.addAll(function.f33222x);
                    }
                }
                if (!function.f33223y.isEmpty()) {
                    if (this.f33235y.isEmpty()) {
                        this.f33235y = function.f33223y;
                        this.f33225o &= -513;
                    } else {
                        k();
                        this.f33235y.addAll(function.f33223y);
                    }
                }
                if (!function.A.isEmpty()) {
                    if (this.f33236z.isEmpty()) {
                        this.f33236z = function.A;
                        this.f33225o &= -1025;
                    } else {
                        n();
                        this.f33236z.addAll(function.A);
                    }
                }
                if (function.hasTypeTable()) {
                    mergeTypeTable(function.getTypeTable());
                }
                if (!function.C.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = function.C;
                        this.f33225o &= -4097;
                    } else {
                        o();
                        this.B.addAll(function.C);
                    }
                }
                if (function.hasContract()) {
                    mergeContract(function.getContract());
                }
                if (!function.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = function.E;
                        this.f33225o &= -16385;
                    } else {
                        j();
                        this.D.addAll(function.E);
                    }
                }
                f(function);
                setUnknownFields(getUnknownFields().concat(function.f33212i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Function.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Function$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Function parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Function(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Function function = new Function(true);
            H = function;
            function.J();
        }

        private void J() {
            this.f33214p = 6;
            this.f33215q = 6;
            this.f33216r = 0;
            this.f33217s = Type.getDefaultInstance();
            this.f33218t = 0;
            List list = Collections.EMPTY_LIST;
            this.f33219u = list;
            this.f33220v = Type.getDefaultInstance();
            this.f33221w = 0;
            this.f33222x = list;
            this.f33223y = list;
            this.A = list;
            this.B = TypeTable.getDefaultInstance();
            this.C = list;
            this.D = Contract.getDefaultInstance();
            this.E = list;
        }

        public static Function getDefaultInstance() {
            return H;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        public static Function parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.E.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.E.size();
        }

        public Type getContextReceiverType(int i10) {
            return (Type) this.f33222x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33222x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33223y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33222x;
        }

        public Contract getContract() {
            return this.D;
        }

        public int getFlags() {
            return this.f33214p;
        }

        public int getName() {
            return this.f33216r;
        }

        public int getOldFlags() {
            return this.f33215q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Function> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f33220v;
        }

        public int getReceiverTypeId() {
            return this.f33221w;
        }

        public Type getReturnType() {
            return this.f33217s;
        }

        public int getReturnTypeId() {
            return this.f33218t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33213o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33215q);
            } else {
                i10 = 0;
            }
            if ((this.f33213o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33216r);
            }
            if ((this.f33213o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33217s);
            }
            for (int i12 = 0; i12 < this.f33219u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33219u.get(i12));
            }
            if ((this.f33213o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33220v);
            }
            for (int i13 = 0; i13 < this.A.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.A.get(i13));
            }
            if ((this.f33213o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f33218t);
            }
            if ((this.f33213o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f33221w);
            }
            if ((this.f33213o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33214p);
            }
            for (int i14 = 0; i14 < this.f33222x.size(); i14++) {
                i10 += CodedOutputStream.computeMessageSize(10, (MessageLite) this.f33222x.get(i14));
            }
            int i15 = 0;
            for (int i16 = 0; i16 < this.f33223y.size(); i16++) {
                i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33223y.get(i16)).intValue());
            }
            int i17 = i10 + i15;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
            }
            this.f33224z = i15;
            if ((this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i17 += CodedOutputStream.computeMessageSize(30, this.B);
            }
            int i18 = 0;
            for (int i19 = 0; i19 < this.C.size(); i19++) {
                i18 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.C.get(i19)).intValue());
            }
            int size = i17 + i18 + (getVersionRequirementList().size() * 2);
            if ((this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                size += CodedOutputStream.computeMessageSize(32, this.D);
            }
            for (int i20 = 0; i20 < this.E.size(); i20++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.E.get(i20));
            }
            int j10 = size + j() + this.f33212i.size();
            this.G = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f33219u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33219u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33219u;
        }

        public TypeTable getTypeTable() {
            return this.B;
        }

        public ValueParameter getValueParameter(int i10) {
            return (ValueParameter) this.A.get(i10);
        }

        public int getValueParameterCount() {
            return this.A.size();
        }

        public List<ValueParameter> getValueParameterList() {
            return this.A;
        }

        public List<Integer> getVersionRequirementList() {
            return this.C;
        }

        public boolean hasContract() {
            if ((this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33213o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33213o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f33213o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f33213o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f33213o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f33213o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f33213o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.F;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.F = (byte) 0;
                return false;
            } else if (hasReturnType() && !getReturnType().isInitialized()) {
                this.F = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getValueParameterCount(); i12++) {
                    if (!getValueParameter(i12).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasTypeTable() && !getTypeTable().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                } else if (hasContract() && !getContract().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                } else {
                    for (int i13 = 0; i13 < getCompilerPluginDataCount(); i13++) {
                        if (!getCompilerPluginData(i13).isInitialized()) {
                            this.F = (byte) 0;
                            return false;
                        }
                    }
                    if (!i()) {
                        this.F = (byte) 0;
                        return false;
                    }
                    this.F = (byte) 1;
                    return true;
                }
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33213o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f33215q);
            }
            if ((this.f33213o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f33216r);
            }
            if ((this.f33213o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f33217s);
            }
            for (int i10 = 0; i10 < this.f33219u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33219u.get(i10));
            }
            if ((this.f33213o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f33220v);
            }
            for (int i11 = 0; i11 < this.A.size(); i11++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.A.get(i11));
            }
            if ((this.f33213o & 16) == 16) {
                codedOutputStream.writeInt32(7, this.f33218t);
            }
            if ((this.f33213o & 64) == 64) {
                codedOutputStream.writeInt32(8, this.f33221w);
            }
            if ((this.f33213o & 1) == 1) {
                codedOutputStream.writeInt32(9, this.f33214p);
            }
            for (int i12 = 0; i12 < this.f33222x.size(); i12++) {
                codedOutputStream.writeMessage(10, (MessageLite) this.f33222x.get(i12));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(90);
                codedOutputStream.writeRawVarint32(this.f33224z);
            }
            for (int i13 = 0; i13 < this.f33223y.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33223y.get(i13)).intValue());
            }
            if ((this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(30, this.B);
            }
            for (int i14 = 0; i14 < this.C.size(); i14++) {
                codedOutputStream.writeInt32(31, ((Integer) this.C.get(i14)).intValue());
            }
            if ((this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(32, this.D);
            }
            for (int i15 = 0; i15 < this.E.size(); i15++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.E.get(i15));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33212i);
        }

        public static Builder newBuilder(Function function) {
            return newBuilder().mergeFrom(function);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Function getDefaultInstanceForType() {
            return H;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Function(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33224z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33212i = extendableBuilder.getUnknownFields();
        }

        private Function(boolean z10) {
            this.f33224z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33212i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v0 */
        /* JADX WARN: Type inference failed for: r8v1 */
        /* JADX WARN: Type inference failed for: r8v2, types: [boolean] */
        private Function(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            this.f33224z = -1;
            this.F = (byte) -1;
            this.G = -1;
            J();
            ByteString.Output newOutput = ByteString.newOutput();
            boolean z11 = true;
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z12 = false;
            boolean z13 = false;
            while (true) {
                ?? r82 = 1024;
                if (!z12) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    z10 = z11;
                                    z12 = z10;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 8:
                                    z10 = z11;
                                    this.f33213o |= 2;
                                    this.f33215q = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 16:
                                    z10 = z11;
                                    this.f33213o |= 4;
                                    this.f33216r = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    z10 = z11;
                                    Type.Builder builder = (this.f33213o & 8) == 8 ? this.f33217s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33217s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33217s = builder.buildPartial();
                                    }
                                    this.f33213o |= 8;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    z10 = z11;
                                    boolean z14 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z14) {
                                        this.f33219u = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33219u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 42:
                                    z10 = z11;
                                    Type.Builder builder2 = (this.f33213o & 32) == 32 ? this.f33220v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33220v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f33220v = builder2.buildPartial();
                                    }
                                    this.f33213o |= 32;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 50:
                                    z10 = z11;
                                    boolean z15 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z15) {
                                        this.A = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.A.add(codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    z10 = z11;
                                    this.f33213o |= 16;
                                    this.f33218t = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 64:
                                    z10 = z11;
                                    this.f33213o |= 64;
                                    this.f33221w = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 72:
                                    z10 = z11;
                                    this.f33213o |= 1;
                                    this.f33214p = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 82:
                                    z10 = z11;
                                    boolean z16 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z16) {
                                        this.f33222x = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33222x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 88:
                                    z10 = z11;
                                    boolean z17 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z17) {
                                        this.f33223y = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33223y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 90:
                                    z10 = z11;
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z18 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z18) {
                                        z13 = z13;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.f33223y = new ArrayList();
                                            z13 = (z13 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33223y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 242:
                                    z10 = z11;
                                    TypeTable.Builder builder3 = (this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.B.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.B = typeTable;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(typeTable);
                                        this.B = builder3.buildPartial();
                                    }
                                    this.f33213o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 248:
                                    z10 = z11;
                                    boolean z19 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z19) {
                                        this.C = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.C.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z20 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z20) {
                                        z13 = z13;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.C = new ArrayList();
                                            z13 = (z13 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.C.add(Integer.valueOf(codedInputStream.readInt32()));
                                        z11 = z11;
                                    }
                                    z10 = z11;
                                    codedInputStream.popLimit(pushLimit2);
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 258:
                                    Contract.Builder builder4 = (this.f33213o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.D.toBuilder() : null;
                                    Contract contract = (Contract) codedInputStream.readMessage(Contract.PARSER, extensionRegistryLite);
                                    this.D = contract;
                                    if (builder4 != null) {
                                        builder4.mergeFrom(contract);
                                        this.D = builder4.buildPartial();
                                    }
                                    this.f33213o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    z13 = z13;
                                    break;
                                case 266:
                                    boolean z21 = (z13 ? 1 : 0) & true;
                                    boolean z22 = z13;
                                    if (!z21) {
                                        this.E = new ArrayList();
                                        z22 = (z13 ? 1 : 0) | true;
                                    }
                                    this.E.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                    z13 = z22;
                                    break;
                                default:
                                    r82 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                    z13 = z13;
                                    if (r82 == 0) {
                                        z12 = z11;
                                        z10 = z12;
                                        continue;
                                        z11 = z10;
                                        z13 = z13;
                                    }
                                    break;
                            }
                            z10 = z11;
                            z11 = z10;
                            z13 = z13;
                        } catch (Throwable th2) {
                            if ((z13 ? 1 : 0) & true) {
                                this.f33219u = Collections.unmodifiableList(this.f33219u);
                            }
                            if (((z13 ? 1 : 0) & true) == r82) {
                                this.A = Collections.unmodifiableList(this.A);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f33222x = Collections.unmodifiableList(this.f33222x);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f33223y = Collections.unmodifiableList(this.f33223y);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.C = Collections.unmodifiableList(this.C);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.E = Collections.unmodifiableList(this.E);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33212i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33212i = newOutput.toByteString();
                            e();
                            throw th2;
                        }
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } else {
                    if ((z13 ? 1 : 0) & true) {
                        this.f33219u = Collections.unmodifiableList(this.f33219u);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.A = Collections.unmodifiableList(this.A);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f33222x = Collections.unmodifiableList(this.f33222x);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f33223y = Collections.unmodifiableList(this.f33223y);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.C = Collections.unmodifiableList(this.C);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.E = Collections.unmodifiableList(this.E);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f33212i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33212i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface FunctionOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum MemberKind implements Internal.EnumLite {
        DECLARATION(0, 0),
        FAKE_OVERRIDE(1, 1),
        DELEGATION(2, 2),
        SYNTHESIZED(3, 3);
        

        /* renamed from: e  reason: collision with root package name */
        private static Internal.EnumLiteMap f33237e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33239d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a implements Internal.EnumLiteMap {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
            /* renamed from: a */
            public MemberKind findValueByNumber(int i10) {
                return MemberKind.valueOf(i10);
            }
        }

        MemberKind(int i10, int i11) {
            this.f33239d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33239d;
        }

        public static MemberKind valueOf(int i10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return null;
                        }
                        return SYNTHESIZED;
                    }
                    return DELEGATION;
                }
                return FAKE_OVERRIDE;
            }
            return DECLARATION;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum Modality implements Internal.EnumLite {
        FINAL(0, 0),
        OPEN(1, 1),
        ABSTRACT(2, 2),
        SEALED(3, 3);
        

        /* renamed from: e  reason: collision with root package name */
        private static Internal.EnumLiteMap f33240e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33242d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a implements Internal.EnumLiteMap {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
            /* renamed from: a */
            public Modality findValueByNumber(int i10) {
                return Modality.valueOf(i10);
            }
        }

        Modality(int i10, int i11) {
            this.f33242d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33242d;
        }

        public static Modality valueOf(int i10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            return null;
                        }
                        return SEALED;
                    }
                    return ABSTRACT;
                }
                return OPEN;
            }
            return FINAL;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Package extends GeneratedMessageLite.ExtendableMessage<Package> implements PackageOrBuilder {
        public static Parser<Package> PARSER = new a();

        /* renamed from: w  reason: collision with root package name */
        private static final Package f33243w;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33244i;

        /* renamed from: o  reason: collision with root package name */
        private int f33245o;

        /* renamed from: p  reason: collision with root package name */
        private List f33246p;

        /* renamed from: q  reason: collision with root package name */
        private List f33247q;

        /* renamed from: r  reason: collision with root package name */
        private List f33248r;

        /* renamed from: s  reason: collision with root package name */
        private TypeTable f33249s;

        /* renamed from: t  reason: collision with root package name */
        private VersionRequirementTable f33250t;

        /* renamed from: u  reason: collision with root package name */
        private byte f33251u;

        /* renamed from: v  reason: collision with root package name */
        private int f33252v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Package, Builder> implements PackageOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33253o;

            /* renamed from: p  reason: collision with root package name */
            private List f33254p;

            /* renamed from: q  reason: collision with root package name */
            private List f33255q;

            /* renamed from: r  reason: collision with root package name */
            private List f33256r;

            /* renamed from: s  reason: collision with root package name */
            private TypeTable f33257s;

            /* renamed from: t  reason: collision with root package name */
            private VersionRequirementTable f33258t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33254p = list;
                this.f33255q = list;
                this.f33256r = list;
                this.f33257s = TypeTable.getDefaultInstance();
                this.f33258t = VersionRequirementTable.getDefaultInstance();
                m();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33253o & 1) != 1) {
                    this.f33254p = new ArrayList(this.f33254p);
                    this.f33253o |= 1;
                }
            }

            private void k() {
                if ((this.f33253o & 2) != 2) {
                    this.f33255q = new ArrayList(this.f33255q);
                    this.f33253o |= 2;
                }
            }

            private void l() {
                if ((this.f33253o & 4) != 4) {
                    this.f33256r = new ArrayList(this.f33256r);
                    this.f33253o |= 4;
                }
            }

            private void m() {
            }

            public Package buildPartial() {
                Package r02 = new Package(this);
                int i10 = this.f33253o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f33254p = Collections.unmodifiableList(this.f33254p);
                    this.f33253o &= -2;
                }
                r02.f33246p = this.f33254p;
                if ((this.f33253o & 2) == 2) {
                    this.f33255q = Collections.unmodifiableList(this.f33255q);
                    this.f33253o &= -3;
                }
                r02.f33247q = this.f33255q;
                if ((this.f33253o & 4) == 4) {
                    this.f33256r = Collections.unmodifiableList(this.f33256r);
                    this.f33253o &= -5;
                }
                r02.f33248r = this.f33256r;
                if ((i10 & 8) != 8) {
                    i11 = 0;
                }
                r02.f33249s = this.f33257s;
                if ((i10 & 16) == 16) {
                    i11 |= 2;
                }
                r02.f33250t = this.f33258t;
                r02.f33245o = i11;
                return r02;
            }

            public Function getFunction(int i10) {
                return (Function) this.f33254p.get(i10);
            }

            public int getFunctionCount() {
                return this.f33254p.size();
            }

            public Property getProperty(int i10) {
                return (Property) this.f33255q.get(i10);
            }

            public int getPropertyCount() {
                return this.f33255q.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.f33256r.get(i10);
            }

            public int getTypeAliasCount() {
                return this.f33256r.size();
            }

            public TypeTable getTypeTable() {
                return this.f33257s;
            }

            public boolean hasTypeTable() {
                if ((this.f33253o & 8) == 8) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getFunctionCount(); i10++) {
                    if (!getFunction(i10).isInitialized()) {
                        return false;
                    }
                }
                for (int i11 = 0; i11 < getPropertyCount(); i11++) {
                    if (!getProperty(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getTypeAliasCount(); i12++) {
                    if (!getTypeAlias(i12).isInitialized()) {
                        return false;
                    }
                }
                if ((hasTypeTable() && !getTypeTable().isInitialized()) || !e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33253o & 8) == 8 && this.f33257s != TypeTable.getDefaultInstance()) {
                    this.f33257s = TypeTable.newBuilder(this.f33257s).mergeFrom(typeTable).buildPartial();
                } else {
                    this.f33257s = typeTable;
                }
                this.f33253o |= 8;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f33253o & 16) == 16 && this.f33258t != VersionRequirementTable.getDefaultInstance()) {
                    this.f33258t = VersionRequirementTable.newBuilder(this.f33258t).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.f33258t = versionRequirementTable;
                }
                this.f33253o |= 16;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Package build() {
                Package buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Package getDefaultInstanceForType() {
                return Package.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Package r32) {
                if (r32 == Package.getDefaultInstance()) {
                    return this;
                }
                if (!r32.f33246p.isEmpty()) {
                    if (this.f33254p.isEmpty()) {
                        this.f33254p = r32.f33246p;
                        this.f33253o &= -2;
                    } else {
                        j();
                        this.f33254p.addAll(r32.f33246p);
                    }
                }
                if (!r32.f33247q.isEmpty()) {
                    if (this.f33255q.isEmpty()) {
                        this.f33255q = r32.f33247q;
                        this.f33253o &= -3;
                    } else {
                        k();
                        this.f33255q.addAll(r32.f33247q);
                    }
                }
                if (!r32.f33248r.isEmpty()) {
                    if (this.f33256r.isEmpty()) {
                        this.f33256r = r32.f33248r;
                        this.f33253o &= -5;
                    } else {
                        l();
                        this.f33256r.addAll(r32.f33248r);
                    }
                }
                if (r32.hasTypeTable()) {
                    mergeTypeTable(r32.getTypeTable());
                }
                if (r32.hasVersionRequirementTable()) {
                    mergeVersionRequirementTable(r32.getVersionRequirementTable());
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f33244i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Package.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Package$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Package parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Package(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Package r02 = new Package(true);
            f33243w = r02;
            r02.w();
        }

        public static Package getDefaultInstance() {
            return f33243w;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        public static Package parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void w() {
            List list = Collections.EMPTY_LIST;
            this.f33246p = list;
            this.f33247q = list;
            this.f33248r = list;
            this.f33249s = TypeTable.getDefaultInstance();
            this.f33250t = VersionRequirementTable.getDefaultInstance();
        }

        public Function getFunction(int i10) {
            return (Function) this.f33246p.get(i10);
        }

        public int getFunctionCount() {
            return this.f33246p.size();
        }

        public List<Function> getFunctionList() {
            return this.f33246p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Package> getParserForType() {
            return PARSER;
        }

        public Property getProperty(int i10) {
            return (Property) this.f33247q.get(i10);
        }

        public int getPropertyCount() {
            return this.f33247q.size();
        }

        public List<Property> getPropertyList() {
            return this.f33247q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33252v;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33246p.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f33246p.get(i12));
            }
            for (int i13 = 0; i13 < this.f33247q.size(); i13++) {
                i11 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33247q.get(i13));
            }
            for (int i14 = 0; i14 < this.f33248r.size(); i14++) {
                i11 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33248r.get(i14));
            }
            if ((this.f33245o & 1) == 1) {
                i11 += CodedOutputStream.computeMessageSize(30, this.f33249s);
            }
            if ((this.f33245o & 2) == 2) {
                i11 += CodedOutputStream.computeMessageSize(32, this.f33250t);
            }
            int j10 = i11 + j() + this.f33244i.size();
            this.f33252v = j10;
            return j10;
        }

        public TypeAlias getTypeAlias(int i10) {
            return (TypeAlias) this.f33248r.get(i10);
        }

        public int getTypeAliasCount() {
            return this.f33248r.size();
        }

        public List<TypeAlias> getTypeAliasList() {
            return this.f33248r;
        }

        public TypeTable getTypeTable() {
            return this.f33249s;
        }

        public VersionRequirementTable getVersionRequirementTable() {
            return this.f33250t;
        }

        public boolean hasTypeTable() {
            if ((this.f33245o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f33245o & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33251u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getFunctionCount(); i10++) {
                if (!getFunction(i10).isInitialized()) {
                    this.f33251u = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getPropertyCount(); i11++) {
                if (!getProperty(i11).isInitialized()) {
                    this.f33251u = (byte) 0;
                    return false;
                }
            }
            for (int i12 = 0; i12 < getTypeAliasCount(); i12++) {
                if (!getTypeAlias(i12).isInitialized()) {
                    this.f33251u = (byte) 0;
                    return false;
                }
            }
            if (hasTypeTable() && !getTypeTable().isInitialized()) {
                this.f33251u = (byte) 0;
                return false;
            } else if (!i()) {
                this.f33251u = (byte) 0;
                return false;
            } else {
                this.f33251u = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            for (int i10 = 0; i10 < this.f33246p.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f33246p.get(i10));
            }
            for (int i11 = 0; i11 < this.f33247q.size(); i11++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33247q.get(i11));
            }
            for (int i12 = 0; i12 < this.f33248r.size(); i12++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33248r.get(i12));
            }
            if ((this.f33245o & 1) == 1) {
                codedOutputStream.writeMessage(30, this.f33249s);
            }
            if ((this.f33245o & 2) == 2) {
                codedOutputStream.writeMessage(32, this.f33250t);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33244i);
        }

        public static Builder newBuilder(Package r12) {
            return newBuilder().mergeFrom(r12);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Package getDefaultInstanceForType() {
            return f33243w;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Package(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33251u = (byte) -1;
            this.f33252v = -1;
            this.f33244i = extendableBuilder.getUnknownFields();
        }

        private Package(boolean z10) {
            this.f33251u = (byte) -1;
            this.f33252v = -1;
            this.f33244i = ByteString.EMPTY;
        }

        private Package(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33251u = (byte) -1;
            this.f33252v = -1;
            w();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 26) {
                                boolean z12 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z12) {
                                    this.f33246p = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33246p.add(codedInputStream.readMessage(Function.PARSER, extensionRegistryLite));
                            } else if (readTag == 34) {
                                boolean z13 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z13) {
                                    this.f33247q = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33247q.add(codedInputStream.readMessage(Property.PARSER, extensionRegistryLite));
                            } else if (readTag != 42) {
                                if (readTag == 242) {
                                    TypeTable.Builder builder = (this.f33245o & 1) == 1 ? this.f33249s.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.f33249s = typeTable;
                                    if (builder != null) {
                                        builder.mergeFrom(typeTable);
                                        this.f33249s = builder.buildPartial();
                                    }
                                    this.f33245o |= 1;
                                } else if (readTag != 258) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    VersionRequirementTable.Builder builder2 = (this.f33245o & 2) == 2 ? this.f33250t.toBuilder() : null;
                                    VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                    this.f33250t = versionRequirementTable;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(versionRequirementTable);
                                        this.f33250t = builder2.buildPartial();
                                    }
                                    this.f33245o |= 2;
                                }
                            } else {
                                boolean z14 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z14) {
                                    this.f33248r = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33248r.add(codedInputStream.readMessage(TypeAlias.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f33246p = Collections.unmodifiableList(this.f33246p);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33247q = Collections.unmodifiableList(this.f33247q);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33248r = Collections.unmodifiableList(this.f33248r);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33244i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33244i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33246p = Collections.unmodifiableList(this.f33246p);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33247q = Collections.unmodifiableList(this.f33247q);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33248r = Collections.unmodifiableList(this.f33248r);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33244i = newOutput.toByteString();
                throw th4;
            }
            this.f33244i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class PackageFragment extends GeneratedMessageLite.ExtendableMessage<PackageFragment> implements PackageFragmentOrBuilder {
        public static Parser<PackageFragment> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final PackageFragment f33259v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33260i;

        /* renamed from: o  reason: collision with root package name */
        private int f33261o;

        /* renamed from: p  reason: collision with root package name */
        private StringTable f33262p;

        /* renamed from: q  reason: collision with root package name */
        private QualifiedNameTable f33263q;

        /* renamed from: r  reason: collision with root package name */
        private Package f33264r;

        /* renamed from: s  reason: collision with root package name */
        private List f33265s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33266t;

        /* renamed from: u  reason: collision with root package name */
        private int f33267u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<PackageFragment, Builder> implements PackageFragmentOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33268o;

            /* renamed from: p  reason: collision with root package name */
            private StringTable f33269p = StringTable.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private QualifiedNameTable f33270q = QualifiedNameTable.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private Package f33271r = Package.getDefaultInstance();

            /* renamed from: s  reason: collision with root package name */
            private List f33272s = Collections.EMPTY_LIST;

            private Builder() {
                k();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33268o & 8) != 8) {
                    this.f33272s = new ArrayList(this.f33272s);
                    this.f33268o |= 8;
                }
            }

            private void k() {
            }

            public PackageFragment buildPartial() {
                PackageFragment packageFragment = new PackageFragment(this);
                int i10 = this.f33268o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                packageFragment.f33262p = this.f33269p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                packageFragment.f33263q = this.f33270q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                packageFragment.f33264r = this.f33271r;
                if ((this.f33268o & 8) == 8) {
                    this.f33272s = Collections.unmodifiableList(this.f33272s);
                    this.f33268o &= -9;
                }
                packageFragment.f33265s = this.f33272s;
                packageFragment.f33261o = i11;
                return packageFragment;
            }

            public Class getClass_(int i10) {
                return (Class) this.f33272s.get(i10);
            }

            public int getClass_Count() {
                return this.f33272s.size();
            }

            public Package getPackage() {
                return this.f33271r;
            }

            public QualifiedNameTable getQualifiedNames() {
                return this.f33270q;
            }

            public boolean hasPackage() {
                if ((this.f33268o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasQualifiedNames() {
                if ((this.f33268o & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (hasQualifiedNames() && !getQualifiedNames().isInitialized()) {
                    return false;
                }
                if (hasPackage() && !getPackage().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getClass_Count(); i10++) {
                    if (!getClass_(i10).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergePackage(Package r42) {
                if ((this.f33268o & 4) == 4 && this.f33271r != Package.getDefaultInstance()) {
                    this.f33271r = Package.newBuilder(this.f33271r).mergeFrom(r42).buildPartial();
                } else {
                    this.f33271r = r42;
                }
                this.f33268o |= 4;
                return this;
            }

            public Builder mergeQualifiedNames(QualifiedNameTable qualifiedNameTable) {
                if ((this.f33268o & 2) == 2 && this.f33270q != QualifiedNameTable.getDefaultInstance()) {
                    this.f33270q = QualifiedNameTable.newBuilder(this.f33270q).mergeFrom(qualifiedNameTable).buildPartial();
                } else {
                    this.f33270q = qualifiedNameTable;
                }
                this.f33268o |= 2;
                return this;
            }

            public Builder mergeStrings(StringTable stringTable) {
                if ((this.f33268o & 1) == 1 && this.f33269p != StringTable.getDefaultInstance()) {
                    this.f33269p = StringTable.newBuilder(this.f33269p).mergeFrom(stringTable).buildPartial();
                } else {
                    this.f33269p = stringTable;
                }
                this.f33268o |= 1;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public PackageFragment build() {
                PackageFragment buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public PackageFragment getDefaultInstanceForType() {
                return PackageFragment.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(PackageFragment packageFragment) {
                if (packageFragment == PackageFragment.getDefaultInstance()) {
                    return this;
                }
                if (packageFragment.hasStrings()) {
                    mergeStrings(packageFragment.getStrings());
                }
                if (packageFragment.hasQualifiedNames()) {
                    mergeQualifiedNames(packageFragment.getQualifiedNames());
                }
                if (packageFragment.hasPackage()) {
                    mergePackage(packageFragment.getPackage());
                }
                if (!packageFragment.f33265s.isEmpty()) {
                    if (this.f33272s.isEmpty()) {
                        this.f33272s = packageFragment.f33265s;
                        this.f33268o &= -9;
                    } else {
                        j();
                        this.f33272s.addAll(packageFragment.f33265s);
                    }
                }
                f(packageFragment);
                setUnknownFields(getUnknownFields().concat(packageFragment.f33260i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.PackageFragment.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$PackageFragment$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public PackageFragment parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new PackageFragment(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            PackageFragment packageFragment = new PackageFragment(true);
            f33259v = packageFragment;
            packageFragment.t();
        }

        public static PackageFragment getDefaultInstance() {
            return f33259v;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        public static PackageFragment parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void t() {
            this.f33262p = StringTable.getDefaultInstance();
            this.f33263q = QualifiedNameTable.getDefaultInstance();
            this.f33264r = Package.getDefaultInstance();
            this.f33265s = Collections.EMPTY_LIST;
        }

        public Class getClass_(int i10) {
            return (Class) this.f33265s.get(i10);
        }

        public int getClass_Count() {
            return this.f33265s.size();
        }

        public List<Class> getClass_List() {
            return this.f33265s;
        }

        public Package getPackage() {
            return this.f33264r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<PackageFragment> getParserForType() {
            return PARSER;
        }

        public QualifiedNameTable getQualifiedNames() {
            return this.f33263q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33267u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33261o & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f33262p);
            } else {
                i10 = 0;
            }
            if ((this.f33261o & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f33263q);
            }
            if ((this.f33261o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33264r);
            }
            for (int i12 = 0; i12 < this.f33265s.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33265s.get(i12));
            }
            int j10 = i10 + j() + this.f33260i.size();
            this.f33267u = j10;
            return j10;
        }

        public StringTable getStrings() {
            return this.f33262p;
        }

        public boolean hasPackage() {
            if ((this.f33261o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasQualifiedNames() {
            if ((this.f33261o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasStrings() {
            if ((this.f33261o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33266t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasQualifiedNames() && !getQualifiedNames().isInitialized()) {
                this.f33266t = (byte) 0;
                return false;
            } else if (hasPackage() && !getPackage().isInitialized()) {
                this.f33266t = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getClass_Count(); i10++) {
                    if (!getClass_(i10).isInitialized()) {
                        this.f33266t = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f33266t = (byte) 0;
                    return false;
                }
                this.f33266t = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33261o & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f33262p);
            }
            if ((this.f33261o & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f33263q);
            }
            if ((this.f33261o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f33264r);
            }
            for (int i10 = 0; i10 < this.f33265s.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33265s.get(i10));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33260i);
        }

        public static Builder newBuilder(PackageFragment packageFragment) {
            return newBuilder().mergeFrom(packageFragment);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public PackageFragment getDefaultInstanceForType() {
            return f33259v;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private PackageFragment(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33266t = (byte) -1;
            this.f33267u = -1;
            this.f33260i = extendableBuilder.getUnknownFields();
        }

        private PackageFragment(boolean z10) {
            this.f33266t = (byte) -1;
            this.f33267u = -1;
            this.f33260i = ByteString.EMPTY;
        }

        private PackageFragment(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33266t = (byte) -1;
            this.f33267u = -1;
            t();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 10) {
                                StringTable.Builder builder = (this.f33261o & 1) == 1 ? this.f33262p.toBuilder() : null;
                                StringTable stringTable = (StringTable) codedInputStream.readMessage(StringTable.PARSER, extensionRegistryLite);
                                this.f33262p = stringTable;
                                if (builder != null) {
                                    builder.mergeFrom(stringTable);
                                    this.f33262p = builder.buildPartial();
                                }
                                this.f33261o |= 1;
                            } else if (readTag == 18) {
                                QualifiedNameTable.Builder builder2 = (this.f33261o & 2) == 2 ? this.f33263q.toBuilder() : null;
                                QualifiedNameTable qualifiedNameTable = (QualifiedNameTable) codedInputStream.readMessage(QualifiedNameTable.PARSER, extensionRegistryLite);
                                this.f33263q = qualifiedNameTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(qualifiedNameTable);
                                    this.f33263q = builder2.buildPartial();
                                }
                                this.f33261o |= 2;
                            } else if (readTag == 26) {
                                Package.Builder builder3 = (this.f33261o & 4) == 4 ? this.f33264r.toBuilder() : null;
                                Package r62 = (Package) codedInputStream.readMessage(Package.PARSER, extensionRegistryLite);
                                this.f33264r = r62;
                                if (builder3 != null) {
                                    builder3.mergeFrom(r62);
                                    this.f33264r = builder3.buildPartial();
                                }
                                this.f33261o |= 4;
                            } else if (readTag != 34) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                boolean z12 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z12) {
                                    this.f33265s = new ArrayList();
                                    z11 = true;
                                }
                                this.f33265s.add(codedInputStream.readMessage(Class.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f33265s = Collections.unmodifiableList(this.f33265s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33260i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33260i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33265s = Collections.unmodifiableList(this.f33265s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33260i = newOutput.toByteString();
                throw th4;
            }
            this.f33260i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface PackageFragmentOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface PackageOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Property extends GeneratedMessageLite.ExtendableMessage<Property> implements PropertyOrBuilder {
        private static final Property H;
        public static Parser<Property> PARSER = new a();
        private ValueParameter A;
        private int B;
        private int C;
        private List D;
        private List E;
        private byte F;
        private int G;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33273i;

        /* renamed from: o  reason: collision with root package name */
        private int f33274o;

        /* renamed from: p  reason: collision with root package name */
        private int f33275p;

        /* renamed from: q  reason: collision with root package name */
        private int f33276q;

        /* renamed from: r  reason: collision with root package name */
        private int f33277r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33278s;

        /* renamed from: t  reason: collision with root package name */
        private int f33279t;

        /* renamed from: u  reason: collision with root package name */
        private List f33280u;

        /* renamed from: v  reason: collision with root package name */
        private Type f33281v;

        /* renamed from: w  reason: collision with root package name */
        private int f33282w;

        /* renamed from: x  reason: collision with root package name */
        private List f33283x;

        /* renamed from: y  reason: collision with root package name */
        private List f33284y;

        /* renamed from: z  reason: collision with root package name */
        private int f33285z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Property, Builder> implements PropertyOrBuilder {
            private int A;
            private int B;
            private List C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f33286o;

            /* renamed from: r  reason: collision with root package name */
            private int f33289r;

            /* renamed from: t  reason: collision with root package name */
            private int f33291t;

            /* renamed from: u  reason: collision with root package name */
            private List f33292u;

            /* renamed from: v  reason: collision with root package name */
            private Type f33293v;

            /* renamed from: w  reason: collision with root package name */
            private int f33294w;

            /* renamed from: x  reason: collision with root package name */
            private List f33295x;

            /* renamed from: y  reason: collision with root package name */
            private List f33296y;

            /* renamed from: z  reason: collision with root package name */
            private ValueParameter f33297z;

            /* renamed from: p  reason: collision with root package name */
            private int f33287p = 518;

            /* renamed from: q  reason: collision with root package name */
            private int f33288q = 2054;

            /* renamed from: s  reason: collision with root package name */
            private Type f33290s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33292u = list;
                this.f33293v = Type.getDefaultInstance();
                this.f33295x = list;
                this.f33296y = list;
                this.f33297z = ValueParameter.getDefaultInstance();
                this.C = list;
                this.D = list;
                o();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33286o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33286o |= 16384;
                }
            }

            private void k() {
                if ((this.f33286o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33296y = new ArrayList(this.f33296y);
                    this.f33286o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33286o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33295x = new ArrayList(this.f33295x);
                    this.f33286o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33286o & 32) != 32) {
                    this.f33292u = new ArrayList(this.f33292u);
                    this.f33286o |= 32;
                }
            }

            private void n() {
                if ((this.f33286o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f33286o |= 8192;
                }
            }

            private void o() {
            }

            public Property buildPartial() {
                Property property = new Property(this);
                int i10 = this.f33286o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                property.f33275p = this.f33287p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                property.f33276q = this.f33288q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                property.f33277r = this.f33289r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                property.f33278s = this.f33290s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                property.f33279t = this.f33291t;
                if ((this.f33286o & 32) == 32) {
                    this.f33292u = Collections.unmodifiableList(this.f33292u);
                    this.f33286o &= -33;
                }
                property.f33280u = this.f33292u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                property.f33281v = this.f33293v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                property.f33282w = this.f33294w;
                if ((this.f33286o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33295x = Collections.unmodifiableList(this.f33295x);
                    this.f33286o &= -257;
                }
                property.f33283x = this.f33295x;
                if ((this.f33286o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33296y = Collections.unmodifiableList(this.f33296y);
                    this.f33286o &= -513;
                }
                property.f33284y = this.f33296y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                property.A = this.f33297z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                property.B = this.A;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                property.C = this.B;
                if ((this.f33286o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f33286o &= -8193;
                }
                property.D = this.C;
                if ((this.f33286o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33286o &= -16385;
                }
                property.E = this.D;
                property.f33274o = i11;
                return property;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33295x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33295x.size();
            }

            public Type getReceiverType() {
                return this.f33293v;
            }

            public Type getReturnType() {
                return this.f33290s;
            }

            public ValueParameter getSetterValueParameter() {
                return this.f33297z;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33292u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33292u.size();
            }

            public boolean hasName() {
                if ((this.f33286o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f33286o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f33286o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasSetterValueParameter() {
                if ((this.f33286o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                if (hasReturnType() && !getReturnType().isInitialized()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        return false;
                    }
                }
                if (hasSetterValueParameter() && !getSetterValueParameter().isInitialized()) {
                    return false;
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeReceiverType(Type type) {
                if ((this.f33286o & 64) == 64 && this.f33293v != Type.getDefaultInstance()) {
                    this.f33293v = Type.newBuilder(this.f33293v).mergeFrom(type).buildPartial();
                } else {
                    this.f33293v = type;
                }
                this.f33286o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f33286o & 8) == 8 && this.f33290s != Type.getDefaultInstance()) {
                    this.f33290s = Type.newBuilder(this.f33290s).mergeFrom(type).buildPartial();
                } else {
                    this.f33290s = type;
                }
                this.f33286o |= 8;
                return this;
            }

            public Builder mergeSetterValueParameter(ValueParameter valueParameter) {
                if ((this.f33286o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 && this.f33297z != ValueParameter.getDefaultInstance()) {
                    this.f33297z = ValueParameter.newBuilder(this.f33297z).mergeFrom(valueParameter).buildPartial();
                } else {
                    this.f33297z = valueParameter;
                }
                this.f33286o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33286o |= 1;
                this.f33287p = i10;
                return this;
            }

            public Builder setGetterFlags(int i10) {
                this.f33286o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                this.A = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33286o |= 4;
                this.f33289r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f33286o |= 2;
                this.f33288q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f33286o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33294w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f33286o |= 16;
                this.f33291t = i10;
                return this;
            }

            public Builder setSetterFlags(int i10) {
                this.f33286o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                this.B = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Property build() {
                Property buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Property getDefaultInstanceForType() {
                return Property.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Property property) {
                if (property == Property.getDefaultInstance()) {
                    return this;
                }
                if (property.hasFlags()) {
                    setFlags(property.getFlags());
                }
                if (property.hasOldFlags()) {
                    setOldFlags(property.getOldFlags());
                }
                if (property.hasName()) {
                    setName(property.getName());
                }
                if (property.hasReturnType()) {
                    mergeReturnType(property.getReturnType());
                }
                if (property.hasReturnTypeId()) {
                    setReturnTypeId(property.getReturnTypeId());
                }
                if (!property.f33280u.isEmpty()) {
                    if (this.f33292u.isEmpty()) {
                        this.f33292u = property.f33280u;
                        this.f33286o &= -33;
                    } else {
                        m();
                        this.f33292u.addAll(property.f33280u);
                    }
                }
                if (property.hasReceiverType()) {
                    mergeReceiverType(property.getReceiverType());
                }
                if (property.hasReceiverTypeId()) {
                    setReceiverTypeId(property.getReceiverTypeId());
                }
                if (!property.f33283x.isEmpty()) {
                    if (this.f33295x.isEmpty()) {
                        this.f33295x = property.f33283x;
                        this.f33286o &= -257;
                    } else {
                        l();
                        this.f33295x.addAll(property.f33283x);
                    }
                }
                if (!property.f33284y.isEmpty()) {
                    if (this.f33296y.isEmpty()) {
                        this.f33296y = property.f33284y;
                        this.f33286o &= -513;
                    } else {
                        k();
                        this.f33296y.addAll(property.f33284y);
                    }
                }
                if (property.hasSetterValueParameter()) {
                    mergeSetterValueParameter(property.getSetterValueParameter());
                }
                if (property.hasGetterFlags()) {
                    setGetterFlags(property.getGetterFlags());
                }
                if (property.hasSetterFlags()) {
                    setSetterFlags(property.getSetterFlags());
                }
                if (!property.D.isEmpty()) {
                    if (this.C.isEmpty()) {
                        this.C = property.D;
                        this.f33286o &= -8193;
                    } else {
                        n();
                        this.C.addAll(property.D);
                    }
                }
                if (!property.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = property.E;
                        this.f33286o &= -16385;
                    } else {
                        j();
                        this.D.addAll(property.E);
                    }
                }
                f(property);
                setUnknownFields(getUnknownFields().concat(property.f33273i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Property.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Property$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Property parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Property(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Property property = new Property(true);
            H = property;
            property.I();
        }

        private void I() {
            this.f33275p = 518;
            this.f33276q = 2054;
            this.f33277r = 0;
            this.f33278s = Type.getDefaultInstance();
            this.f33279t = 0;
            List list = Collections.EMPTY_LIST;
            this.f33280u = list;
            this.f33281v = Type.getDefaultInstance();
            this.f33282w = 0;
            this.f33283x = list;
            this.f33284y = list;
            this.A = ValueParameter.getDefaultInstance();
            this.B = 0;
            this.C = 0;
            this.D = list;
            this.E = list;
        }

        public static Property getDefaultInstance() {
            return H;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.E.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.E.size();
        }

        public Type getContextReceiverType(int i10) {
            return (Type) this.f33283x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33283x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33284y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33283x;
        }

        public int getFlags() {
            return this.f33275p;
        }

        public int getGetterFlags() {
            return this.B;
        }

        public int getName() {
            return this.f33277r;
        }

        public int getOldFlags() {
            return this.f33276q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Property> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f33281v;
        }

        public int getReceiverTypeId() {
            return this.f33282w;
        }

        public Type getReturnType() {
            return this.f33278s;
        }

        public int getReturnTypeId() {
            return this.f33279t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33274o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33276q);
            } else {
                i10 = 0;
            }
            if ((this.f33274o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33277r);
            }
            if ((this.f33274o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33278s);
            }
            for (int i12 = 0; i12 < this.f33280u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33280u.get(i12));
            }
            if ((this.f33274o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33281v);
            }
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeMessageSize(6, this.A);
            }
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeInt32Size(7, this.B);
            }
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(8, this.C);
            }
            if ((this.f33274o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33279t);
            }
            if ((this.f33274o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(10, this.f33282w);
            }
            if ((this.f33274o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f33275p);
            }
            for (int i13 = 0; i13 < this.f33283x.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(12, (MessageLite) this.f33283x.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f33284y.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33284y.get(i15)).intValue());
            }
            int i16 = i10 + i14;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i16 = i16 + 1 + CodedOutputStream.computeInt32SizeNoTag(i14);
            }
            this.f33285z = i14;
            int i17 = 0;
            for (int i18 = 0; i18 < this.D.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.D.get(i18)).intValue());
            }
            int size = i16 + i17 + (getVersionRequirementList().size() * 2);
            for (int i19 = 0; i19 < this.E.size(); i19++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.E.get(i19));
            }
            int j10 = size + j() + this.f33273i.size();
            this.G = j10;
            return j10;
        }

        public int getSetterFlags() {
            return this.C;
        }

        public ValueParameter getSetterValueParameter() {
            return this.A;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f33280u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33280u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33280u;
        }

        public List<Integer> getVersionRequirementList() {
            return this.D;
        }

        public boolean hasFlags() {
            if ((this.f33274o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetterFlags() {
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33274o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f33274o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f33274o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f33274o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f33274o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f33274o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasSetterFlags() {
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasSetterValueParameter() {
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.F;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.F = (byte) 0;
                return false;
            } else if (hasReturnType() && !getReturnType().isInitialized()) {
                this.F = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasReceiverType() && !getReceiverType().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                }
                for (int i11 = 0; i11 < getContextReceiverTypeCount(); i11++) {
                    if (!getContextReceiverType(i11).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (hasSetterValueParameter() && !getSetterValueParameter().isInitialized()) {
                    this.F = (byte) 0;
                    return false;
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        this.F = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.F = (byte) 0;
                    return false;
                }
                this.F = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33274o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f33276q);
            }
            if ((this.f33274o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f33277r);
            }
            if ((this.f33274o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f33278s);
            }
            for (int i10 = 0; i10 < this.f33280u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33280u.get(i10));
            }
            if ((this.f33274o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f33281v);
            }
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(6, this.A);
            }
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeInt32(7, this.B);
            }
            if ((this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(8, this.C);
            }
            if ((this.f33274o & 16) == 16) {
                codedOutputStream.writeInt32(9, this.f33279t);
            }
            if ((this.f33274o & 64) == 64) {
                codedOutputStream.writeInt32(10, this.f33282w);
            }
            if ((this.f33274o & 1) == 1) {
                codedOutputStream.writeInt32(11, this.f33275p);
            }
            for (int i11 = 0; i11 < this.f33283x.size(); i11++) {
                codedOutputStream.writeMessage(12, (MessageLite) this.f33283x.get(i11));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(106);
                codedOutputStream.writeRawVarint32(this.f33285z);
            }
            for (int i12 = 0; i12 < this.f33284y.size(); i12++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33284y.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.D.size(); i13++) {
                codedOutputStream.writeInt32(31, ((Integer) this.D.get(i13)).intValue());
            }
            for (int i14 = 0; i14 < this.E.size(); i14++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.E.get(i14));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33273i);
        }

        public static Builder newBuilder(Property property) {
            return newBuilder().mergeFrom(property);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Property getDefaultInstanceForType() {
            return H;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Property(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33285z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33273i = extendableBuilder.getUnknownFields();
        }

        private Property(boolean z10) {
            this.f33285z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33273i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private Property(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33285z = -1;
            this.F = (byte) -1;
            this.G = -1;
            I();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (true) {
                ?? r52 = 16384;
                if (!z10) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    break;
                                case 8:
                                    this.f33274o |= 2;
                                    this.f33276q = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f33274o |= 4;
                                    this.f33277r = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    Type.Builder builder = (this.f33274o & 8) == 8 ? this.f33278s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33278s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33278s = builder.buildPartial();
                                    }
                                    this.f33274o |= 8;
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    boolean z12 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z12) {
                                        this.f33280u = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33280u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case 42:
                                    Type.Builder builder2 = (this.f33274o & 32) == 32 ? this.f33281v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33281v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f33281v = builder2.buildPartial();
                                    }
                                    this.f33274o |= 32;
                                    continue;
                                case 50:
                                    ValueParameter.Builder builder3 = (this.f33274o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.A.toBuilder() : null;
                                    ValueParameter valueParameter = (ValueParameter) codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite);
                                    this.A = valueParameter;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(valueParameter);
                                        this.A = builder3.buildPartial();
                                    }
                                    this.f33274o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f33274o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    this.B = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f33274o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f33274o |= 16;
                                    this.f33279t = codedInputStream.readInt32();
                                    continue;
                                case 80:
                                    this.f33274o |= 64;
                                    this.f33282w = codedInputStream.readInt32();
                                    continue;
                                case 88:
                                    this.f33274o |= 1;
                                    this.f33275p = codedInputStream.readInt32();
                                    continue;
                                case 98:
                                    boolean z13 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z13) {
                                        this.f33283x = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33283x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                case 104:
                                    boolean z14 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z14) {
                                        this.f33284y = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33284y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case 106:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z15 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z15) {
                                        z11 = z11;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.f33284y = new ArrayList();
                                            z11 = (z11 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33284y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                case 248:
                                    boolean z16 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z16) {
                                        this.D = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.D.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit2 = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z17 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z17) {
                                        z11 = z11;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.D = new ArrayList();
                                            z11 = (z11 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.D.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit2);
                                    continue;
                                case 258:
                                    boolean z18 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z18) {
                                        this.E = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.E.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                    continue;
                                default:
                                    r52 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                    if (r52 == 0) {
                                        break;
                                    } else {
                                        continue;
                                    }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        } catch (IOException e11) {
                            throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                        }
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f33280u = Collections.unmodifiableList(this.f33280u);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33283x = Collections.unmodifiableList(this.f33283x);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33284y = Collections.unmodifiableList(this.f33284y);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.D = Collections.unmodifiableList(this.D);
                        }
                        if (((z11 ? 1 : 0) & true) == r52) {
                            this.E = Collections.unmodifiableList(this.E);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33273i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33273i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } else {
                    if ((z11 ? 1 : 0) & true) {
                        this.f33280u = Collections.unmodifiableList(this.f33280u);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f33283x = Collections.unmodifiableList(this.f33283x);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f33284y = Collections.unmodifiableList(this.f33284y);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.D = Collections.unmodifiableList(this.D);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.E = Collections.unmodifiableList(this.E);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f33273i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33273i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface PropertyOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class QualifiedNameTable extends GeneratedMessageLite implements QualifiedNameTableOrBuilder {
        public static Parser<QualifiedNameTable> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final QualifiedNameTable f33298q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33299e;

        /* renamed from: i  reason: collision with root package name */
        private List f33300i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33301o;

        /* renamed from: p  reason: collision with root package name */
        private int f33302p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<QualifiedNameTable, Builder> implements QualifiedNameTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33303e;

            /* renamed from: i  reason: collision with root package name */
            private List f33304i = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33303e & 1) != 1) {
                    this.f33304i = new ArrayList(this.f33304i);
                    this.f33303e |= 1;
                }
            }

            private void e() {
            }

            public QualifiedNameTable buildPartial() {
                QualifiedNameTable qualifiedNameTable = new QualifiedNameTable(this);
                if ((this.f33303e & 1) == 1) {
                    this.f33304i = Collections.unmodifiableList(this.f33304i);
                    this.f33303e &= -2;
                }
                qualifiedNameTable.f33300i = this.f33304i;
                return qualifiedNameTable;
            }

            public QualifiedName getQualifiedName(int i10) {
                return (QualifiedName) this.f33304i.get(i10);
            }

            public int getQualifiedNameCount() {
                return this.f33304i.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getQualifiedNameCount(); i10++) {
                    if (!getQualifiedName(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public QualifiedNameTable build() {
                QualifiedNameTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public QualifiedNameTable getDefaultInstanceForType() {
                return QualifiedNameTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(QualifiedNameTable qualifiedNameTable) {
                if (qualifiedNameTable == QualifiedNameTable.getDefaultInstance()) {
                    return this;
                }
                if (!qualifiedNameTable.f33300i.isEmpty()) {
                    if (this.f33304i.isEmpty()) {
                        this.f33304i = qualifiedNameTable.f33300i;
                        this.f33303e &= -2;
                    } else {
                        d();
                        this.f33304i.addAll(qualifiedNameTable.f33300i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(qualifiedNameTable.f33299e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class QualifiedName extends GeneratedMessageLite implements QualifiedNameOrBuilder {
            public static Parser<QualifiedName> PARSER = new a();

            /* renamed from: t  reason: collision with root package name */
            private static final QualifiedName f33305t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33306e;

            /* renamed from: i  reason: collision with root package name */
            private int f33307i;

            /* renamed from: o  reason: collision with root package name */
            private int f33308o;

            /* renamed from: p  reason: collision with root package name */
            private int f33309p;

            /* renamed from: q  reason: collision with root package name */
            private Kind f33310q;

            /* renamed from: r  reason: collision with root package name */
            private byte f33311r;

            /* renamed from: s  reason: collision with root package name */
            private int f33312s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<QualifiedName, Builder> implements QualifiedNameOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33313e;

                /* renamed from: o  reason: collision with root package name */
                private int f33315o;

                /* renamed from: i  reason: collision with root package name */
                private int f33314i = -1;

                /* renamed from: p  reason: collision with root package name */
                private Kind f33316p = Kind.PACKAGE;

                private Builder() {
                    d();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                }

                public QualifiedName buildPartial() {
                    QualifiedName qualifiedName = new QualifiedName(this);
                    int i10 = this.f33313e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    qualifiedName.f33308o = this.f33314i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    qualifiedName.f33309p = this.f33315o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    qualifiedName.f33310q = this.f33316p;
                    qualifiedName.f33307i = i11;
                    return qualifiedName;
                }

                public boolean hasShortName() {
                    if ((this.f33313e & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    if (!hasShortName()) {
                        return false;
                    }
                    return true;
                }

                public Builder setKind(Kind kind) {
                    kind.getClass();
                    this.f33313e |= 4;
                    this.f33316p = kind;
                    return this;
                }

                public Builder setParentQualifiedName(int i10) {
                    this.f33313e |= 1;
                    this.f33314i = i10;
                    return this;
                }

                public Builder setShortName(int i10) {
                    this.f33313e |= 2;
                    this.f33315o = i10;
                    return this;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                public QualifiedName build() {
                    QualifiedName buildPartial = buildPartial();
                    if (buildPartial.isInitialized()) {
                        return buildPartial;
                    }
                    throw AbstractMessageLite.Builder.a(buildPartial);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public QualifiedName getDefaultInstanceForType() {
                    return QualifiedName.getDefaultInstance();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                public Builder clone() {
                    return c().mergeFrom(buildPartial());
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                public Builder mergeFrom(QualifiedName qualifiedName) {
                    if (qualifiedName == QualifiedName.getDefaultInstance()) {
                        return this;
                    }
                    if (qualifiedName.hasParentQualifiedName()) {
                        setParentQualifiedName(qualifiedName.getParentQualifiedName());
                    }
                    if (qualifiedName.hasShortName()) {
                        setShortName(qualifiedName.getShortName());
                    }
                    if (qualifiedName.hasKind()) {
                        setKind(qualifiedName.getKind());
                    }
                    setUnknownFields(getUnknownFields().concat(qualifiedName.f33306e));
                    return this;
                }

                /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                    /*
                        r2 = this;
                        r0 = 0
                        kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        if (r3 == 0) goto Le
                        r2.mergeFrom(r3)
                    Le:
                        return r2
                    Lf:
                        r3 = move-exception
                        goto L1b
                    L11:
                        r3 = move-exception
                        kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName) r4     // Catch: java.lang.Throwable -> Lf
                        throw r3     // Catch: java.lang.Throwable -> L19
                    L19:
                        r3 = move-exception
                        r0 = r4
                    L1b:
                        if (r0 == 0) goto L20
                        r2.mergeFrom(r0)
                    L20:
                        throw r3
                    */
                    throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.QualifiedNameTable.QualifiedName.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$QualifiedNameTable$QualifiedName$Builder");
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public enum Kind implements Internal.EnumLite {
                CLASS(0, 0),
                PACKAGE(1, 1),
                LOCAL(2, 2);
                

                /* renamed from: e  reason: collision with root package name */
                private static Internal.EnumLiteMap f33317e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f33319d;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                static class a implements Internal.EnumLiteMap {
                    a() {
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                    /* renamed from: a */
                    public Kind findValueByNumber(int i10) {
                        return Kind.valueOf(i10);
                    }
                }

                Kind(int i10, int i11) {
                    this.f33319d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f33319d;
                }

                public static Kind valueOf(int i10) {
                    if (i10 != 0) {
                        if (i10 != 1) {
                            if (i10 != 2) {
                                return null;
                            }
                            return LOCAL;
                        }
                        return PACKAGE;
                    }
                    return CLASS;
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a extends AbstractParser {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                /* renamed from: c */
                public QualifiedName parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    return new QualifiedName(codedInputStream, extensionRegistryLite);
                }
            }

            static {
                QualifiedName qualifiedName = new QualifiedName(true);
                f33305t = qualifiedName;
                qualifiedName.m();
            }

            public static QualifiedName getDefaultInstance() {
                return f33305t;
            }

            private void m() {
                this.f33308o = -1;
                this.f33309p = 0;
                this.f33310q = Kind.PACKAGE;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public Kind getKind() {
                return this.f33310q;
            }

            public int getParentQualifiedName() {
                return this.f33308o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<QualifiedName> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33312s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33307i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33308o);
                } else {
                    i10 = 0;
                }
                if ((this.f33307i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f33309p);
                }
                if ((this.f33307i & 4) == 4) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f33310q.getNumber());
                }
                int size = i10 + this.f33306e.size();
                this.f33312s = size;
                return size;
            }

            public int getShortName() {
                return this.f33309p;
            }

            public boolean hasKind() {
                if ((this.f33307i & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasParentQualifiedName() {
                if ((this.f33307i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasShortName() {
                if ((this.f33307i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33311r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasShortName()) {
                    this.f33311r = (byte) 0;
                    return false;
                }
                this.f33311r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33307i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33308o);
                }
                if ((this.f33307i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f33309p);
                }
                if ((this.f33307i & 4) == 4) {
                    codedOutputStream.writeEnum(3, this.f33310q.getNumber());
                }
                codedOutputStream.writeRawBytes(this.f33306e);
            }

            public static Builder newBuilder(QualifiedName qualifiedName) {
                return newBuilder().mergeFrom(qualifiedName);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public QualifiedName getDefaultInstanceForType() {
                return f33305t;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder newBuilderForType() {
                return newBuilder();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder toBuilder() {
                return newBuilder(this);
            }

            private QualifiedName(GeneratedMessageLite.Builder builder) {
                super(builder);
                this.f33311r = (byte) -1;
                this.f33312s = -1;
                this.f33306e = builder.getUnknownFields();
            }

            private QualifiedName(boolean z10) {
                this.f33311r = (byte) -1;
                this.f33312s = -1;
                this.f33306e = ByteString.EMPTY;
            }

            private QualifiedName(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33311r = (byte) -1;
                this.f33312s = -1;
                m();
                ByteString.Output newOutput = ByteString.newOutput();
                CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                boolean z10 = false;
                while (!z10) {
                    try {
                        try {
                            try {
                                int readTag = codedInputStream.readTag();
                                if (readTag != 0) {
                                    if (readTag == 8) {
                                        this.f33307i |= 1;
                                        this.f33308o = codedInputStream.readInt32();
                                    } else if (readTag == 16) {
                                        this.f33307i |= 2;
                                        this.f33309p = codedInputStream.readInt32();
                                    } else if (readTag != 24) {
                                        if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        }
                                    } else {
                                        int readEnum = codedInputStream.readEnum();
                                        Kind valueOf = Kind.valueOf(readEnum);
                                        if (valueOf == null) {
                                            newInstance.writeRawVarint32(readTag);
                                            newInstance.writeRawVarint32(readEnum);
                                        } else {
                                            this.f33307i |= 4;
                                            this.f33310q = valueOf;
                                        }
                                    }
                                }
                                z10 = true;
                            } catch (InvalidProtocolBufferException e10) {
                                throw e10.setUnfinishedMessage(this);
                            }
                        } catch (IOException e11) {
                            throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                        }
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33306e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33306e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f33306e = newOutput.toByteString();
                    throw th4;
                }
                this.f33306e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface QualifiedNameOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public QualifiedNameTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new QualifiedNameTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            QualifiedNameTable qualifiedNameTable = new QualifiedNameTable(true);
            f33298q = qualifiedNameTable;
            qualifiedNameTable.k();
        }

        public static QualifiedNameTable getDefaultInstance() {
            return f33298q;
        }

        private void k() {
            this.f33300i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<QualifiedNameTable> getParserForType() {
            return PARSER;
        }

        public QualifiedName getQualifiedName(int i10) {
            return (QualifiedName) this.f33300i.get(i10);
        }

        public int getQualifiedNameCount() {
            return this.f33300i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33302p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33300i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33300i.get(i12));
            }
            int size = i11 + this.f33299e.size();
            this.f33302p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33301o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getQualifiedNameCount(); i10++) {
                if (!getQualifiedName(i10).isInitialized()) {
                    this.f33301o = (byte) 0;
                    return false;
                }
            }
            this.f33301o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33300i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33300i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33299e);
        }

        public static Builder newBuilder(QualifiedNameTable qualifiedNameTable) {
            return newBuilder().mergeFrom(qualifiedNameTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public QualifiedNameTable getDefaultInstanceForType() {
            return f33298q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private QualifiedNameTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33301o = (byte) -1;
            this.f33302p = -1;
            this.f33299e = builder.getUnknownFields();
        }

        private QualifiedNameTable(boolean z10) {
            this.f33301o = (byte) -1;
            this.f33302p = -1;
            this.f33299e = ByteString.EMPTY;
        }

        private QualifiedNameTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33301o = (byte) -1;
            this.f33302p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    if (!z11) {
                                        this.f33300i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33300i.add(codedInputStream.readMessage(QualifiedName.PARSER, extensionRegistryLite));
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f33300i = Collections.unmodifiableList(this.f33300i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33299e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33299e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33300i = Collections.unmodifiableList(this.f33300i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33299e = newOutput.toByteString();
                throw th4;
            }
            this.f33299e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface QualifiedNameTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class StringTable extends GeneratedMessageLite implements StringTableOrBuilder {
        public static Parser<StringTable> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final StringTable f33320q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33321e;

        /* renamed from: i  reason: collision with root package name */
        private LazyStringList f33322i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33323o;

        /* renamed from: p  reason: collision with root package name */
        private int f33324p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTable, Builder> implements StringTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33325e;

            /* renamed from: i  reason: collision with root package name */
            private LazyStringList f33326i = LazyStringArrayList.EMPTY;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33325e & 1) != 1) {
                    this.f33326i = new LazyStringArrayList(this.f33326i);
                    this.f33325e |= 1;
                }
            }

            private void e() {
            }

            public StringTable buildPartial() {
                StringTable stringTable = new StringTable(this);
                if ((this.f33325e & 1) == 1) {
                    this.f33326i = this.f33326i.getUnmodifiableView();
                    this.f33325e &= -2;
                }
                stringTable.f33322i = this.f33326i;
                return stringTable;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public StringTable build() {
                StringTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public StringTable getDefaultInstanceForType() {
                return StringTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(StringTable stringTable) {
                if (stringTable == StringTable.getDefaultInstance()) {
                    return this;
                }
                if (!stringTable.f33322i.isEmpty()) {
                    if (this.f33326i.isEmpty()) {
                        this.f33326i = stringTable.f33322i;
                        this.f33325e &= -2;
                    } else {
                        d();
                        this.f33326i.addAll(stringTable.f33322i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTable.f33321e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.StringTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$StringTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public StringTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new StringTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            StringTable stringTable = new StringTable(true);
            f33320q = stringTable;
            stringTable.k();
        }

        public static StringTable getDefaultInstance() {
            return f33320q;
        }

        private void k() {
            this.f33322i = LazyStringArrayList.EMPTY;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<StringTable> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33324p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33322i.size(); i12++) {
                i11 += CodedOutputStream.computeBytesSizeNoTag(this.f33322i.getByteString(i12));
            }
            int size = i11 + getStringList().size() + this.f33321e.size();
            this.f33324p = size;
            return size;
        }

        public String getString(int i10) {
            return this.f33322i.get(i10);
        }

        public ProtocolStringList getStringList() {
            return this.f33322i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33323o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33323o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33322i.size(); i10++) {
                codedOutputStream.writeBytes(1, this.f33322i.getByteString(i10));
            }
            codedOutputStream.writeRawBytes(this.f33321e);
        }

        public static Builder newBuilder(StringTable stringTable) {
            return newBuilder().mergeFrom(stringTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTable getDefaultInstanceForType() {
            return f33320q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private StringTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33323o = (byte) -1;
            this.f33324p = -1;
            this.f33321e = builder.getUnknownFields();
        }

        private StringTable(boolean z10) {
            this.f33323o = (byte) -1;
            this.f33324p = -1;
            this.f33321e = ByteString.EMPTY;
        }

        private StringTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33323o = (byte) -1;
            this.f33324p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    ByteString readBytes = codedInputStream.readBytes();
                                    if (!z11) {
                                        this.f33322i = new LazyStringArrayList();
                                        z11 = true;
                                    }
                                    this.f33322i.add(readBytes);
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f33322i = this.f33322i.getUnmodifiableView();
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33321e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33321e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33322i = this.f33322i.getUnmodifiableView();
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33321e = newOutput.toByteString();
                throw th4;
            }
            this.f33321e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface StringTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Type extends GeneratedMessageLite.ExtendableMessage<Type> implements TypeOrBuilder {
        private static final Type F;
        public static Parser<Type> PARSER = new a();
        private Type A;
        private int B;
        private int C;
        private byte D;
        private int E;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33327i;

        /* renamed from: o  reason: collision with root package name */
        private int f33328o;

        /* renamed from: p  reason: collision with root package name */
        private List f33329p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f33330q;

        /* renamed from: r  reason: collision with root package name */
        private int f33331r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33332s;

        /* renamed from: t  reason: collision with root package name */
        private int f33333t;

        /* renamed from: u  reason: collision with root package name */
        private int f33334u;

        /* renamed from: v  reason: collision with root package name */
        private int f33335v;

        /* renamed from: w  reason: collision with root package name */
        private int f33336w;

        /* renamed from: x  reason: collision with root package name */
        private int f33337x;

        /* renamed from: y  reason: collision with root package name */
        private Type f33338y;

        /* renamed from: z  reason: collision with root package name */
        private int f33339z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: t  reason: collision with root package name */
            private static final Argument f33340t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33341e;

            /* renamed from: i  reason: collision with root package name */
            private int f33342i;

            /* renamed from: o  reason: collision with root package name */
            private Projection f33343o;

            /* renamed from: p  reason: collision with root package name */
            private Type f33344p;

            /* renamed from: q  reason: collision with root package name */
            private int f33345q;

            /* renamed from: r  reason: collision with root package name */
            private byte f33346r;

            /* renamed from: s  reason: collision with root package name */
            private int f33347s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33348e;

                /* renamed from: i  reason: collision with root package name */
                private Projection f33349i = Projection.INV;

                /* renamed from: o  reason: collision with root package name */
                private Type f33350o = Type.getDefaultInstance();

                /* renamed from: p  reason: collision with root package name */
                private int f33351p;

                private Builder() {
                    d();
                }

                static /* synthetic */ Builder b() {
                    return c();
                }

                private static Builder c() {
                    return new Builder();
                }

                private void d() {
                }

                public Argument buildPartial() {
                    Argument argument = new Argument(this);
                    int i10 = this.f33348e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f33343o = this.f33349i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f33344p = this.f33350o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    argument.f33345q = this.f33351p;
                    argument.f33342i = i11;
                    return argument;
                }

                public Type getType() {
                    return this.f33350o;
                }

                public boolean hasType() {
                    if ((this.f33348e & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    if (hasType() && !getType().isInitialized()) {
                        return false;
                    }
                    return true;
                }

                public Builder mergeType(Type type) {
                    if ((this.f33348e & 2) == 2 && this.f33350o != Type.getDefaultInstance()) {
                        this.f33350o = Type.newBuilder(this.f33350o).mergeFrom(type).buildPartial();
                    } else {
                        this.f33350o = type;
                    }
                    this.f33348e |= 2;
                    return this;
                }

                public Builder setProjection(Projection projection) {
                    projection.getClass();
                    this.f33348e |= 1;
                    this.f33349i = projection;
                    return this;
                }

                public Builder setTypeId(int i10) {
                    this.f33348e |= 4;
                    this.f33351p = i10;
                    return this;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                public Argument build() {
                    Argument buildPartial = buildPartial();
                    if (buildPartial.isInitialized()) {
                        return buildPartial;
                    }
                    throw AbstractMessageLite.Builder.a(buildPartial);
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public Argument getDefaultInstanceForType() {
                    return Argument.getDefaultInstance();
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
                public Builder clone() {
                    return c().mergeFrom(buildPartial());
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
                public Builder mergeFrom(Argument argument) {
                    if (argument == Argument.getDefaultInstance()) {
                        return this;
                    }
                    if (argument.hasProjection()) {
                        setProjection(argument.getProjection());
                    }
                    if (argument.hasType()) {
                        mergeType(argument.getType());
                    }
                    if (argument.hasTypeId()) {
                        setTypeId(argument.getTypeId());
                    }
                    setUnknownFields(getUnknownFields().concat(argument.f33341e));
                    return this;
                }

                /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
                @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
                /*
                    Code decompiled incorrectly, please refer to instructions dump.
                    To view partially-correct add '--show-bad-code' argument
                */
                public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                    /*
                        r2 = this;
                        r0 = 0
                        kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                        if (r3 == 0) goto Le
                        r2.mergeFrom(r3)
                    Le:
                        return r2
                    Lf:
                        r3 = move-exception
                        goto L1b
                    L11:
                        r3 = move-exception
                        kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                        kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument) r4     // Catch: java.lang.Throwable -> Lf
                        throw r3     // Catch: java.lang.Throwable -> L19
                    L19:
                        r3 = move-exception
                        r0 = r4
                    L1b:
                        if (r0 == 0) goto L20
                        r2.mergeFrom(r0)
                    L20:
                        throw r3
                    */
                    throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Argument.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Argument$Builder");
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public enum Projection implements Internal.EnumLite {
                IN(0, 0),
                OUT(1, 1),
                INV(2, 2),
                STAR(3, 3);
                

                /* renamed from: e  reason: collision with root package name */
                private static Internal.EnumLiteMap f33352e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f33354d;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                static class a implements Internal.EnumLiteMap {
                    a() {
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                    /* renamed from: a */
                    public Projection findValueByNumber(int i10) {
                        return Projection.valueOf(i10);
                    }
                }

                Projection(int i10, int i11) {
                    this.f33354d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f33354d;
                }

                public static Projection valueOf(int i10) {
                    if (i10 != 0) {
                        if (i10 != 1) {
                            if (i10 != 2) {
                                if (i10 != 3) {
                                    return null;
                                }
                                return STAR;
                            }
                            return INV;
                        }
                        return OUT;
                    }
                    return IN;
                }
            }

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a extends AbstractParser {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
                /* renamed from: c */
                public Argument parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    return new Argument(codedInputStream, extensionRegistryLite);
                }
            }

            static {
                Argument argument = new Argument(true);
                f33340t = argument;
                argument.m();
            }

            public static Argument getDefaultInstance() {
                return f33340t;
            }

            private void m() {
                this.f33343o = Projection.INV;
                this.f33344p = Type.getDefaultInstance();
                this.f33345q = 0;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            public Projection getProjection() {
                return this.f33343o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33347s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33342i & 1) == 1) {
                    i10 = CodedOutputStream.computeEnumSize(1, this.f33343o.getNumber());
                } else {
                    i10 = 0;
                }
                if ((this.f33342i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f33344p);
                }
                if ((this.f33342i & 4) == 4) {
                    i10 += CodedOutputStream.computeInt32Size(3, this.f33345q);
                }
                int size = i10 + this.f33341e.size();
                this.f33347s = size;
                return size;
            }

            public Type getType() {
                return this.f33344p;
            }

            public int getTypeId() {
                return this.f33345q;
            }

            public boolean hasProjection() {
                if ((this.f33342i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f33342i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeId() {
                if ((this.f33342i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33346r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (hasType() && !getType().isInitialized()) {
                    this.f33346r = (byte) 0;
                    return false;
                }
                this.f33346r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33342i & 1) == 1) {
                    codedOutputStream.writeEnum(1, this.f33343o.getNumber());
                }
                if ((this.f33342i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f33344p);
                }
                if ((this.f33342i & 4) == 4) {
                    codedOutputStream.writeInt32(3, this.f33345q);
                }
                codedOutputStream.writeRawBytes(this.f33341e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f33340t;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder newBuilderForType() {
                return newBuilder();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Builder toBuilder() {
                return newBuilder(this);
            }

            private Argument(GeneratedMessageLite.Builder builder) {
                super(builder);
                this.f33346r = (byte) -1;
                this.f33347s = -1;
                this.f33341e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f33346r = (byte) -1;
                this.f33347s = -1;
                this.f33341e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33346r = (byte) -1;
                this.f33347s = -1;
                m();
                ByteString.Output newOutput = ByteString.newOutput();
                CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
                boolean z10 = false;
                while (!z10) {
                    try {
                        try {
                            try {
                                int readTag = codedInputStream.readTag();
                                if (readTag != 0) {
                                    if (readTag == 8) {
                                        int readEnum = codedInputStream.readEnum();
                                        Projection valueOf = Projection.valueOf(readEnum);
                                        if (valueOf == null) {
                                            newInstance.writeRawVarint32(readTag);
                                            newInstance.writeRawVarint32(readEnum);
                                        } else {
                                            this.f33342i |= 1;
                                            this.f33343o = valueOf;
                                        }
                                    } else if (readTag == 18) {
                                        Builder builder = (this.f33342i & 2) == 2 ? this.f33344p.toBuilder() : null;
                                        Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                        this.f33344p = type;
                                        if (builder != null) {
                                            builder.mergeFrom(type);
                                            this.f33344p = builder.buildPartial();
                                        }
                                        this.f33342i |= 2;
                                    } else if (readTag != 24) {
                                        if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        }
                                    } else {
                                        this.f33342i |= 4;
                                        this.f33345q = codedInputStream.readInt32();
                                    }
                                }
                                z10 = true;
                            } catch (InvalidProtocolBufferException e10) {
                                throw e10.setUnfinishedMessage(this);
                            }
                        } catch (IOException e11) {
                            throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                        }
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33341e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33341e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f33341e = newOutput.toByteString();
                    throw th4;
                }
                this.f33341e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface ArgumentOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Type, Builder> implements TypeOrBuilder {
            private int B;
            private int C;

            /* renamed from: o  reason: collision with root package name */
            private int f33355o;

            /* renamed from: q  reason: collision with root package name */
            private boolean f33357q;

            /* renamed from: r  reason: collision with root package name */
            private int f33358r;

            /* renamed from: t  reason: collision with root package name */
            private int f33360t;

            /* renamed from: u  reason: collision with root package name */
            private int f33361u;

            /* renamed from: v  reason: collision with root package name */
            private int f33362v;

            /* renamed from: w  reason: collision with root package name */
            private int f33363w;

            /* renamed from: x  reason: collision with root package name */
            private int f33364x;

            /* renamed from: z  reason: collision with root package name */
            private int f33366z;

            /* renamed from: p  reason: collision with root package name */
            private List f33356p = Collections.EMPTY_LIST;

            /* renamed from: s  reason: collision with root package name */
            private Type f33359s = Type.getDefaultInstance();

            /* renamed from: y  reason: collision with root package name */
            private Type f33365y = Type.getDefaultInstance();
            private Type A = Type.getDefaultInstance();

            private Builder() {
                k();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33355o & 1) != 1) {
                    this.f33356p = new ArrayList(this.f33356p);
                    this.f33355o |= 1;
                }
            }

            private void k() {
            }

            public Type buildPartial() {
                Type type = new Type(this);
                int i10 = this.f33355o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f33356p = Collections.unmodifiableList(this.f33356p);
                    this.f33355o &= -2;
                }
                type.f33329p = this.f33356p;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                type.f33330q = this.f33357q;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                type.f33331r = this.f33358r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                type.f33332s = this.f33359s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                type.f33333t = this.f33360t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                type.f33334u = this.f33361u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                type.f33335v = this.f33362v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                type.f33336w = this.f33363w;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                type.f33337x = this.f33364x;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                type.f33338y = this.f33365y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                type.f33339z = this.f33366z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
                type.A = this.A;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    i11 |= RecyclerView.ItemAnimator.FLAG_MOVED;
                }
                type.B = this.B;
                if ((i10 & 8192) == 8192) {
                    i11 |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
                type.C = this.C;
                type.f33328o = i11;
                return type;
            }

            public Type getAbbreviatedType() {
                return this.A;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f33356p.get(i10);
            }

            public int getArgumentCount() {
                return this.f33356p.size();
            }

            public Type getFlexibleUpperBound() {
                return this.f33359s;
            }

            public Type getOuterType() {
                return this.f33365y;
            }

            public boolean hasAbbreviatedType() {
                if ((this.f33355o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    return true;
                }
                return false;
            }

            public boolean hasFlexibleUpperBound() {
                if ((this.f33355o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasOuterType() {
                if ((this.f33355o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                    if (!getArgument(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasFlexibleUpperBound() && !getFlexibleUpperBound().isInitialized()) {
                    return false;
                }
                if (hasOuterType() && !getOuterType().isInitialized()) {
                    return false;
                }
                if ((hasAbbreviatedType() && !getAbbreviatedType().isInitialized()) || !e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeAbbreviatedType(Type type) {
                if ((this.f33355o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != Type.getDefaultInstance()) {
                    this.A = Type.newBuilder(this.A).mergeFrom(type).buildPartial();
                } else {
                    this.A = type;
                }
                this.f33355o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder mergeFlexibleUpperBound(Type type) {
                if ((this.f33355o & 8) == 8 && this.f33359s != Type.getDefaultInstance()) {
                    this.f33359s = Type.newBuilder(this.f33359s).mergeFrom(type).buildPartial();
                } else {
                    this.f33359s = type;
                }
                this.f33355o |= 8;
                return this;
            }

            public Builder mergeOuterType(Type type) {
                if ((this.f33355o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512 && this.f33365y != Type.getDefaultInstance()) {
                    this.f33365y = Type.newBuilder(this.f33365y).mergeFrom(type).buildPartial();
                } else {
                    this.f33365y = type;
                }
                this.f33355o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                return this;
            }

            public Builder setAbbreviatedTypeId(int i10) {
                this.f33355o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                this.B = i10;
                return this;
            }

            public Builder setClassName(int i10) {
                this.f33355o |= 32;
                this.f33361u = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33355o |= 8192;
                this.C = i10;
                return this;
            }

            public Builder setFlexibleTypeCapabilitiesId(int i10) {
                this.f33355o |= 4;
                this.f33358r = i10;
                return this;
            }

            public Builder setFlexibleUpperBoundId(int i10) {
                this.f33355o |= 16;
                this.f33360t = i10;
                return this;
            }

            public Builder setNullable(boolean z10) {
                this.f33355o |= 2;
                this.f33357q = z10;
                return this;
            }

            public Builder setOuterTypeId(int i10) {
                this.f33355o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                this.f33366z = i10;
                return this;
            }

            public Builder setTypeAliasName(int i10) {
                this.f33355o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                this.f33364x = i10;
                return this;
            }

            public Builder setTypeParameter(int i10) {
                this.f33355o |= 64;
                this.f33362v = i10;
                return this;
            }

            public Builder setTypeParameterName(int i10) {
                this.f33355o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33363w = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public Type build() {
                Type buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Type getDefaultInstanceForType() {
                return Type.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(Type type) {
                if (type == Type.getDefaultInstance()) {
                    return this;
                }
                if (!type.f33329p.isEmpty()) {
                    if (this.f33356p.isEmpty()) {
                        this.f33356p = type.f33329p;
                        this.f33355o &= -2;
                    } else {
                        j();
                        this.f33356p.addAll(type.f33329p);
                    }
                }
                if (type.hasNullable()) {
                    setNullable(type.getNullable());
                }
                if (type.hasFlexibleTypeCapabilitiesId()) {
                    setFlexibleTypeCapabilitiesId(type.getFlexibleTypeCapabilitiesId());
                }
                if (type.hasFlexibleUpperBound()) {
                    mergeFlexibleUpperBound(type.getFlexibleUpperBound());
                }
                if (type.hasFlexibleUpperBoundId()) {
                    setFlexibleUpperBoundId(type.getFlexibleUpperBoundId());
                }
                if (type.hasClassName()) {
                    setClassName(type.getClassName());
                }
                if (type.hasTypeParameter()) {
                    setTypeParameter(type.getTypeParameter());
                }
                if (type.hasTypeParameterName()) {
                    setTypeParameterName(type.getTypeParameterName());
                }
                if (type.hasTypeAliasName()) {
                    setTypeAliasName(type.getTypeAliasName());
                }
                if (type.hasOuterType()) {
                    mergeOuterType(type.getOuterType());
                }
                if (type.hasOuterTypeId()) {
                    setOuterTypeId(type.getOuterTypeId());
                }
                if (type.hasAbbreviatedType()) {
                    mergeAbbreviatedType(type.getAbbreviatedType());
                }
                if (type.hasAbbreviatedTypeId()) {
                    setAbbreviatedTypeId(type.getAbbreviatedTypeId());
                }
                if (type.hasFlags()) {
                    setFlags(type.getFlags());
                }
                f(type);
                setUnknownFields(getUnknownFields().concat(type.f33327i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.Type.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$Type$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public Type parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new Type(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            Type type = new Type(true);
            F = type;
            type.D();
        }

        private void D() {
            this.f33329p = Collections.EMPTY_LIST;
            this.f33330q = false;
            this.f33331r = 0;
            this.f33332s = getDefaultInstance();
            this.f33333t = 0;
            this.f33334u = 0;
            this.f33335v = 0;
            this.f33336w = 0;
            this.f33337x = 0;
            this.f33338y = getDefaultInstance();
            this.f33339z = 0;
            this.A = getDefaultInstance();
            this.B = 0;
            this.C = 0;
        }

        public static Type getDefaultInstance() {
            return F;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        public Type getAbbreviatedType() {
            return this.A;
        }

        public int getAbbreviatedTypeId() {
            return this.B;
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f33329p.get(i10);
        }

        public int getArgumentCount() {
            return this.f33329p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f33329p;
        }

        public int getClassName() {
            return this.f33334u;
        }

        public int getFlags() {
            return this.C;
        }

        public int getFlexibleTypeCapabilitiesId() {
            return this.f33331r;
        }

        public Type getFlexibleUpperBound() {
            return this.f33332s;
        }

        public int getFlexibleUpperBoundId() {
            return this.f33333t;
        }

        public boolean getNullable() {
            return this.f33330q;
        }

        public Type getOuterType() {
            return this.f33338y;
        }

        public int getOuterTypeId() {
            return this.f33339z;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Type> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.E;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33328o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                i10 = CodedOutputStream.computeInt32Size(1, this.C);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33329p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33329p.get(i12));
            }
            if ((this.f33328o & 1) == 1) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f33330q);
            }
            if ((this.f33328o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f33331r);
            }
            if ((this.f33328o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33332s);
            }
            if ((this.f33328o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f33334u);
            }
            if ((this.f33328o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f33335v);
            }
            if ((this.f33328o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f33333t);
            }
            if ((this.f33328o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33336w);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeMessageSize(10, this.f33338y);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f33339z);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeInt32Size(12, this.f33337x);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                i10 += CodedOutputStream.computeMessageSize(13, this.A);
            }
            if ((this.f33328o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                i10 += CodedOutputStream.computeInt32Size(14, this.B);
            }
            int j10 = i10 + j() + this.f33327i.size();
            this.E = j10;
            return j10;
        }

        public int getTypeAliasName() {
            return this.f33337x;
        }

        public int getTypeParameter() {
            return this.f33335v;
        }

        public int getTypeParameterName() {
            return this.f33336w;
        }

        public boolean hasAbbreviatedType() {
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                return true;
            }
            return false;
        }

        public boolean hasAbbreviatedTypeId() {
            if ((this.f33328o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                return true;
            }
            return false;
        }

        public boolean hasClassName() {
            if ((this.f33328o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33328o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleTypeCapabilitiesId() {
            if ((this.f33328o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBound() {
            if ((this.f33328o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBoundId() {
            if ((this.f33328o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasNullable() {
            if ((this.f33328o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasOuterType() {
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasOuterTypeId() {
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasTypeAliasName() {
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameter() {
            if ((this.f33328o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameterName() {
            if ((this.f33328o & 64) == 64) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.D;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                if (!getArgument(i10).isInitialized()) {
                    this.D = (byte) 0;
                    return false;
                }
            }
            if (hasFlexibleUpperBound() && !getFlexibleUpperBound().isInitialized()) {
                this.D = (byte) 0;
                return false;
            } else if (hasOuterType() && !getOuterType().isInitialized()) {
                this.D = (byte) 0;
                return false;
            } else if (hasAbbreviatedType() && !getAbbreviatedType().isInitialized()) {
                this.D = (byte) 0;
                return false;
            } else if (!i()) {
                this.D = (byte) 0;
                return false;
            } else {
                this.D = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33328o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                codedOutputStream.writeInt32(1, this.C);
            }
            for (int i10 = 0; i10 < this.f33329p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33329p.get(i10));
            }
            if ((this.f33328o & 1) == 1) {
                codedOutputStream.writeBool(3, this.f33330q);
            }
            if ((this.f33328o & 2) == 2) {
                codedOutputStream.writeInt32(4, this.f33331r);
            }
            if ((this.f33328o & 4) == 4) {
                codedOutputStream.writeMessage(5, this.f33332s);
            }
            if ((this.f33328o & 16) == 16) {
                codedOutputStream.writeInt32(6, this.f33334u);
            }
            if ((this.f33328o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f33335v);
            }
            if ((this.f33328o & 8) == 8) {
                codedOutputStream.writeInt32(8, this.f33333t);
            }
            if ((this.f33328o & 64) == 64) {
                codedOutputStream.writeInt32(9, this.f33336w);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(10, this.f33338y);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(11, this.f33339z);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeInt32(12, this.f33337x);
            }
            if ((this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                codedOutputStream.writeMessage(13, this.A);
            }
            if ((this.f33328o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                codedOutputStream.writeInt32(14, this.B);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33327i);
        }

        public static Builder newBuilder(Type type) {
            return newBuilder().mergeFrom(type);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Type getDefaultInstanceForType() {
            return F;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private Type(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.D = (byte) -1;
            this.E = -1;
            this.f33327i = extendableBuilder.getUnknownFields();
        }

        private Type(boolean z10) {
            this.D = (byte) -1;
            this.E = -1;
            this.f33327i = ByteString.EMPTY;
        }

        private Type(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Builder builder;
            this.D = (byte) -1;
            this.E = -1;
            D();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    break;
                                case 8:
                                    this.f33328o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                    if (!z11) {
                                        this.f33329p = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33329p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                    this.f33328o |= 1;
                                    this.f33330q = codedInputStream.readBool();
                                    continue;
                                case 32:
                                    this.f33328o |= 2;
                                    this.f33331r = codedInputStream.readInt32();
                                    continue;
                                case 42:
                                    builder = (this.f33328o & 4) == 4 ? this.f33332s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f33332s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33332s = builder.buildPartial();
                                    }
                                    this.f33328o |= 4;
                                    continue;
                                case 48:
                                    this.f33328o |= 16;
                                    this.f33334u = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f33328o |= 32;
                                    this.f33335v = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f33328o |= 8;
                                    this.f33333t = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f33328o |= 64;
                                    this.f33336w = codedInputStream.readInt32();
                                    continue;
                                case 82:
                                    builder = (this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.f33338y.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f33338y = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f33338y = builder.buildPartial();
                                    }
                                    this.f33328o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    continue;
                                case 88:
                                    this.f33328o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.f33339z = codedInputStream.readInt32();
                                    continue;
                                case 96:
                                    this.f33328o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    this.f33337x = codedInputStream.readInt32();
                                    continue;
                                case 106:
                                    builder = (this.f33328o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 ? this.A.toBuilder() : null;
                                    Type type3 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.A = type3;
                                    if (builder != null) {
                                        builder.mergeFrom(type3);
                                        this.A = builder.buildPartial();
                                    }
                                    this.f33328o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                                    continue;
                                case 112:
                                    this.f33328o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                                    this.B = codedInputStream.readInt32();
                                    continue;
                                default:
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        break;
                                    } else {
                                        continue;
                                    }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f33329p = Collections.unmodifiableList(this.f33329p);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33327i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33327i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33329p = Collections.unmodifiableList(this.f33329p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33327i = newOutput.toByteString();
                throw th4;
            }
            this.f33327i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeAlias extends GeneratedMessageLite.ExtendableMessage<TypeAlias> implements TypeAliasOrBuilder {
        private static final TypeAlias B;
        public static Parser<TypeAlias> PARSER = new a();
        private int A;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33367i;

        /* renamed from: o  reason: collision with root package name */
        private int f33368o;

        /* renamed from: p  reason: collision with root package name */
        private int f33369p;

        /* renamed from: q  reason: collision with root package name */
        private int f33370q;

        /* renamed from: r  reason: collision with root package name */
        private List f33371r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33372s;

        /* renamed from: t  reason: collision with root package name */
        private int f33373t;

        /* renamed from: u  reason: collision with root package name */
        private Type f33374u;

        /* renamed from: v  reason: collision with root package name */
        private int f33375v;

        /* renamed from: w  reason: collision with root package name */
        private List f33376w;

        /* renamed from: x  reason: collision with root package name */
        private List f33377x;

        /* renamed from: y  reason: collision with root package name */
        private List f33378y;

        /* renamed from: z  reason: collision with root package name */
        private byte f33379z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeAlias, Builder> implements TypeAliasOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33380o;

            /* renamed from: p  reason: collision with root package name */
            private int f33381p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33382q;

            /* renamed from: r  reason: collision with root package name */
            private List f33383r;

            /* renamed from: s  reason: collision with root package name */
            private Type f33384s;

            /* renamed from: t  reason: collision with root package name */
            private int f33385t;

            /* renamed from: u  reason: collision with root package name */
            private Type f33386u;

            /* renamed from: v  reason: collision with root package name */
            private int f33387v;

            /* renamed from: w  reason: collision with root package name */
            private List f33388w;

            /* renamed from: x  reason: collision with root package name */
            private List f33389x;

            /* renamed from: y  reason: collision with root package name */
            private List f33390y;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33383r = list;
                this.f33384s = Type.getDefaultInstance();
                this.f33386u = Type.getDefaultInstance();
                this.f33388w = list;
                this.f33389x = list;
                this.f33390y = list;
                n();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33380o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f33388w = new ArrayList(this.f33388w);
                    this.f33380o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void k() {
                if ((this.f33380o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33390y = new ArrayList(this.f33390y);
                    this.f33380o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33380o & 4) != 4) {
                    this.f33383r = new ArrayList(this.f33383r);
                    this.f33380o |= 4;
                }
            }

            private void m() {
                if ((this.f33380o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33389x = new ArrayList(this.f33389x);
                    this.f33380o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void n() {
            }

            public TypeAlias buildPartial() {
                TypeAlias typeAlias = new TypeAlias(this);
                int i10 = this.f33380o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeAlias.f33369p = this.f33381p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeAlias.f33370q = this.f33382q;
                if ((this.f33380o & 4) == 4) {
                    this.f33383r = Collections.unmodifiableList(this.f33383r);
                    this.f33380o &= -5;
                }
                typeAlias.f33371r = this.f33383r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                typeAlias.f33372s = this.f33384s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                typeAlias.f33373t = this.f33385t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                typeAlias.f33374u = this.f33386u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                typeAlias.f33375v = this.f33387v;
                if ((this.f33380o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f33388w = Collections.unmodifiableList(this.f33388w);
                    this.f33380o &= -129;
                }
                typeAlias.f33376w = this.f33388w;
                if ((this.f33380o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33389x = Collections.unmodifiableList(this.f33389x);
                    this.f33380o &= -257;
                }
                typeAlias.f33377x = this.f33389x;
                if ((this.f33380o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33390y = Collections.unmodifiableList(this.f33390y);
                    this.f33380o &= -513;
                }
                typeAlias.f33378y = this.f33390y;
                typeAlias.f33368o = i11;
                return typeAlias;
            }

            public Annotation getAnnotation(int i10) {
                return (Annotation) this.f33388w.get(i10);
            }

            public int getAnnotationCount() {
                return this.f33388w.size();
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f33390y.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f33390y.size();
            }

            public Type getExpandedType() {
                return this.f33386u;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33383r.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33383r.size();
            }

            public Type getUnderlyingType() {
                return this.f33384s;
            }

            public boolean hasExpandedType() {
                if ((this.f33380o & 32) == 32) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f33380o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasUnderlyingType() {
                if ((this.f33380o & 8) == 8) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                    if (!getTypeParameter(i10).isInitialized()) {
                        return false;
                    }
                }
                if (hasUnderlyingType() && !getUnderlyingType().isInitialized()) {
                    return false;
                }
                if (hasExpandedType() && !getExpandedType().isInitialized()) {
                    return false;
                }
                for (int i11 = 0; i11 < getAnnotationCount(); i11++) {
                    if (!getAnnotation(i11).isInitialized()) {
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeExpandedType(Type type) {
                if ((this.f33380o & 32) == 32 && this.f33386u != Type.getDefaultInstance()) {
                    this.f33386u = Type.newBuilder(this.f33386u).mergeFrom(type).buildPartial();
                } else {
                    this.f33386u = type;
                }
                this.f33380o |= 32;
                return this;
            }

            public Builder mergeUnderlyingType(Type type) {
                if ((this.f33380o & 8) == 8 && this.f33384s != Type.getDefaultInstance()) {
                    this.f33384s = Type.newBuilder(this.f33384s).mergeFrom(type).buildPartial();
                } else {
                    this.f33384s = type;
                }
                this.f33380o |= 8;
                return this;
            }

            public Builder setExpandedTypeId(int i10) {
                this.f33380o |= 64;
                this.f33387v = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33380o |= 1;
                this.f33381p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33380o |= 2;
                this.f33382q = i10;
                return this;
            }

            public Builder setUnderlyingTypeId(int i10) {
                this.f33380o |= 16;
                this.f33385t = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public TypeAlias build() {
                TypeAlias buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public TypeAlias getDefaultInstanceForType() {
                return TypeAlias.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(TypeAlias typeAlias) {
                if (typeAlias == TypeAlias.getDefaultInstance()) {
                    return this;
                }
                if (typeAlias.hasFlags()) {
                    setFlags(typeAlias.getFlags());
                }
                if (typeAlias.hasName()) {
                    setName(typeAlias.getName());
                }
                if (!typeAlias.f33371r.isEmpty()) {
                    if (this.f33383r.isEmpty()) {
                        this.f33383r = typeAlias.f33371r;
                        this.f33380o &= -5;
                    } else {
                        l();
                        this.f33383r.addAll(typeAlias.f33371r);
                    }
                }
                if (typeAlias.hasUnderlyingType()) {
                    mergeUnderlyingType(typeAlias.getUnderlyingType());
                }
                if (typeAlias.hasUnderlyingTypeId()) {
                    setUnderlyingTypeId(typeAlias.getUnderlyingTypeId());
                }
                if (typeAlias.hasExpandedType()) {
                    mergeExpandedType(typeAlias.getExpandedType());
                }
                if (typeAlias.hasExpandedTypeId()) {
                    setExpandedTypeId(typeAlias.getExpandedTypeId());
                }
                if (!typeAlias.f33376w.isEmpty()) {
                    if (this.f33388w.isEmpty()) {
                        this.f33388w = typeAlias.f33376w;
                        this.f33380o &= -129;
                    } else {
                        j();
                        this.f33388w.addAll(typeAlias.f33376w);
                    }
                }
                if (!typeAlias.f33377x.isEmpty()) {
                    if (this.f33389x.isEmpty()) {
                        this.f33389x = typeAlias.f33377x;
                        this.f33380o &= -257;
                    } else {
                        m();
                        this.f33389x.addAll(typeAlias.f33377x);
                    }
                }
                if (!typeAlias.f33378y.isEmpty()) {
                    if (this.f33390y.isEmpty()) {
                        this.f33390y = typeAlias.f33378y;
                        this.f33380o &= -513;
                    } else {
                        k();
                        this.f33390y.addAll(typeAlias.f33378y);
                    }
                }
                f(typeAlias);
                setUnknownFields(getUnknownFields().concat(typeAlias.f33367i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeAlias.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeAlias$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public TypeAlias parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new TypeAlias(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            TypeAlias typeAlias = new TypeAlias(true);
            B = typeAlias;
            typeAlias.C();
        }

        private void C() {
            this.f33369p = 6;
            this.f33370q = 0;
            List list = Collections.EMPTY_LIST;
            this.f33371r = list;
            this.f33372s = Type.getDefaultInstance();
            this.f33373t = 0;
            this.f33374u = Type.getDefaultInstance();
            this.f33375v = 0;
            this.f33376w = list;
            this.f33377x = list;
            this.f33378y = list;
        }

        public static TypeAlias getDefaultInstance() {
            return B;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        public static TypeAlias parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseDelimitedFrom(inputStream, extensionRegistryLite);
        }

        public Annotation getAnnotation(int i10) {
            return (Annotation) this.f33376w.get(i10);
        }

        public int getAnnotationCount() {
            return this.f33376w.size();
        }

        public List<Annotation> getAnnotationList() {
            return this.f33376w;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f33378y.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f33378y.size();
        }

        public Type getExpandedType() {
            return this.f33374u;
        }

        public int getExpandedTypeId() {
            return this.f33375v;
        }

        public int getFlags() {
            return this.f33369p;
        }

        public int getName() {
            return this.f33370q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeAlias> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.A;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33368o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33369p);
            } else {
                i10 = 0;
            }
            if ((this.f33368o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33370q);
            }
            for (int i12 = 0; i12 < this.f33371r.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f33371r.get(i12));
            }
            if ((this.f33368o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33372s);
            }
            if ((this.f33368o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33373t);
            }
            if ((this.f33368o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(6, this.f33374u);
            }
            if ((this.f33368o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f33375v);
            }
            for (int i13 = 0; i13 < this.f33376w.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(8, (MessageLite) this.f33376w.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f33377x.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33377x.get(i15)).intValue());
            }
            int size = i10 + i14 + (getVersionRequirementList().size() * 2);
            for (int i16 = 0; i16 < this.f33378y.size(); i16++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f33378y.get(i16));
            }
            int j10 = size + j() + this.f33367i.size();
            this.A = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f33371r.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33371r.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33371r;
        }

        public Type getUnderlyingType() {
            return this.f33372s;
        }

        public int getUnderlyingTypeId() {
            return this.f33373t;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f33377x;
        }

        public boolean hasExpandedType() {
            if ((this.f33368o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasExpandedTypeId() {
            if ((this.f33368o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33368o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33368o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingType() {
            if ((this.f33368o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingTypeId() {
            if ((this.f33368o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33379z;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f33379z = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                if (!getTypeParameter(i10).isInitialized()) {
                    this.f33379z = (byte) 0;
                    return false;
                }
            }
            if (hasUnderlyingType() && !getUnderlyingType().isInitialized()) {
                this.f33379z = (byte) 0;
                return false;
            } else if (hasExpandedType() && !getExpandedType().isInitialized()) {
                this.f33379z = (byte) 0;
                return false;
            } else {
                for (int i11 = 0; i11 < getAnnotationCount(); i11++) {
                    if (!getAnnotation(i11).isInitialized()) {
                        this.f33379z = (byte) 0;
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        this.f33379z = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f33379z = (byte) 0;
                    return false;
                }
                this.f33379z = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33368o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33369p);
            }
            if ((this.f33368o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33370q);
            }
            for (int i10 = 0; i10 < this.f33371r.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f33371r.get(i10));
            }
            if ((this.f33368o & 4) == 4) {
                codedOutputStream.writeMessage(4, this.f33372s);
            }
            if ((this.f33368o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f33373t);
            }
            if ((this.f33368o & 16) == 16) {
                codedOutputStream.writeMessage(6, this.f33374u);
            }
            if ((this.f33368o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f33375v);
            }
            for (int i11 = 0; i11 < this.f33376w.size(); i11++) {
                codedOutputStream.writeMessage(8, (MessageLite) this.f33376w.get(i11));
            }
            for (int i12 = 0; i12 < this.f33377x.size(); i12++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f33377x.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.f33378y.size(); i13++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f33378y.get(i13));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33367i);
        }

        public static Builder newBuilder(TypeAlias typeAlias) {
            return newBuilder().mergeFrom(typeAlias);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeAlias getDefaultInstanceForType() {
            return B;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private TypeAlias(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33379z = (byte) -1;
            this.A = -1;
            this.f33367i = extendableBuilder.getUnknownFields();
        }

        private TypeAlias(boolean z10) {
            this.f33379z = (byte) -1;
            this.A = -1;
            this.f33367i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private TypeAlias(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f33379z = (byte) -1;
            this.A = -1;
            C();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (true) {
                ?? r52 = 128;
                if (!z10) {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            switch (readTag) {
                                case 0:
                                    break;
                                case 8:
                                    this.f33368o |= 1;
                                    this.f33369p = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f33368o |= 2;
                                    this.f33370q = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    if (!(z11 & true)) {
                                        this.f33371r = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33371r.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    builder = (this.f33368o & 4) == 4 ? this.f33372s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33372s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33372s = builder.buildPartial();
                                    }
                                    this.f33368o |= 4;
                                    continue;
                                case 40:
                                    this.f33368o |= 8;
                                    this.f33373t = codedInputStream.readInt32();
                                    continue;
                                case 50:
                                    builder = (this.f33368o & 16) == 16 ? this.f33374u.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33374u = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f33374u = builder.buildPartial();
                                    }
                                    this.f33368o |= 16;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f33368o |= 32;
                                    this.f33375v = codedInputStream.readInt32();
                                    continue;
                                case 66:
                                    if (!(z11 & true)) {
                                        this.f33376w = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33376w.add(codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite));
                                    continue;
                                case 248:
                                    if (!(z11 & true)) {
                                        this.f33377x = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33377x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33377x = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33377x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    break;
                                case 258:
                                    if (!(z11 & true)) {
                                        this.f33378y = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f33378y.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                                    continue;
                                default:
                                    r52 = f(codedInputStream, newInstance, extensionRegistryLite, readTag);
                                    if (r52 == 0) {
                                        break;
                                    } else {
                                        continue;
                                    }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            if (z11 & true) {
                                this.f33371r = Collections.unmodifiableList(this.f33371r);
                            }
                            if ((z11 & true) == r52) {
                                this.f33376w = Collections.unmodifiableList(this.f33376w);
                            }
                            if (z11 & true) {
                                this.f33377x = Collections.unmodifiableList(this.f33377x);
                            }
                            if (z11 & true) {
                                this.f33378y = Collections.unmodifiableList(this.f33378y);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33367i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33367i = newOutput.toByteString();
                            e();
                            throw th2;
                        }
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } else {
                    if (z11 & true) {
                        this.f33371r = Collections.unmodifiableList(this.f33371r);
                    }
                    if (z11 & true) {
                        this.f33376w = Collections.unmodifiableList(this.f33376w);
                    }
                    if (z11 & true) {
                        this.f33377x = Collections.unmodifiableList(this.f33377x);
                    }
                    if (z11 & true) {
                        this.f33378y = Collections.unmodifiableList(this.f33378y);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f33367i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33367i = newOutput.toByteString();
                    e();
                    return;
                }
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeAliasOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeParameter extends GeneratedMessageLite.ExtendableMessage<TypeParameter> implements TypeParameterOrBuilder {
        public static Parser<TypeParameter> PARSER = new a();

        /* renamed from: y  reason: collision with root package name */
        private static final TypeParameter f33391y;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33392i;

        /* renamed from: o  reason: collision with root package name */
        private int f33393o;

        /* renamed from: p  reason: collision with root package name */
        private int f33394p;

        /* renamed from: q  reason: collision with root package name */
        private int f33395q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f33396r;

        /* renamed from: s  reason: collision with root package name */
        private Variance f33397s;

        /* renamed from: t  reason: collision with root package name */
        private List f33398t;

        /* renamed from: u  reason: collision with root package name */
        private List f33399u;

        /* renamed from: v  reason: collision with root package name */
        private int f33400v;

        /* renamed from: w  reason: collision with root package name */
        private byte f33401w;

        /* renamed from: x  reason: collision with root package name */
        private int f33402x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeParameter, Builder> implements TypeParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33403o;

            /* renamed from: p  reason: collision with root package name */
            private int f33404p;

            /* renamed from: q  reason: collision with root package name */
            private int f33405q;

            /* renamed from: r  reason: collision with root package name */
            private boolean f33406r;

            /* renamed from: s  reason: collision with root package name */
            private Variance f33407s = Variance.INV;

            /* renamed from: t  reason: collision with root package name */
            private List f33408t;

            /* renamed from: u  reason: collision with root package name */
            private List f33409u;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33408t = list;
                this.f33409u = list;
                l();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33403o & 32) != 32) {
                    this.f33409u = new ArrayList(this.f33409u);
                    this.f33403o |= 32;
                }
            }

            private void k() {
                if ((this.f33403o & 16) != 16) {
                    this.f33408t = new ArrayList(this.f33408t);
                    this.f33403o |= 16;
                }
            }

            private void l() {
            }

            public TypeParameter buildPartial() {
                TypeParameter typeParameter = new TypeParameter(this);
                int i10 = this.f33403o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeParameter.f33394p = this.f33404p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeParameter.f33395q = this.f33405q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                typeParameter.f33396r = this.f33406r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                typeParameter.f33397s = this.f33407s;
                if ((this.f33403o & 16) == 16) {
                    this.f33408t = Collections.unmodifiableList(this.f33408t);
                    this.f33403o &= -17;
                }
                typeParameter.f33398t = this.f33408t;
                if ((this.f33403o & 32) == 32) {
                    this.f33409u = Collections.unmodifiableList(this.f33409u);
                    this.f33403o &= -33;
                }
                typeParameter.f33399u = this.f33409u;
                typeParameter.f33393o = i11;
                return typeParameter;
            }

            public Type getUpperBound(int i10) {
                return (Type) this.f33408t.get(i10);
            }

            public int getUpperBoundCount() {
                return this.f33408t.size();
            }

            public boolean hasId() {
                if ((this.f33403o & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f33403o & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasId() || !hasName()) {
                    return false;
                }
                for (int i10 = 0; i10 < getUpperBoundCount(); i10++) {
                    if (!getUpperBound(i10).isInitialized()) {
                        return false;
                    }
                }
                if (!e()) {
                    return false;
                }
                return true;
            }

            public Builder setId(int i10) {
                this.f33403o |= 1;
                this.f33404p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33403o |= 2;
                this.f33405q = i10;
                return this;
            }

            public Builder setReified(boolean z10) {
                this.f33403o |= 4;
                this.f33406r = z10;
                return this;
            }

            public Builder setVariance(Variance variance) {
                variance.getClass();
                this.f33403o |= 8;
                this.f33407s = variance;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public TypeParameter build() {
                TypeParameter buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public TypeParameter getDefaultInstanceForType() {
                return TypeParameter.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(TypeParameter typeParameter) {
                if (typeParameter == TypeParameter.getDefaultInstance()) {
                    return this;
                }
                if (typeParameter.hasId()) {
                    setId(typeParameter.getId());
                }
                if (typeParameter.hasName()) {
                    setName(typeParameter.getName());
                }
                if (typeParameter.hasReified()) {
                    setReified(typeParameter.getReified());
                }
                if (typeParameter.hasVariance()) {
                    setVariance(typeParameter.getVariance());
                }
                if (!typeParameter.f33398t.isEmpty()) {
                    if (this.f33408t.isEmpty()) {
                        this.f33408t = typeParameter.f33398t;
                        this.f33403o &= -17;
                    } else {
                        k();
                        this.f33408t.addAll(typeParameter.f33398t);
                    }
                }
                if (!typeParameter.f33399u.isEmpty()) {
                    if (this.f33409u.isEmpty()) {
                        this.f33409u = typeParameter.f33399u;
                        this.f33403o &= -33;
                    } else {
                        j();
                        this.f33409u.addAll(typeParameter.f33399u);
                    }
                }
                f(typeParameter);
                setUnknownFields(getUnknownFields().concat(typeParameter.f33392i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeParameter.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeParameter$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum Variance implements Internal.EnumLite {
            IN(0, 0),
            OUT(1, 1),
            INV(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f33410e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33412d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public Variance findValueByNumber(int i10) {
                    return Variance.valueOf(i10);
                }
            }

            Variance(int i10, int i11) {
                this.f33412d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33412d;
            }

            public static Variance valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return INV;
                    }
                    return OUT;
                }
                return IN;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public TypeParameter parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new TypeParameter(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            TypeParameter typeParameter = new TypeParameter(true);
            f33391y = typeParameter;
            typeParameter.w();
        }

        public static TypeParameter getDefaultInstance() {
            return f33391y;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        private void w() {
            this.f33394p = 0;
            this.f33395q = 0;
            this.f33396r = false;
            this.f33397s = Variance.INV;
            List list = Collections.EMPTY_LIST;
            this.f33398t = list;
            this.f33399u = list;
        }

        public int getId() {
            return this.f33394p;
        }

        public int getName() {
            return this.f33395q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeParameter> getParserForType() {
            return PARSER;
        }

        public boolean getReified() {
            return this.f33396r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33402x;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33393o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33394p);
            } else {
                i10 = 0;
            }
            if ((this.f33393o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33395q);
            }
            if ((this.f33393o & 4) == 4) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f33396r);
            }
            if ((this.f33393o & 8) == 8) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f33397s.getNumber());
            }
            for (int i12 = 0; i12 < this.f33398t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33398t.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33399u.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33399u.get(i14)).intValue());
            }
            int i15 = i10 + i13;
            if (!getUpperBoundIdList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f33400v = i13;
            int j10 = i15 + j() + this.f33392i.size();
            this.f33402x = j10;
            return j10;
        }

        public Type getUpperBound(int i10) {
            return (Type) this.f33398t.get(i10);
        }

        public int getUpperBoundCount() {
            return this.f33398t.size();
        }

        public List<Integer> getUpperBoundIdList() {
            return this.f33399u;
        }

        public List<Type> getUpperBoundList() {
            return this.f33398t;
        }

        public Variance getVariance() {
            return this.f33397s;
        }

        public boolean hasId() {
            if ((this.f33393o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33393o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReified() {
            if ((this.f33393o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasVariance() {
            if ((this.f33393o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33401w;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f33401w = (byte) 0;
                return false;
            } else if (!hasName()) {
                this.f33401w = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getUpperBoundCount(); i10++) {
                    if (!getUpperBound(i10).isInitialized()) {
                        this.f33401w = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f33401w = (byte) 0;
                    return false;
                }
                this.f33401w = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33393o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33394p);
            }
            if ((this.f33393o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33395q);
            }
            if ((this.f33393o & 4) == 4) {
                codedOutputStream.writeBool(3, this.f33396r);
            }
            if ((this.f33393o & 8) == 8) {
                codedOutputStream.writeEnum(4, this.f33397s.getNumber());
            }
            for (int i10 = 0; i10 < this.f33398t.size(); i10++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33398t.get(i10));
            }
            if (getUpperBoundIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(50);
                codedOutputStream.writeRawVarint32(this.f33400v);
            }
            for (int i11 = 0; i11 < this.f33399u.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33399u.get(i11)).intValue());
            }
            k10.writeUntil(1000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33392i);
        }

        public static Builder newBuilder(TypeParameter typeParameter) {
            return newBuilder().mergeFrom(typeParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeParameter getDefaultInstanceForType() {
            return f33391y;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private TypeParameter(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33400v = -1;
            this.f33401w = (byte) -1;
            this.f33402x = -1;
            this.f33392i = extendableBuilder.getUnknownFields();
        }

        private TypeParameter(boolean z10) {
            this.f33400v = -1;
            this.f33401w = (byte) -1;
            this.f33402x = -1;
            this.f33392i = ByteString.EMPTY;
        }

        private TypeParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33400v = -1;
            this.f33401w = (byte) -1;
            this.f33402x = -1;
            w();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33393o |= 1;
                                this.f33394p = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33393o |= 2;
                                this.f33395q = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                this.f33393o |= 4;
                                this.f33396r = codedInputStream.readBool();
                            } else if (readTag == 32) {
                                int readEnum = codedInputStream.readEnum();
                                Variance valueOf = Variance.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33393o |= 8;
                                    this.f33397s = valueOf;
                                }
                            } else if (readTag == 42) {
                                if (!(z11 & true)) {
                                    this.f33398t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33398t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag == 48) {
                                if (!(z11 & true)) {
                                    this.f33399u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33399u.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 50) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33399u = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33399u.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            }
                        }
                        z10 = true;
                    } catch (InvalidProtocolBufferException e10) {
                        throw e10.setUnfinishedMessage(this);
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11 & true) {
                        this.f33398t = Collections.unmodifiableList(this.f33398t);
                    }
                    if (z11 & true) {
                        this.f33399u = Collections.unmodifiableList(this.f33399u);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33392i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33392i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f33398t = Collections.unmodifiableList(this.f33398t);
            }
            if (z11 & true) {
                this.f33399u = Collections.unmodifiableList(this.f33399u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33392i = newOutput.toByteString();
                throw th4;
            }
            this.f33392i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeParameterOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeTable extends GeneratedMessageLite implements TypeTableOrBuilder {
        public static Parser<TypeTable> PARSER = new a();

        /* renamed from: s  reason: collision with root package name */
        private static final TypeTable f33413s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33414e;

        /* renamed from: i  reason: collision with root package name */
        private int f33415i;

        /* renamed from: o  reason: collision with root package name */
        private List f33416o;

        /* renamed from: p  reason: collision with root package name */
        private int f33417p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33418q;

        /* renamed from: r  reason: collision with root package name */
        private int f33419r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<TypeTable, Builder> implements TypeTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33420e;

            /* renamed from: i  reason: collision with root package name */
            private List f33421i = Collections.EMPTY_LIST;

            /* renamed from: o  reason: collision with root package name */
            private int f33422o = -1;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33420e & 1) != 1) {
                    this.f33421i = new ArrayList(this.f33421i);
                    this.f33420e |= 1;
                }
            }

            private void e() {
            }

            public TypeTable buildPartial() {
                TypeTable typeTable = new TypeTable(this);
                int i10 = this.f33420e;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f33421i = Collections.unmodifiableList(this.f33421i);
                    this.f33420e &= -2;
                }
                typeTable.f33416o = this.f33421i;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                typeTable.f33417p = this.f33422o;
                typeTable.f33415i = i11;
                return typeTable;
            }

            public Type getType(int i10) {
                return (Type) this.f33421i.get(i10);
            }

            public int getTypeCount() {
                return this.f33421i.size();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                for (int i10 = 0; i10 < getTypeCount(); i10++) {
                    if (!getType(i10).isInitialized()) {
                        return false;
                    }
                }
                return true;
            }

            public Builder setFirstNullable(int i10) {
                this.f33420e |= 2;
                this.f33422o = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public TypeTable build() {
                TypeTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public TypeTable getDefaultInstanceForType() {
                return TypeTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(TypeTable typeTable) {
                if (typeTable == TypeTable.getDefaultInstance()) {
                    return this;
                }
                if (!typeTable.f33416o.isEmpty()) {
                    if (this.f33421i.isEmpty()) {
                        this.f33421i = typeTable.f33416o;
                        this.f33420e &= -2;
                    } else {
                        d();
                        this.f33421i.addAll(typeTable.f33416o);
                    }
                }
                if (typeTable.hasFirstNullable()) {
                    setFirstNullable(typeTable.getFirstNullable());
                }
                setUnknownFields(getUnknownFields().concat(typeTable.f33414e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.TypeTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$TypeTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public TypeTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new TypeTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            TypeTable typeTable = new TypeTable(true);
            f33413s = typeTable;
            typeTable.m();
        }

        public static TypeTable getDefaultInstance() {
            return f33413s;
        }

        private void m() {
            this.f33416o = Collections.EMPTY_LIST;
            this.f33417p = -1;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getFirstNullable() {
            return this.f33417p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeTable> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33419r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33416o.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33416o.get(i12));
            }
            if ((this.f33415i & 1) == 1) {
                i11 += CodedOutputStream.computeInt32Size(2, this.f33417p);
            }
            int size = i11 + this.f33414e.size();
            this.f33419r = size;
            return size;
        }

        public Type getType(int i10) {
            return (Type) this.f33416o.get(i10);
        }

        public int getTypeCount() {
            return this.f33416o.size();
        }

        public List<Type> getTypeList() {
            return this.f33416o;
        }

        public boolean hasFirstNullable() {
            if ((this.f33415i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33418q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getTypeCount(); i10++) {
                if (!getType(i10).isInitialized()) {
                    this.f33418q = (byte) 0;
                    return false;
                }
            }
            this.f33418q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33416o.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33416o.get(i10));
            }
            if ((this.f33415i & 1) == 1) {
                codedOutputStream.writeInt32(2, this.f33417p);
            }
            codedOutputStream.writeRawBytes(this.f33414e);
        }

        public static Builder newBuilder(TypeTable typeTable) {
            return newBuilder().mergeFrom(typeTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeTable getDefaultInstanceForType() {
            return f33413s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private TypeTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33418q = (byte) -1;
            this.f33419r = -1;
            this.f33414e = builder.getUnknownFields();
        }

        private TypeTable(boolean z10) {
            this.f33418q = (byte) -1;
            this.f33419r = -1;
            this.f33414e = ByteString.EMPTY;
        }

        private TypeTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33418q = (byte) -1;
            this.f33419r = -1;
            m();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 10) {
                                if (!z11) {
                                    this.f33416o = new ArrayList();
                                    z11 = true;
                                }
                                this.f33416o.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33415i |= 1;
                                this.f33417p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11) {
                            this.f33416o = Collections.unmodifiableList(this.f33416o);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33414e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33414e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            if (z11) {
                this.f33416o = Collections.unmodifiableList(this.f33416o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33414e = newOutput.toByteString();
                throw th4;
            }
            this.f33414e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface TypeTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class ValueParameter extends GeneratedMessageLite.ExtendableMessage<ValueParameter> implements ValueParameterOrBuilder {
        public static Parser<ValueParameter> PARSER = new a();

        /* renamed from: x  reason: collision with root package name */
        private static final ValueParameter f33423x;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33424i;

        /* renamed from: o  reason: collision with root package name */
        private int f33425o;

        /* renamed from: p  reason: collision with root package name */
        private int f33426p;

        /* renamed from: q  reason: collision with root package name */
        private int f33427q;

        /* renamed from: r  reason: collision with root package name */
        private Type f33428r;

        /* renamed from: s  reason: collision with root package name */
        private int f33429s;

        /* renamed from: t  reason: collision with root package name */
        private Type f33430t;

        /* renamed from: u  reason: collision with root package name */
        private int f33431u;

        /* renamed from: v  reason: collision with root package name */
        private byte f33432v;

        /* renamed from: w  reason: collision with root package name */
        private int f33433w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<ValueParameter, Builder> implements ValueParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33434o;

            /* renamed from: p  reason: collision with root package name */
            private int f33435p;

            /* renamed from: q  reason: collision with root package name */
            private int f33436q;

            /* renamed from: s  reason: collision with root package name */
            private int f33438s;

            /* renamed from: u  reason: collision with root package name */
            private int f33440u;

            /* renamed from: r  reason: collision with root package name */
            private Type f33437r = Type.getDefaultInstance();

            /* renamed from: t  reason: collision with root package name */
            private Type f33439t = Type.getDefaultInstance();

            private Builder() {
                j();
            }

            static /* synthetic */ Builder h() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
            }

            public ValueParameter buildPartial() {
                ValueParameter valueParameter = new ValueParameter(this);
                int i10 = this.f33434o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                valueParameter.f33426p = this.f33435p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                valueParameter.f33427q = this.f33436q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                valueParameter.f33428r = this.f33437r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                valueParameter.f33429s = this.f33438s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                valueParameter.f33430t = this.f33439t;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                valueParameter.f33431u = this.f33440u;
                valueParameter.f33425o = i11;
                return valueParameter;
            }

            public Type getType() {
                return this.f33437r;
            }

            public Type getVarargElementType() {
                return this.f33439t;
            }

            public boolean hasName() {
                if ((this.f33434o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f33434o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasVarargElementType() {
                if ((this.f33434o & 16) == 16) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                if (!hasName()) {
                    return false;
                }
                if (hasType() && !getType().isInitialized()) {
                    return false;
                }
                if ((hasVarargElementType() && !getVarargElementType().isInitialized()) || !e()) {
                    return false;
                }
                return true;
            }

            public Builder mergeType(Type type) {
                if ((this.f33434o & 4) == 4 && this.f33437r != Type.getDefaultInstance()) {
                    this.f33437r = Type.newBuilder(this.f33437r).mergeFrom(type).buildPartial();
                } else {
                    this.f33437r = type;
                }
                this.f33434o |= 4;
                return this;
            }

            public Builder mergeVarargElementType(Type type) {
                if ((this.f33434o & 16) == 16 && this.f33439t != Type.getDefaultInstance()) {
                    this.f33439t = Type.newBuilder(this.f33439t).mergeFrom(type).buildPartial();
                } else {
                    this.f33439t = type;
                }
                this.f33434o |= 16;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33434o |= 1;
                this.f33435p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33434o |= 2;
                this.f33436q = i10;
                return this;
            }

            public Builder setTypeId(int i10) {
                this.f33434o |= 8;
                this.f33438s = i10;
                return this;
            }

            public Builder setVarargElementTypeId(int i10) {
                this.f33434o |= 32;
                this.f33440u = i10;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public ValueParameter build() {
                ValueParameter buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public ValueParameter getDefaultInstanceForType() {
                return ValueParameter.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(ValueParameter valueParameter) {
                if (valueParameter == ValueParameter.getDefaultInstance()) {
                    return this;
                }
                if (valueParameter.hasFlags()) {
                    setFlags(valueParameter.getFlags());
                }
                if (valueParameter.hasName()) {
                    setName(valueParameter.getName());
                }
                if (valueParameter.hasType()) {
                    mergeType(valueParameter.getType());
                }
                if (valueParameter.hasTypeId()) {
                    setTypeId(valueParameter.getTypeId());
                }
                if (valueParameter.hasVarargElementType()) {
                    mergeVarargElementType(valueParameter.getVarargElementType());
                }
                if (valueParameter.hasVarargElementTypeId()) {
                    setVarargElementTypeId(valueParameter.getVarargElementTypeId());
                }
                f(valueParameter);
                setUnknownFields(getUnknownFields().concat(valueParameter.f33424i));
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.ExtendableBuilder, kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return i().mergeFrom(buildPartial());
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.ValueParameter.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$ValueParameter$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public ValueParameter parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new ValueParameter(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            ValueParameter valueParameter = new ValueParameter(true);
            f33423x = valueParameter;
            valueParameter.u();
        }

        public static ValueParameter getDefaultInstance() {
            return f33423x;
        }

        public static Builder newBuilder() {
            return Builder.h();
        }

        private void u() {
            this.f33426p = 0;
            this.f33427q = 0;
            this.f33428r = Type.getDefaultInstance();
            this.f33429s = 0;
            this.f33430t = Type.getDefaultInstance();
            this.f33431u = 0;
        }

        public int getFlags() {
            return this.f33426p;
        }

        public int getName() {
            return this.f33427q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<ValueParameter> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33433w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33425o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33426p);
            } else {
                i10 = 0;
            }
            if ((this.f33425o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33427q);
            }
            if ((this.f33425o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33428r);
            }
            if ((this.f33425o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33430t);
            }
            if ((this.f33425o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33429s);
            }
            if ((this.f33425o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f33431u);
            }
            int j10 = i10 + j() + this.f33424i.size();
            this.f33433w = j10;
            return j10;
        }

        public Type getType() {
            return this.f33428r;
        }

        public int getTypeId() {
            return this.f33429s;
        }

        public Type getVarargElementType() {
            return this.f33430t;
        }

        public int getVarargElementTypeId() {
            return this.f33431u;
        }

        public boolean hasFlags() {
            if ((this.f33425o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33425o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasType() {
            if ((this.f33425o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasTypeId() {
            if ((this.f33425o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementType() {
            if ((this.f33425o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementTypeId() {
            if ((this.f33425o & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33432v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f33432v = (byte) 0;
                return false;
            } else if (hasType() && !getType().isInitialized()) {
                this.f33432v = (byte) 0;
                return false;
            } else if (hasVarargElementType() && !getVarargElementType().isInitialized()) {
                this.f33432v = (byte) 0;
                return false;
            } else if (!i()) {
                this.f33432v = (byte) 0;
                return false;
            } else {
                this.f33432v = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33425o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33426p);
            }
            if ((this.f33425o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33427q);
            }
            if ((this.f33425o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f33428r);
            }
            if ((this.f33425o & 16) == 16) {
                codedOutputStream.writeMessage(4, this.f33430t);
            }
            if ((this.f33425o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f33429s);
            }
            if ((this.f33425o & 32) == 32) {
                codedOutputStream.writeInt32(6, this.f33431u);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33424i);
        }

        public static Builder newBuilder(ValueParameter valueParameter) {
            return newBuilder().mergeFrom(valueParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public ValueParameter getDefaultInstanceForType() {
            return f33423x;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private ValueParameter(GeneratedMessageLite.ExtendableBuilder extendableBuilder) {
            super(extendableBuilder);
            this.f33432v = (byte) -1;
            this.f33433w = -1;
            this.f33424i = extendableBuilder.getUnknownFields();
        }

        private ValueParameter(boolean z10) {
            this.f33432v = (byte) -1;
            this.f33433w = -1;
            this.f33424i = ByteString.EMPTY;
        }

        private ValueParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f33432v = (byte) -1;
            this.f33433w = -1;
            u();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33425o |= 1;
                                this.f33426p = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (readTag == 26) {
                                    builder = (this.f33425o & 4) == 4 ? this.f33428r.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33428r = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33428r = builder.buildPartial();
                                    }
                                    this.f33425o |= 4;
                                } else if (readTag == 34) {
                                    builder = (this.f33425o & 16) == 16 ? this.f33430t.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33430t = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f33430t = builder.buildPartial();
                                    }
                                    this.f33425o |= 16;
                                } else if (readTag == 40) {
                                    this.f33425o |= 8;
                                    this.f33429s = codedInputStream.readInt32();
                                } else if (readTag != 48) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    this.f33425o |= 32;
                                    this.f33431u = codedInputStream.readInt32();
                                }
                            } else {
                                this.f33425o |= 2;
                                this.f33427q = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33424i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33424i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33424i = newOutput.toByteString();
                throw th4;
            }
            this.f33424i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface ValueParameterOrBuilder extends GeneratedMessageLite.ExtendableMessageOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class VersionRequirement extends GeneratedMessageLite implements VersionRequirementOrBuilder {
        public static Parser<VersionRequirement> PARSER = new a();

        /* renamed from: w  reason: collision with root package name */
        private static final VersionRequirement f33441w;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33442e;

        /* renamed from: i  reason: collision with root package name */
        private int f33443i;

        /* renamed from: o  reason: collision with root package name */
        private int f33444o;

        /* renamed from: p  reason: collision with root package name */
        private int f33445p;

        /* renamed from: q  reason: collision with root package name */
        private Level f33446q;

        /* renamed from: r  reason: collision with root package name */
        private int f33447r;

        /* renamed from: s  reason: collision with root package name */
        private int f33448s;

        /* renamed from: t  reason: collision with root package name */
        private VersionKind f33449t;

        /* renamed from: u  reason: collision with root package name */
        private byte f33450u;

        /* renamed from: v  reason: collision with root package name */
        private int f33451v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirement, Builder> implements VersionRequirementOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33452e;

            /* renamed from: i  reason: collision with root package name */
            private int f33453i;

            /* renamed from: o  reason: collision with root package name */
            private int f33454o;

            /* renamed from: q  reason: collision with root package name */
            private int f33456q;

            /* renamed from: r  reason: collision with root package name */
            private int f33457r;

            /* renamed from: p  reason: collision with root package name */
            private Level f33455p = Level.ERROR;

            /* renamed from: s  reason: collision with root package name */
            private VersionKind f33458s = VersionKind.LANGUAGE_VERSION;

            private Builder() {
                d();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
            }

            public VersionRequirement buildPartial() {
                VersionRequirement versionRequirement = new VersionRequirement(this);
                int i10 = this.f33452e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                versionRequirement.f33444o = this.f33453i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                versionRequirement.f33445p = this.f33454o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                versionRequirement.f33446q = this.f33455p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                versionRequirement.f33447r = this.f33456q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                versionRequirement.f33448s = this.f33457r;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                versionRequirement.f33449t = this.f33458s;
                versionRequirement.f33443i = i11;
                return versionRequirement;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setErrorCode(int i10) {
                this.f33452e |= 8;
                this.f33456q = i10;
                return this;
            }

            public Builder setLevel(Level level) {
                level.getClass();
                this.f33452e |= 4;
                this.f33455p = level;
                return this;
            }

            public Builder setMessage(int i10) {
                this.f33452e |= 16;
                this.f33457r = i10;
                return this;
            }

            public Builder setVersion(int i10) {
                this.f33452e |= 1;
                this.f33453i = i10;
                return this;
            }

            public Builder setVersionFull(int i10) {
                this.f33452e |= 2;
                this.f33454o = i10;
                return this;
            }

            public Builder setVersionKind(VersionKind versionKind) {
                versionKind.getClass();
                this.f33452e |= 32;
                this.f33458s = versionKind;
                return this;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public VersionRequirement build() {
                VersionRequirement buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public VersionRequirement getDefaultInstanceForType() {
                return VersionRequirement.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(VersionRequirement versionRequirement) {
                if (versionRequirement == VersionRequirement.getDefaultInstance()) {
                    return this;
                }
                if (versionRequirement.hasVersion()) {
                    setVersion(versionRequirement.getVersion());
                }
                if (versionRequirement.hasVersionFull()) {
                    setVersionFull(versionRequirement.getVersionFull());
                }
                if (versionRequirement.hasLevel()) {
                    setLevel(versionRequirement.getLevel());
                }
                if (versionRequirement.hasErrorCode()) {
                    setErrorCode(versionRequirement.getErrorCode());
                }
                if (versionRequirement.hasMessage()) {
                    setMessage(versionRequirement.getMessage());
                }
                if (versionRequirement.hasVersionKind()) {
                    setVersionKind(versionRequirement.getVersionKind());
                }
                setUnknownFields(getUnknownFields().concat(versionRequirement.f33442e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirement.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirement$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum Level implements Internal.EnumLite {
            WARNING(0, 0),
            ERROR(1, 1),
            HIDDEN(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f33459e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33461d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public Level findValueByNumber(int i10) {
                    return Level.valueOf(i10);
                }
            }

            Level(int i10, int i11) {
                this.f33461d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33461d;
            }

            public static Level valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return HIDDEN;
                    }
                    return ERROR;
                }
                return WARNING;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public enum VersionKind implements Internal.EnumLite {
            LANGUAGE_VERSION(0, 0),
            COMPILER_VERSION(1, 1),
            API_VERSION(2, 2);
            

            /* renamed from: e  reason: collision with root package name */
            private static Internal.EnumLiteMap f33462e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33464d;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            static class a implements Internal.EnumLiteMap {
                a() {
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
                /* renamed from: a */
                public VersionKind findValueByNumber(int i10) {
                    return VersionKind.valueOf(i10);
                }
            }

            VersionKind(int i10, int i11) {
                this.f33464d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33464d;
            }

            public static VersionKind valueOf(int i10) {
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 != 2) {
                            return null;
                        }
                        return API_VERSION;
                    }
                    return COMPILER_VERSION;
                }
                return LANGUAGE_VERSION;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public VersionRequirement parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new VersionRequirement(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            VersionRequirement versionRequirement = new VersionRequirement(true);
            f33441w = versionRequirement;
            versionRequirement.p();
        }

        public static VersionRequirement getDefaultInstance() {
            return f33441w;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void p() {
            this.f33444o = 0;
            this.f33445p = 0;
            this.f33446q = Level.ERROR;
            this.f33447r = 0;
            this.f33448s = 0;
            this.f33449t = VersionKind.LANGUAGE_VERSION;
        }

        public int getErrorCode() {
            return this.f33447r;
        }

        public Level getLevel() {
            return this.f33446q;
        }

        public int getMessage() {
            return this.f33448s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirement> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33451v;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33443i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33444o);
            } else {
                i10 = 0;
            }
            if ((this.f33443i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33445p);
            }
            if ((this.f33443i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f33446q.getNumber());
            }
            if ((this.f33443i & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f33447r);
            }
            if ((this.f33443i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33448s);
            }
            if ((this.f33443i & 32) == 32) {
                i10 += CodedOutputStream.computeEnumSize(6, this.f33449t.getNumber());
            }
            int size = i10 + this.f33442e.size();
            this.f33451v = size;
            return size;
        }

        public int getVersion() {
            return this.f33444o;
        }

        public int getVersionFull() {
            return this.f33445p;
        }

        public VersionKind getVersionKind() {
            return this.f33449t;
        }

        public boolean hasErrorCode() {
            if ((this.f33443i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasLevel() {
            if ((this.f33443i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasMessage() {
            if ((this.f33443i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVersion() {
            if ((this.f33443i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionFull() {
            if ((this.f33443i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasVersionKind() {
            if ((this.f33443i & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33450u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33450u = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33443i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33444o);
            }
            if ((this.f33443i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33445p);
            }
            if ((this.f33443i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f33446q.getNumber());
            }
            if ((this.f33443i & 8) == 8) {
                codedOutputStream.writeInt32(4, this.f33447r);
            }
            if ((this.f33443i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f33448s);
            }
            if ((this.f33443i & 32) == 32) {
                codedOutputStream.writeEnum(6, this.f33449t.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f33442e);
        }

        public static Builder newBuilder(VersionRequirement versionRequirement) {
            return newBuilder().mergeFrom(versionRequirement);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirement getDefaultInstanceForType() {
            return f33441w;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private VersionRequirement(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33450u = (byte) -1;
            this.f33451v = -1;
            this.f33442e = builder.getUnknownFields();
        }

        private VersionRequirement(boolean z10) {
            this.f33450u = (byte) -1;
            this.f33451v = -1;
            this.f33442e = ByteString.EMPTY;
        }

        private VersionRequirement(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33450u = (byte) -1;
            this.f33451v = -1;
            p();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            while (!z10) {
                try {
                    try {
                        int readTag = codedInputStream.readTag();
                        if (readTag != 0) {
                            if (readTag == 8) {
                                this.f33443i |= 1;
                                this.f33444o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33443i |= 2;
                                this.f33445p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                Level valueOf = Level.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33443i |= 4;
                                    this.f33446q = valueOf;
                                }
                            } else if (readTag == 32) {
                                this.f33443i |= 8;
                                this.f33447r = codedInputStream.readInt32();
                            } else if (readTag == 40) {
                                this.f33443i |= 16;
                                this.f33448s = codedInputStream.readInt32();
                            } else if (readTag != 48) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int readEnum2 = codedInputStream.readEnum();
                                VersionKind valueOf2 = VersionKind.valueOf(readEnum2);
                                if (valueOf2 == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum2);
                                } else {
                                    this.f33443i |= 32;
                                    this.f33449t = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33442e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33442e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } catch (InvalidProtocolBufferException e10) {
                    throw e10.setUnfinishedMessage(this);
                } catch (IOException e11) {
                    throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33442e = newOutput.toByteString();
                throw th4;
            }
            this.f33442e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface VersionRequirementOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class VersionRequirementTable extends GeneratedMessageLite implements VersionRequirementTableOrBuilder {
        public static Parser<VersionRequirementTable> PARSER = new a();

        /* renamed from: q  reason: collision with root package name */
        private static final VersionRequirementTable f33465q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33466e;

        /* renamed from: i  reason: collision with root package name */
        private List f33467i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33468o;

        /* renamed from: p  reason: collision with root package name */
        private int f33469p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirementTable, Builder> implements VersionRequirementTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33470e;

            /* renamed from: i  reason: collision with root package name */
            private List f33471i = Collections.EMPTY_LIST;

            private Builder() {
                e();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33470e & 1) != 1) {
                    this.f33471i = new ArrayList(this.f33471i);
                    this.f33470e |= 1;
                }
            }

            private void e() {
            }

            public VersionRequirementTable buildPartial() {
                VersionRequirementTable versionRequirementTable = new VersionRequirementTable(this);
                if ((this.f33470e & 1) == 1) {
                    this.f33471i = Collections.unmodifiableList(this.f33471i);
                    this.f33470e &= -2;
                }
                versionRequirementTable.f33467i = this.f33471i;
                return versionRequirementTable;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            public VersionRequirementTable build() {
                VersionRequirementTable buildPartial = buildPartial();
                if (buildPartial.isInitialized()) {
                    return buildPartial;
                }
                throw AbstractMessageLite.Builder.a(buildPartial);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public VersionRequirementTable getDefaultInstanceForType() {
                return VersionRequirementTable.getDefaultInstance();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder
            public Builder clone() {
                return c().mergeFrom(buildPartial());
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite.Builder
            public Builder mergeFrom(VersionRequirementTable versionRequirementTable) {
                if (versionRequirementTable == VersionRequirementTable.getDefaultInstance()) {
                    return this;
                }
                if (!versionRequirementTable.f33467i.isEmpty()) {
                    if (this.f33471i.isEmpty()) {
                        this.f33471i = versionRequirementTable.f33467i;
                        this.f33470e &= -2;
                    } else {
                        d();
                        this.f33471i.addAll(versionRequirementTable.f33467i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(versionRequirementTable.f33466e));
                return this;
            }

            /* JADX WARN: Removed duplicated region for block: B:15:0x001d  */
            @Override // kotlin.reflect.jvm.internal.impl.protobuf.AbstractMessageLite.Builder, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite.Builder
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable.Builder mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream r3, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite r4) {
                /*
                    r2 = this;
                    r0 = 0
                    kotlin.reflect.jvm.internal.impl.protobuf.Parser<kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable> r1 = kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable.PARSER     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    java.lang.Object r3 = r1.parsePartialFrom(r3, r4)     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable r3 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable) r3     // Catch: java.lang.Throwable -> Lf kotlin.reflect.jvm.internal.impl.protobuf.InvalidProtocolBufferException -> L11
                    if (r3 == 0) goto Le
                    r2.mergeFrom(r3)
                Le:
                    return r2
                Lf:
                    r3 = move-exception
                    goto L1b
                L11:
                    r3 = move-exception
                    kotlin.reflect.jvm.internal.impl.protobuf.MessageLite r4 = r3.getUnfinishedMessage()     // Catch: java.lang.Throwable -> Lf
                    kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable r4 = (kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable) r4     // Catch: java.lang.Throwable -> Lf
                    throw r3     // Catch: java.lang.Throwable -> L19
                L19:
                    r3 = move-exception
                    r0 = r4
                L1b:
                    if (r0 == 0) goto L20
                    r2.mergeFrom(r0)
                L20:
                    throw r3
                */
                throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf.VersionRequirementTable.Builder.mergeFrom(kotlin.reflect.jvm.internal.impl.protobuf.CodedInputStream, kotlin.reflect.jvm.internal.impl.protobuf.ExtensionRegistryLite):kotlin.reflect.jvm.internal.impl.metadata.ProtoBuf$VersionRequirementTable$Builder");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a extends AbstractParser {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Parser
            /* renamed from: c */
            public VersionRequirementTable parsePartialFrom(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                return new VersionRequirementTable(codedInputStream, extensionRegistryLite);
            }
        }

        static {
            VersionRequirementTable versionRequirementTable = new VersionRequirementTable(true);
            f33465q = versionRequirementTable;
            versionRequirementTable.k();
        }

        public static VersionRequirementTable getDefaultInstance() {
            return f33465q;
        }

        private void k() {
            this.f33467i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirementTable> getParserForType() {
            return PARSER;
        }

        public int getRequirementCount() {
            return this.f33467i.size();
        }

        public List<VersionRequirement> getRequirementList() {
            return this.f33467i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33469p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33467i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33467i.get(i12));
            }
            int size = i11 + this.f33466e.size();
            this.f33469p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33468o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f33468o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33467i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33467i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33466e);
        }

        public static Builder newBuilder(VersionRequirementTable versionRequirementTable) {
            return newBuilder().mergeFrom(versionRequirementTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirementTable getDefaultInstanceForType() {
            return f33465q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder newBuilderForType() {
            return newBuilder();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Builder toBuilder() {
            return newBuilder(this);
        }

        private VersionRequirementTable(GeneratedMessageLite.Builder builder) {
            super(builder);
            this.f33468o = (byte) -1;
            this.f33469p = -1;
            this.f33466e = builder.getUnknownFields();
        }

        private VersionRequirementTable(boolean z10) {
            this.f33468o = (byte) -1;
            this.f33469p = -1;
            this.f33466e = ByteString.EMPTY;
        }

        private VersionRequirementTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33468o = (byte) -1;
            this.f33469p = -1;
            k();
            ByteString.Output newOutput = ByteString.newOutput();
            CodedOutputStream newInstance = CodedOutputStream.newInstance(newOutput, 1);
            boolean z10 = false;
            boolean z11 = false;
            while (!z10) {
                try {
                    try {
                        try {
                            int readTag = codedInputStream.readTag();
                            if (readTag != 0) {
                                if (readTag != 10) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    if (!z11) {
                                        this.f33467i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33467i.add(codedInputStream.readMessage(VersionRequirement.PARSER, extensionRegistryLite));
                                }
                            }
                            z10 = true;
                        } catch (InvalidProtocolBufferException e10) {
                            throw e10.setUnfinishedMessage(this);
                        }
                    } catch (IOException e11) {
                        throw new InvalidProtocolBufferException(e11.getMessage()).setUnfinishedMessage(this);
                    }
                } catch (Throwable th2) {
                    if (z11) {
                        this.f33467i = Collections.unmodifiableList(this.f33467i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33466e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33466e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33467i = Collections.unmodifiableList(this.f33467i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33466e = newOutput.toByteString();
                throw th4;
            }
            this.f33466e = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface VersionRequirementTableOrBuilder extends MessageLiteOrBuilder {
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public enum Visibility implements Internal.EnumLite {
        INTERNAL(0, 0),
        PRIVATE(1, 1),
        PROTECTED(2, 2),
        PUBLIC(3, 3),
        PRIVATE_TO_THIS(4, 4),
        LOCAL(5, 5);
        

        /* renamed from: e  reason: collision with root package name */
        private static Internal.EnumLiteMap f33472e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33474d;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        static class a implements Internal.EnumLiteMap {
            a() {
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLiteMap
            /* renamed from: a */
            public Visibility findValueByNumber(int i10) {
                return Visibility.valueOf(i10);
            }
        }

        Visibility(int i10, int i11) {
            this.f33474d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33474d;
        }

        public static Visibility valueOf(int i10) {
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 != 3) {
                            if (i10 != 4) {
                                if (i10 != 5) {
                                    return null;
                                }
                                return LOCAL;
                            }
                            return PRIVATE_TO_THIS;
                        }
                        return PUBLIC;
                    }
                    return PROTECTED;
                }
                return PRIVATE;
            }
            return INTERNAL;
        }
    }
}
