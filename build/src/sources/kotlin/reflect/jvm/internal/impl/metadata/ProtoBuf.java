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
        private static final Annotation f33752s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33753e;

        /* renamed from: i  reason: collision with root package name */
        private int f33754i;

        /* renamed from: o  reason: collision with root package name */
        private int f33755o;

        /* renamed from: p  reason: collision with root package name */
        private List f33756p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33757q;

        /* renamed from: r  reason: collision with root package name */
        private int f33758r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: s  reason: collision with root package name */
            private static final Argument f33759s;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f33760e;

            /* renamed from: i  reason: collision with root package name */
            private int f33761i;

            /* renamed from: o  reason: collision with root package name */
            private int f33762o;

            /* renamed from: p  reason: collision with root package name */
            private Value f33763p;

            /* renamed from: q  reason: collision with root package name */
            private byte f33764q;

            /* renamed from: r  reason: collision with root package name */
            private int f33765r;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f33766e;

                /* renamed from: i  reason: collision with root package name */
                private int f33767i;

                /* renamed from: o  reason: collision with root package name */
                private Value f33768o = Value.getDefaultInstance();

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
                    int i10 = this.f33766e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f33762o = this.f33767i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f33763p = this.f33768o;
                    argument.f33761i = i11;
                    return argument;
                }

                public Value getValue() {
                    return this.f33768o;
                }

                public boolean hasNameId() {
                    if ((this.f33766e & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                public boolean hasValue() {
                    if ((this.f33766e & 2) == 2) {
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
                    if ((this.f33766e & 2) == 2 && this.f33768o != Value.getDefaultInstance()) {
                        this.f33768o = Value.newBuilder(this.f33768o).mergeFrom(value).buildPartial();
                    } else {
                        this.f33768o = value;
                    }
                    this.f33766e |= 2;
                    return this;
                }

                public Builder setNameId(int i10) {
                    this.f33766e |= 1;
                    this.f33767i = i10;
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
                    setUnknownFields(getUnknownFields().concat(argument.f33760e));
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
                private final ByteString f33769e;

                /* renamed from: i  reason: collision with root package name */
                private int f33770i;

                /* renamed from: o  reason: collision with root package name */
                private Type f33771o;

                /* renamed from: p  reason: collision with root package name */
                private long f33772p;

                /* renamed from: q  reason: collision with root package name */
                private float f33773q;

                /* renamed from: r  reason: collision with root package name */
                private double f33774r;

                /* renamed from: s  reason: collision with root package name */
                private int f33775s;

                /* renamed from: t  reason: collision with root package name */
                private int f33776t;

                /* renamed from: u  reason: collision with root package name */
                private int f33777u;

                /* renamed from: v  reason: collision with root package name */
                private Annotation f33778v;

                /* renamed from: w  reason: collision with root package name */
                private List f33779w;

                /* renamed from: x  reason: collision with root package name */
                private int f33780x;

                /* renamed from: y  reason: collision with root package name */
                private int f33781y;

                /* renamed from: z  reason: collision with root package name */
                private byte f33782z;

                /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
                public static final class Builder extends GeneratedMessageLite.Builder<Value, Builder> implements ValueOrBuilder {

                    /* renamed from: e  reason: collision with root package name */
                    private int f33783e;

                    /* renamed from: o  reason: collision with root package name */
                    private long f33785o;

                    /* renamed from: p  reason: collision with root package name */
                    private float f33786p;

                    /* renamed from: q  reason: collision with root package name */
                    private double f33787q;

                    /* renamed from: r  reason: collision with root package name */
                    private int f33788r;

                    /* renamed from: s  reason: collision with root package name */
                    private int f33789s;

                    /* renamed from: t  reason: collision with root package name */
                    private int f33790t;

                    /* renamed from: w  reason: collision with root package name */
                    private int f33793w;

                    /* renamed from: x  reason: collision with root package name */
                    private int f33794x;

                    /* renamed from: i  reason: collision with root package name */
                    private Type f33784i = Type.BYTE;

                    /* renamed from: u  reason: collision with root package name */
                    private Annotation f33791u = Annotation.getDefaultInstance();

                    /* renamed from: v  reason: collision with root package name */
                    private List f33792v = Collections.EMPTY_LIST;

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
                        if ((this.f33783e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                            this.f33792v = new ArrayList(this.f33792v);
                            this.f33783e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                    }

                    private void e() {
                    }

                    public Value buildPartial() {
                        Value value = new Value(this);
                        int i10 = this.f33783e;
                        int i11 = 1;
                        if ((i10 & 1) != 1) {
                            i11 = 0;
                        }
                        value.f33771o = this.f33784i;
                        if ((i10 & 2) == 2) {
                            i11 |= 2;
                        }
                        value.f33772p = this.f33785o;
                        if ((i10 & 4) == 4) {
                            i11 |= 4;
                        }
                        value.f33773q = this.f33786p;
                        if ((i10 & 8) == 8) {
                            i11 |= 8;
                        }
                        value.f33774r = this.f33787q;
                        if ((i10 & 16) == 16) {
                            i11 |= 16;
                        }
                        value.f33775s = this.f33788r;
                        if ((i10 & 32) == 32) {
                            i11 |= 32;
                        }
                        value.f33776t = this.f33789s;
                        if ((i10 & 64) == 64) {
                            i11 |= 64;
                        }
                        value.f33777u = this.f33790t;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        }
                        value.f33778v = this.f33791u;
                        if ((this.f33783e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                            this.f33792v = Collections.unmodifiableList(this.f33792v);
                            this.f33783e &= -257;
                        }
                        value.f33779w = this.f33792v;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                        }
                        value.f33780x = this.f33793w;
                        if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                            i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        }
                        value.f33781y = this.f33794x;
                        value.f33770i = i11;
                        return value;
                    }

                    public Annotation getAnnotation() {
                        return this.f33791u;
                    }

                    public Value getArrayElement(int i10) {
                        return (Value) this.f33792v.get(i10);
                    }

                    public int getArrayElementCount() {
                        return this.f33792v.size();
                    }

                    public boolean hasAnnotation() {
                        if ((this.f33783e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
                        if ((this.f33783e & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 && this.f33791u != Annotation.getDefaultInstance()) {
                            this.f33791u = Annotation.newBuilder(this.f33791u).mergeFrom(annotation).buildPartial();
                        } else {
                            this.f33791u = annotation;
                        }
                        this.f33783e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                        return this;
                    }

                    public Builder setArrayDimensionCount(int i10) {
                        this.f33783e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                        this.f33793w = i10;
                        return this;
                    }

                    public Builder setClassId(int i10) {
                        this.f33783e |= 32;
                        this.f33789s = i10;
                        return this;
                    }

                    public Builder setDoubleValue(double d10) {
                        this.f33783e |= 8;
                        this.f33787q = d10;
                        return this;
                    }

                    public Builder setEnumValueId(int i10) {
                        this.f33783e |= 64;
                        this.f33790t = i10;
                        return this;
                    }

                    public Builder setFlags(int i10) {
                        this.f33783e |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                        this.f33794x = i10;
                        return this;
                    }

                    public Builder setFloatValue(float f10) {
                        this.f33783e |= 4;
                        this.f33786p = f10;
                        return this;
                    }

                    public Builder setIntValue(long j10) {
                        this.f33783e |= 2;
                        this.f33785o = j10;
                        return this;
                    }

                    public Builder setStringValue(int i10) {
                        this.f33783e |= 16;
                        this.f33788r = i10;
                        return this;
                    }

                    public Builder setType(Type type) {
                        type.getClass();
                        this.f33783e |= 1;
                        this.f33784i = type;
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
                        if (!value.f33779w.isEmpty()) {
                            if (this.f33792v.isEmpty()) {
                                this.f33792v = value.f33779w;
                                this.f33783e &= -257;
                            } else {
                                d();
                                this.f33792v.addAll(value.f33779w);
                            }
                        }
                        if (value.hasArrayDimensionCount()) {
                            setArrayDimensionCount(value.getArrayDimensionCount());
                        }
                        if (value.hasFlags()) {
                            setFlags(value.getFlags());
                        }
                        setUnknownFields(getUnknownFields().concat(value.f33769e));
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
                    private static Internal.EnumLiteMap f33795e = new a();

                    /* renamed from: d  reason: collision with root package name */
                    private final int f33797d;

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
                        this.f33797d = i11;
                    }

                    @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                    public final int getNumber() {
                        return this.f33797d;
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
                    this.f33771o = Type.BYTE;
                    this.f33772p = 0L;
                    this.f33773q = 0.0f;
                    this.f33774r = 0.0d;
                    this.f33775s = 0;
                    this.f33776t = 0;
                    this.f33777u = 0;
                    this.f33778v = Annotation.getDefaultInstance();
                    this.f33779w = Collections.EMPTY_LIST;
                    this.f33780x = 0;
                    this.f33781y = 0;
                }

                public Annotation getAnnotation() {
                    return this.f33778v;
                }

                public int getArrayDimensionCount() {
                    return this.f33780x;
                }

                public Value getArrayElement(int i10) {
                    return (Value) this.f33779w.get(i10);
                }

                public int getArrayElementCount() {
                    return this.f33779w.size();
                }

                public List<Value> getArrayElementList() {
                    return this.f33779w;
                }

                public int getClassId() {
                    return this.f33776t;
                }

                public double getDoubleValue() {
                    return this.f33774r;
                }

                public int getEnumValueId() {
                    return this.f33777u;
                }

                public int getFlags() {
                    return this.f33781y;
                }

                public float getFloatValue() {
                    return this.f33773q;
                }

                public long getIntValue() {
                    return this.f33772p;
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
                    if ((this.f33770i & 1) == 1) {
                        i10 = CodedOutputStream.computeEnumSize(1, this.f33771o.getNumber());
                    } else {
                        i10 = 0;
                    }
                    if ((this.f33770i & 2) == 2) {
                        i10 += CodedOutputStream.computeSInt64Size(2, this.f33772p);
                    }
                    if ((this.f33770i & 4) == 4) {
                        i10 += CodedOutputStream.computeFloatSize(3, this.f33773q);
                    }
                    if ((this.f33770i & 8) == 8) {
                        i10 += CodedOutputStream.computeDoubleSize(4, this.f33774r);
                    }
                    if ((this.f33770i & 16) == 16) {
                        i10 += CodedOutputStream.computeInt32Size(5, this.f33775s);
                    }
                    if ((this.f33770i & 32) == 32) {
                        i10 += CodedOutputStream.computeInt32Size(6, this.f33776t);
                    }
                    if ((this.f33770i & 64) == 64) {
                        i10 += CodedOutputStream.computeInt32Size(7, this.f33777u);
                    }
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        i10 += CodedOutputStream.computeMessageSize(8, this.f33778v);
                    }
                    for (int i12 = 0; i12 < this.f33779w.size(); i12++) {
                        i10 += CodedOutputStream.computeMessageSize(9, (MessageLite) this.f33779w.get(i12));
                    }
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        i10 += CodedOutputStream.computeInt32Size(10, this.f33781y);
                    }
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        i10 += CodedOutputStream.computeInt32Size(11, this.f33780x);
                    }
                    int size = i10 + this.f33769e.size();
                    this.A = size;
                    return size;
                }

                public int getStringValue() {
                    return this.f33775s;
                }

                public Type getType() {
                    return this.f33771o;
                }

                public boolean hasAnnotation() {
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        return true;
                    }
                    return false;
                }

                public boolean hasArrayDimensionCount() {
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        return true;
                    }
                    return false;
                }

                public boolean hasClassId() {
                    if ((this.f33770i & 32) == 32) {
                        return true;
                    }
                    return false;
                }

                public boolean hasDoubleValue() {
                    if ((this.f33770i & 8) == 8) {
                        return true;
                    }
                    return false;
                }

                public boolean hasEnumValueId() {
                    if ((this.f33770i & 64) == 64) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFlags() {
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        return true;
                    }
                    return false;
                }

                public boolean hasFloatValue() {
                    if ((this.f33770i & 4) == 4) {
                        return true;
                    }
                    return false;
                }

                public boolean hasIntValue() {
                    if ((this.f33770i & 2) == 2) {
                        return true;
                    }
                    return false;
                }

                public boolean hasStringValue() {
                    if ((this.f33770i & 16) == 16) {
                        return true;
                    }
                    return false;
                }

                public boolean hasType() {
                    if ((this.f33770i & 1) == 1) {
                        return true;
                    }
                    return false;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
                public final boolean isInitialized() {
                    byte b10 = this.f33782z;
                    if (b10 == 1) {
                        return true;
                    }
                    if (b10 == 0) {
                        return false;
                    }
                    if (hasAnnotation() && !getAnnotation().isInitialized()) {
                        this.f33782z = (byte) 0;
                        return false;
                    }
                    for (int i10 = 0; i10 < getArrayElementCount(); i10++) {
                        if (!getArrayElement(i10).isInitialized()) {
                            this.f33782z = (byte) 0;
                            return false;
                        }
                    }
                    this.f33782z = (byte) 1;
                    return true;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
                public void writeTo(CodedOutputStream codedOutputStream) {
                    getSerializedSize();
                    if ((this.f33770i & 1) == 1) {
                        codedOutputStream.writeEnum(1, this.f33771o.getNumber());
                    }
                    if ((this.f33770i & 2) == 2) {
                        codedOutputStream.writeSInt64(2, this.f33772p);
                    }
                    if ((this.f33770i & 4) == 4) {
                        codedOutputStream.writeFloat(3, this.f33773q);
                    }
                    if ((this.f33770i & 8) == 8) {
                        codedOutputStream.writeDouble(4, this.f33774r);
                    }
                    if ((this.f33770i & 16) == 16) {
                        codedOutputStream.writeInt32(5, this.f33775s);
                    }
                    if ((this.f33770i & 32) == 32) {
                        codedOutputStream.writeInt32(6, this.f33776t);
                    }
                    if ((this.f33770i & 64) == 64) {
                        codedOutputStream.writeInt32(7, this.f33777u);
                    }
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                        codedOutputStream.writeMessage(8, this.f33778v);
                    }
                    for (int i10 = 0; i10 < this.f33779w.size(); i10++) {
                        codedOutputStream.writeMessage(9, (MessageLite) this.f33779w.get(i10));
                    }
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                        codedOutputStream.writeInt32(10, this.f33781y);
                    }
                    if ((this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                        codedOutputStream.writeInt32(11, this.f33780x);
                    }
                    codedOutputStream.writeRawBytes(this.f33769e);
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
                    this.f33782z = (byte) -1;
                    this.A = -1;
                    this.f33769e = builder.getUnknownFields();
                }

                private Value(boolean z10) {
                    this.f33782z = (byte) -1;
                    this.A = -1;
                    this.f33769e = ByteString.EMPTY;
                }

                /* JADX WARN: Multi-variable type inference failed */
                /* JADX WARN: Type inference failed for: r5v0 */
                /* JADX WARN: Type inference failed for: r5v1 */
                /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
                private Value(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                    this.f33782z = (byte) -1;
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
                                                this.f33770i |= 1;
                                                this.f33771o = valueOf;
                                                continue;
                                            }
                                        case 16:
                                            this.f33770i |= 2;
                                            this.f33772p = codedInputStream.readSInt64();
                                            continue;
                                        case 29:
                                            this.f33770i |= 4;
                                            this.f33773q = codedInputStream.readFloat();
                                            continue;
                                        case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                                            this.f33770i |= 8;
                                            this.f33774r = codedInputStream.readDouble();
                                            continue;
                                        case 40:
                                            this.f33770i |= 16;
                                            this.f33775s = codedInputStream.readInt32();
                                            continue;
                                        case 48:
                                            this.f33770i |= 32;
                                            this.f33776t = codedInputStream.readInt32();
                                            continue;
                                        case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                            this.f33770i |= 64;
                                            this.f33777u = codedInputStream.readInt32();
                                            continue;
                                        case 66:
                                            Builder builder = (this.f33770i & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.f33778v.toBuilder() : null;
                                            Annotation annotation = (Annotation) codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite);
                                            this.f33778v = annotation;
                                            if (builder != null) {
                                                builder.mergeFrom(annotation);
                                                this.f33778v = builder.buildPartial();
                                            }
                                            this.f33770i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                            continue;
                                        case 74:
                                            if (!(z11 & true)) {
                                                this.f33779w = new ArrayList();
                                                z11 = true;
                                            }
                                            this.f33779w.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                                            continue;
                                        case 80:
                                            this.f33770i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                            this.f33781y = codedInputStream.readInt32();
                                            continue;
                                        case 88:
                                            this.f33770i |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                            this.f33780x = codedInputStream.readInt32();
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
                                        this.f33779w = Collections.unmodifiableList(this.f33779w);
                                    }
                                    try {
                                        newInstance.flush();
                                    } catch (IOException unused) {
                                    } catch (Throwable th3) {
                                        this.f33769e = newOutput.toByteString();
                                        throw th3;
                                    }
                                    this.f33769e = newOutput.toByteString();
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
                                this.f33779w = Collections.unmodifiableList(this.f33779w);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused2) {
                            } catch (Throwable th4) {
                                this.f33769e = newOutput.toByteString();
                                throw th4;
                            }
                            this.f33769e = newOutput.toByteString();
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
                f33759s = argument;
                argument.l();
            }

            public static Argument getDefaultInstance() {
                return f33759s;
            }

            private void l() {
                this.f33762o = 0;
                this.f33763p = Value.getDefaultInstance();
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public int getNameId() {
                return this.f33762o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f33765r;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f33761i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f33762o);
                } else {
                    i10 = 0;
                }
                if ((this.f33761i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f33763p);
                }
                int size = i10 + this.f33760e.size();
                this.f33765r = size;
                return size;
            }

            public Value getValue() {
                return this.f33763p;
            }

            public boolean hasNameId() {
                if ((this.f33761i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasValue() {
                if ((this.f33761i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f33764q;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasNameId()) {
                    this.f33764q = (byte) 0;
                    return false;
                } else if (!hasValue()) {
                    this.f33764q = (byte) 0;
                    return false;
                } else if (!getValue().isInitialized()) {
                    this.f33764q = (byte) 0;
                    return false;
                } else {
                    this.f33764q = (byte) 1;
                    return true;
                }
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f33761i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f33762o);
                }
                if ((this.f33761i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f33763p);
                }
                codedOutputStream.writeRawBytes(this.f33760e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f33759s;
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
                this.f33764q = (byte) -1;
                this.f33765r = -1;
                this.f33760e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f33764q = (byte) -1;
                this.f33765r = -1;
                this.f33760e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f33764q = (byte) -1;
                this.f33765r = -1;
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
                                    this.f33761i |= 1;
                                    this.f33762o = codedInputStream.readInt32();
                                } else if (readTag != 18) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    Value.Builder builder = (this.f33761i & 2) == 2 ? this.f33763p.toBuilder() : null;
                                    Value value = (Value) codedInputStream.readMessage(Value.PARSER, extensionRegistryLite);
                                    this.f33763p = value;
                                    if (builder != null) {
                                        builder.mergeFrom(value);
                                        this.f33763p = builder.buildPartial();
                                    }
                                    this.f33761i |= 2;
                                }
                            }
                            z10 = true;
                        } catch (Throwable th2) {
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f33760e = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33760e = newOutput.toByteString();
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
                    this.f33760e = newOutput.toByteString();
                    throw th4;
                }
                this.f33760e = newOutput.toByteString();
                e();
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public interface ArgumentOrBuilder extends MessageLiteOrBuilder {
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Annotation, Builder> implements AnnotationOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33798e;

            /* renamed from: i  reason: collision with root package name */
            private int f33799i;

            /* renamed from: o  reason: collision with root package name */
            private List f33800o = Collections.EMPTY_LIST;

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
                if ((this.f33798e & 2) != 2) {
                    this.f33800o = new ArrayList(this.f33800o);
                    this.f33798e |= 2;
                }
            }

            private void e() {
            }

            public Annotation buildPartial() {
                Annotation annotation = new Annotation(this);
                int i10 = 1;
                if ((this.f33798e & 1) != 1) {
                    i10 = 0;
                }
                annotation.f33755o = this.f33799i;
                if ((this.f33798e & 2) == 2) {
                    this.f33800o = Collections.unmodifiableList(this.f33800o);
                    this.f33798e &= -3;
                }
                annotation.f33756p = this.f33800o;
                annotation.f33754i = i10;
                return annotation;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f33800o.get(i10);
            }

            public int getArgumentCount() {
                return this.f33800o.size();
            }

            public boolean hasId() {
                if ((this.f33798e & 1) == 1) {
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
                this.f33798e |= 1;
                this.f33799i = i10;
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
                if (!annotation.f33756p.isEmpty()) {
                    if (this.f33800o.isEmpty()) {
                        this.f33800o = annotation.f33756p;
                        this.f33798e &= -3;
                    } else {
                        d();
                        this.f33800o.addAll(annotation.f33756p);
                    }
                }
                setUnknownFields(getUnknownFields().concat(annotation.f33753e));
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
            f33752s = annotation;
            annotation.m();
        }

        public static Annotation getDefaultInstance() {
            return f33752s;
        }

        private void m() {
            this.f33755o = 0;
            this.f33756p = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f33756p.get(i10);
        }

        public int getArgumentCount() {
            return this.f33756p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f33756p;
        }

        public int getId() {
            return this.f33755o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Annotation> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33758r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33754i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33755o);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33756p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33756p.get(i12));
            }
            int size = i10 + this.f33753e.size();
            this.f33758r = size;
            return size;
        }

        public boolean hasId() {
            if ((this.f33754i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33757q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f33757q = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getArgumentCount(); i10++) {
                if (!getArgument(i10).isInitialized()) {
                    this.f33757q = (byte) 0;
                    return false;
                }
            }
            this.f33757q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33754i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33755o);
            }
            for (int i10 = 0; i10 < this.f33756p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33756p.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33753e);
        }

        public static Builder newBuilder(Annotation annotation) {
            return newBuilder().mergeFrom(annotation);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Annotation getDefaultInstanceForType() {
            return f33752s;
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
            this.f33757q = (byte) -1;
            this.f33758r = -1;
            this.f33753e = builder.getUnknownFields();
        }

        private Annotation(boolean z10) {
            this.f33757q = (byte) -1;
            this.f33758r = -1;
            this.f33753e = ByteString.EMPTY;
        }

        private Annotation(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33757q = (byte) -1;
            this.f33758r = -1;
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
                                this.f33754i |= 1;
                                this.f33755o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33756p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33756p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33756p = Collections.unmodifiableList(this.f33756p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33753e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33753e = newOutput.toByteString();
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
                this.f33756p = Collections.unmodifiableList(this.f33756p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33753e = newOutput.toByteString();
                throw th4;
            }
            this.f33753e = newOutput.toByteString();
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
        private final ByteString f33801i;

        /* renamed from: o  reason: collision with root package name */
        private int f33802o;

        /* renamed from: p  reason: collision with root package name */
        private int f33803p;

        /* renamed from: q  reason: collision with root package name */
        private int f33804q;

        /* renamed from: r  reason: collision with root package name */
        private int f33805r;

        /* renamed from: s  reason: collision with root package name */
        private List f33806s;

        /* renamed from: t  reason: collision with root package name */
        private List f33807t;

        /* renamed from: u  reason: collision with root package name */
        private List f33808u;

        /* renamed from: v  reason: collision with root package name */
        private int f33809v;

        /* renamed from: w  reason: collision with root package name */
        private List f33810w;

        /* renamed from: x  reason: collision with root package name */
        private int f33811x;

        /* renamed from: y  reason: collision with root package name */
        private List f33812y;

        /* renamed from: z  reason: collision with root package name */
        private List f33813z;

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
            private int f33814o;

            /* renamed from: p  reason: collision with root package name */
            private int f33815p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33816q;

            /* renamed from: r  reason: collision with root package name */
            private int f33817r;

            /* renamed from: s  reason: collision with root package name */
            private List f33818s;

            /* renamed from: t  reason: collision with root package name */
            private List f33819t;

            /* renamed from: u  reason: collision with root package name */
            private List f33820u;

            /* renamed from: v  reason: collision with root package name */
            private List f33821v;

            /* renamed from: w  reason: collision with root package name */
            private List f33822w;

            /* renamed from: x  reason: collision with root package name */
            private List f33823x;

            /* renamed from: y  reason: collision with root package name */
            private List f33824y;

            /* renamed from: z  reason: collision with root package name */
            private List f33825z;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33818s = list;
                this.f33819t = list;
                this.f33820u = list;
                this.f33821v = list;
                this.f33822w = list;
                this.f33823x = list;
                this.f33824y = list;
                this.f33825z = list;
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
                C();
            }

            private void A() {
                if ((this.f33814o & 8) != 8) {
                    this.f33818s = new ArrayList(this.f33818s);
                    this.f33814o |= 8;
                }
            }

            private void B() {
                if ((this.f33814o & 4194304) != 4194304) {
                    this.L = new ArrayList(this.L);
                    this.f33814o |= 4194304;
                }
            }

            private void C() {
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33814o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) != 16777216) {
                    this.N = new ArrayList(this.N);
                    this.f33814o |= PointerEventHelper.X_FLAG_SUPPORTS_HOVER;
                }
            }

            private void k() {
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33824y = new ArrayList(this.f33824y);
                    this.f33814o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33823x = new ArrayList(this.f33823x);
                    this.f33814o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f33822w = new ArrayList(this.f33822w);
                    this.f33814o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void o() {
                if ((this.f33814o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f33814o |= 8192;
                }
            }

            private void p() {
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f33825z = new ArrayList(this.f33825z);
                    this.f33814o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void q() {
                if ((this.f33814o & 262144) != 262144) {
                    this.H = new ArrayList(this.H);
                    this.f33814o |= 262144;
                }
            }

            private void r() {
                if ((this.f33814o & 1048576) != 1048576) {
                    this.J = new ArrayList(this.J);
                    this.f33814o |= 1048576;
                }
            }

            private void s() {
                if ((this.f33814o & 524288) != 524288) {
                    this.I = new ArrayList(this.I);
                    this.f33814o |= 524288;
                }
            }

            private void t() {
                if ((this.f33814o & 64) != 64) {
                    this.f33821v = new ArrayList(this.f33821v);
                    this.f33814o |= 64;
                }
            }

            private void u() {
                if ((this.f33814o & RecyclerView.ItemAnimator.FLAG_MOVED) != 2048) {
                    this.A = new ArrayList(this.A);
                    this.f33814o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                }
            }

            private void v() {
                if ((this.f33814o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33814o |= 16384;
                }
            }

            private void w() {
                if ((this.f33814o & 32) != 32) {
                    this.f33820u = new ArrayList(this.f33820u);
                    this.f33814o |= 32;
                }
            }

            private void y() {
                if ((this.f33814o & 16) != 16) {
                    this.f33819t = new ArrayList(this.f33819t);
                    this.f33814o |= 16;
                }
            }

            private void z() {
                if ((this.f33814o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f33814o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            public Class buildPartial() {
                Class r02 = new Class(this);
                int i10 = this.f33814o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                r02.f33803p = this.f33815p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                r02.f33804q = this.f33816q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                r02.f33805r = this.f33817r;
                if ((this.f33814o & 8) == 8) {
                    this.f33818s = Collections.unmodifiableList(this.f33818s);
                    this.f33814o &= -9;
                }
                r02.f33806s = this.f33818s;
                if ((this.f33814o & 16) == 16) {
                    this.f33819t = Collections.unmodifiableList(this.f33819t);
                    this.f33814o &= -17;
                }
                r02.f33807t = this.f33819t;
                if ((this.f33814o & 32) == 32) {
                    this.f33820u = Collections.unmodifiableList(this.f33820u);
                    this.f33814o &= -33;
                }
                r02.f33808u = this.f33820u;
                if ((this.f33814o & 64) == 64) {
                    this.f33821v = Collections.unmodifiableList(this.f33821v);
                    this.f33814o &= -65;
                }
                r02.f33810w = this.f33821v;
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f33822w = Collections.unmodifiableList(this.f33822w);
                    this.f33814o &= -129;
                }
                r02.f33812y = this.f33822w;
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33823x = Collections.unmodifiableList(this.f33823x);
                    this.f33814o &= -257;
                }
                r02.f33813z = this.f33823x;
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33824y = Collections.unmodifiableList(this.f33824y);
                    this.f33814o &= -513;
                }
                r02.B = this.f33824y;
                if ((this.f33814o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f33825z = Collections.unmodifiableList(this.f33825z);
                    this.f33814o &= -1025;
                }
                r02.C = this.f33825z;
                if ((this.f33814o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    this.A = Collections.unmodifiableList(this.A);
                    this.f33814o &= -2049;
                }
                r02.D = this.A;
                if ((this.f33814o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f33814o &= -4097;
                }
                r02.E = this.B;
                if ((this.f33814o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f33814o &= -8193;
                }
                r02.F = this.C;
                if ((this.f33814o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33814o &= -16385;
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
                if ((this.f33814o & 262144) == 262144) {
                    this.H = Collections.unmodifiableList(this.H);
                    this.f33814o &= -262145;
                }
                r02.L = this.H;
                if ((this.f33814o & 524288) == 524288) {
                    this.I = Collections.unmodifiableList(this.I);
                    this.f33814o &= -524289;
                }
                r02.N = this.I;
                if ((this.f33814o & 1048576) == 1048576) {
                    this.J = Collections.unmodifiableList(this.J);
                    this.f33814o &= -1048577;
                }
                r02.O = this.J;
                if ((i10 & 2097152) == 2097152) {
                    i11 |= 64;
                }
                r02.Q = this.K;
                if ((this.f33814o & 4194304) == 4194304) {
                    this.L = Collections.unmodifiableList(this.L);
                    this.f33814o &= -4194305;
                }
                r02.R = this.L;
                if ((i10 & 8388608) == 8388608) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                r02.S = this.M;
                if ((this.f33814o & PointerEventHelper.X_FLAG_SUPPORTS_HOVER) == 16777216) {
                    this.N = Collections.unmodifiableList(this.N);
                    this.f33814o &= -16777217;
                }
                r02.T = this.N;
                r02.f33802o = i11;
                return r02;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.N.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.N.size();
            }

            public Constructor getConstructor(int i10) {
                return (Constructor) this.f33824y.get(i10);
            }

            public int getConstructorCount() {
                return this.f33824y.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33822w.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33822w.size();
            }

            public EnumEntry getEnumEntry(int i10) {
                return (EnumEntry) this.C.get(i10);
            }

            public int getEnumEntryCount() {
                return this.C.size();
            }

            public Function getFunction(int i10) {
                return (Function) this.f33825z.get(i10);
            }

            public int getFunctionCount() {
                return this.f33825z.size();
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
                return (Type) this.f33819t.get(i10);
            }

            public int getSupertypeCount() {
                return this.f33819t.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.B.get(i10);
            }

            public int getTypeAliasCount() {
                return this.B.size();
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33818s.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33818s.size();
            }

            public TypeTable getTypeTable() {
                return this.K;
            }

            public boolean hasFqName() {
                if ((this.f33814o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasInlineClassUnderlyingType() {
                if ((this.f33814o & 65536) == 65536) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f33814o & 2097152) == 2097152) {
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
                if ((this.f33814o & 65536) == 65536 && this.F != Type.getDefaultInstance()) {
                    this.F = Type.newBuilder(this.F).mergeFrom(type).buildPartial();
                } else {
                    this.F = type;
                }
                this.f33814o |= 65536;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33814o & 2097152) == 2097152 && this.K != TypeTable.getDefaultInstance()) {
                    this.K = TypeTable.newBuilder(this.K).mergeFrom(typeTable).buildPartial();
                } else {
                    this.K = typeTable;
                }
                this.f33814o |= 2097152;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f33814o & 8388608) == 8388608 && this.M != VersionRequirementTable.getDefaultInstance()) {
                    this.M = VersionRequirementTable.newBuilder(this.M).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.M = versionRequirementTable;
                }
                this.f33814o |= 8388608;
                return this;
            }

            public Builder setCompanionObjectName(int i10) {
                this.f33814o |= 4;
                this.f33817r = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33814o |= 1;
                this.f33815p = i10;
                return this;
            }

            public Builder setFqName(int i10) {
                this.f33814o |= 2;
                this.f33816q = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingPropertyName(int i10) {
                this.f33814o |= PeerConnection.PORTALLOCATOR_ENABLE_ANY_ADDRESS_PORTS;
                this.E = i10;
                return this;
            }

            public Builder setInlineClassUnderlyingTypeId(int i10) {
                this.f33814o |= 131072;
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
                if (!r32.f33806s.isEmpty()) {
                    if (this.f33818s.isEmpty()) {
                        this.f33818s = r32.f33806s;
                        this.f33814o &= -9;
                    } else {
                        A();
                        this.f33818s.addAll(r32.f33806s);
                    }
                }
                if (!r32.f33807t.isEmpty()) {
                    if (this.f33819t.isEmpty()) {
                        this.f33819t = r32.f33807t;
                        this.f33814o &= -17;
                    } else {
                        y();
                        this.f33819t.addAll(r32.f33807t);
                    }
                }
                if (!r32.f33808u.isEmpty()) {
                    if (this.f33820u.isEmpty()) {
                        this.f33820u = r32.f33808u;
                        this.f33814o &= -33;
                    } else {
                        w();
                        this.f33820u.addAll(r32.f33808u);
                    }
                }
                if (!r32.f33810w.isEmpty()) {
                    if (this.f33821v.isEmpty()) {
                        this.f33821v = r32.f33810w;
                        this.f33814o &= -65;
                    } else {
                        t();
                        this.f33821v.addAll(r32.f33810w);
                    }
                }
                if (!r32.f33812y.isEmpty()) {
                    if (this.f33822w.isEmpty()) {
                        this.f33822w = r32.f33812y;
                        this.f33814o &= -129;
                    } else {
                        m();
                        this.f33822w.addAll(r32.f33812y);
                    }
                }
                if (!r32.f33813z.isEmpty()) {
                    if (this.f33823x.isEmpty()) {
                        this.f33823x = r32.f33813z;
                        this.f33814o &= -257;
                    } else {
                        l();
                        this.f33823x.addAll(r32.f33813z);
                    }
                }
                if (!r32.B.isEmpty()) {
                    if (this.f33824y.isEmpty()) {
                        this.f33824y = r32.B;
                        this.f33814o &= -513;
                    } else {
                        k();
                        this.f33824y.addAll(r32.B);
                    }
                }
                if (!r32.C.isEmpty()) {
                    if (this.f33825z.isEmpty()) {
                        this.f33825z = r32.C;
                        this.f33814o &= -1025;
                    } else {
                        p();
                        this.f33825z.addAll(r32.C);
                    }
                }
                if (!r32.D.isEmpty()) {
                    if (this.A.isEmpty()) {
                        this.A = r32.D;
                        this.f33814o &= -2049;
                    } else {
                        u();
                        this.A.addAll(r32.D);
                    }
                }
                if (!r32.E.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = r32.E;
                        this.f33814o &= -4097;
                    } else {
                        z();
                        this.B.addAll(r32.E);
                    }
                }
                if (!r32.F.isEmpty()) {
                    if (this.C.isEmpty()) {
                        this.C = r32.F;
                        this.f33814o &= -8193;
                    } else {
                        o();
                        this.C.addAll(r32.F);
                    }
                }
                if (!r32.G.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = r32.G;
                        this.f33814o &= -16385;
                    } else {
                        v();
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
                        this.f33814o &= -262145;
                    } else {
                        q();
                        this.H.addAll(r32.L);
                    }
                }
                if (!r32.N.isEmpty()) {
                    if (this.I.isEmpty()) {
                        this.I = r32.N;
                        this.f33814o &= -524289;
                    } else {
                        s();
                        this.I.addAll(r32.N);
                    }
                }
                if (!r32.O.isEmpty()) {
                    if (this.J.isEmpty()) {
                        this.J = r32.O;
                        this.f33814o &= -1048577;
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
                        this.f33814o &= -4194305;
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
                        this.f33814o &= -16777217;
                    } else {
                        j();
                        this.N.addAll(r32.T);
                    }
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f33801i));
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
            private static Internal.EnumLiteMap f33826e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33828d;

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
                this.f33828d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33828d;
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
            this.f33803p = 6;
            this.f33804q = 0;
            this.f33805r = 0;
            List list = Collections.EMPTY_LIST;
            this.f33806s = list;
            this.f33807t = list;
            this.f33808u = list;
            this.f33810w = list;
            this.f33812y = list;
            this.f33813z = list;
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
            return Builder.g();
        }

        public static Class parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        public int getCompanionObjectName() {
            return this.f33805r;
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
            return (Type) this.f33812y.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33812y.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33813z;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33812y;
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
            return this.f33803p;
        }

        public int getFqName() {
            return this.f33804q;
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
            return this.f33810w;
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
            if ((this.f33802o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33803p);
            } else {
                i10 = 0;
            }
            int i12 = 0;
            for (int i13 = 0; i13 < this.f33808u.size(); i13++) {
                i12 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33808u.get(i13)).intValue());
            }
            int i14 = i10 + i12;
            if (!getSupertypeIdList().isEmpty()) {
                i14 = i14 + 1 + CodedOutputStream.computeInt32SizeNoTag(i12);
            }
            this.f33809v = i12;
            if ((this.f33802o & 2) == 2) {
                i14 += CodedOutputStream.computeInt32Size(3, this.f33804q);
            }
            if ((this.f33802o & 4) == 4) {
                i14 += CodedOutputStream.computeInt32Size(4, this.f33805r);
            }
            for (int i15 = 0; i15 < this.f33806s.size(); i15++) {
                i14 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33806s.get(i15));
            }
            for (int i16 = 0; i16 < this.f33807t.size(); i16++) {
                i14 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33807t.get(i16));
            }
            int i17 = 0;
            for (int i18 = 0; i18 < this.f33810w.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33810w.get(i18)).intValue());
            }
            int i19 = i14 + i17;
            if (!getNestedClassNameList().isEmpty()) {
                i19 = i19 + 1 + CodedOutputStream.computeInt32SizeNoTag(i17);
            }
            this.f33811x = i17;
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
            if ((this.f33802o & 8) == 8) {
                i27 += CodedOutputStream.computeInt32Size(17, this.I);
            }
            if ((this.f33802o & 16) == 16) {
                i27 += CodedOutputStream.computeMessageSize(18, this.J);
            }
            if ((this.f33802o & 32) == 32) {
                i27 += CodedOutputStream.computeInt32Size(19, this.K);
            }
            for (int i28 = 0; i28 < this.f33812y.size(); i28++) {
                i27 += CodedOutputStream.computeMessageSize(20, (MessageLite) this.f33812y.get(i28));
            }
            int i29 = 0;
            for (int i30 = 0; i30 < this.f33813z.size(); i30++) {
                i29 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33813z.get(i30)).intValue());
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
            if ((this.f33802o & 64) == 64) {
                i38 += CodedOutputStream.computeMessageSize(30, this.Q);
            }
            int i39 = 0;
            for (int i40 = 0; i40 < this.R.size(); i40++) {
                i39 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.R.get(i40)).intValue());
            }
            int size = i38 + i39 + (getVersionRequirementList().size() * 2);
            if ((this.f33802o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                size += CodedOutputStream.computeMessageSize(32, this.S);
            }
            for (int i41 = 0; i41 < this.T.size(); i41++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.T.get(i41));
            }
            int j10 = size + j() + this.f33801i.size();
            this.V = j10;
            return j10;
        }

        public Type getSupertype(int i10) {
            return (Type) this.f33807t.get(i10);
        }

        public int getSupertypeCount() {
            return this.f33807t.size();
        }

        public List<Integer> getSupertypeIdList() {
            return this.f33808u;
        }

        public List<Type> getSupertypeList() {
            return this.f33807t;
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
            return (TypeParameter) this.f33806s.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33806s.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33806s;
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
            if ((this.f33802o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33802o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasFqName() {
            if ((this.f33802o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingPropertyName() {
            if ((this.f33802o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingType() {
            if ((this.f33802o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasInlineClassUnderlyingTypeId() {
            if ((this.f33802o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f33802o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f33802o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f33802o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33803p);
            }
            if (getSupertypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(18);
                codedOutputStream.writeRawVarint32(this.f33809v);
            }
            for (int i10 = 0; i10 < this.f33808u.size(); i10++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33808u.get(i10)).intValue());
            }
            if ((this.f33802o & 2) == 2) {
                codedOutputStream.writeInt32(3, this.f33804q);
            }
            if ((this.f33802o & 4) == 4) {
                codedOutputStream.writeInt32(4, this.f33805r);
            }
            for (int i11 = 0; i11 < this.f33806s.size(); i11++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33806s.get(i11));
            }
            for (int i12 = 0; i12 < this.f33807t.size(); i12++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33807t.get(i12));
            }
            if (getNestedClassNameList().size() > 0) {
                codedOutputStream.writeRawVarint32(58);
                codedOutputStream.writeRawVarint32(this.f33811x);
            }
            for (int i13 = 0; i13 < this.f33810w.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33810w.get(i13)).intValue());
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
            if ((this.f33802o & 8) == 8) {
                codedOutputStream.writeInt32(17, this.I);
            }
            if ((this.f33802o & 16) == 16) {
                codedOutputStream.writeMessage(18, this.J);
            }
            if ((this.f33802o & 32) == 32) {
                codedOutputStream.writeInt32(19, this.K);
            }
            for (int i20 = 0; i20 < this.f33812y.size(); i20++) {
                codedOutputStream.writeMessage(20, (MessageLite) this.f33812y.get(i20));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(170);
                codedOutputStream.writeRawVarint32(this.A);
            }
            for (int i21 = 0; i21 < this.f33813z.size(); i21++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33813z.get(i21)).intValue());
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
            if ((this.f33802o & 64) == 64) {
                codedOutputStream.writeMessage(30, this.Q);
            }
            for (int i25 = 0; i25 < this.R.size(); i25++) {
                codedOutputStream.writeInt32(31, ((Integer) this.R.get(i25)).intValue());
            }
            if ((this.f33802o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(32, this.S);
            }
            for (int i26 = 0; i26 < this.T.size(); i26++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.T.get(i26));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33801i);
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
            this.f33809v = -1;
            this.f33811x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33801i = extendableBuilder.getUnknownFields();
        }

        private Class(boolean z10) {
            this.f33809v = -1;
            this.f33811x = -1;
            this.A = -1;
            this.H = -1;
            this.M = -1;
            this.P = -1;
            this.U = (byte) -1;
            this.V = -1;
            this.f33801i = ByteString.EMPTY;
        }

        /* JADX WARN: Type inference failed for: r4v2 */
        /* JADX WARN: Type inference failed for: r4v4 */
        /* JADX WARN: Type inference failed for: r4v8, types: [boolean] */
        private Class(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            boolean z11;
            this.f33809v = -1;
            this.f33811x = -1;
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
                                this.f33802o |= 1;
                                this.f33803p = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 16:
                                boolean z16 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z16) {
                                    this.f33808u = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33808u.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33808u = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33808u.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                this.f33802o |= 2;
                                this.f33804q = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 32:
                                this.f33802o |= 4;
                                this.f33805r = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 42:
                                boolean z18 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z18) {
                                    this.f33806s = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33806s.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 50:
                                boolean z19 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z19) {
                                    this.f33807t = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33807t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                boolean z20 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z20) {
                                    this.f33810w = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33810w.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33810w = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33810w.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                this.f33802o |= 8;
                                this.I = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case MediaImageViewKt.OBSCURED_IMAGE_MIN_WIDTH /* 146 */:
                                Type.Builder builder = (this.f33802o & 16) == 16 ? this.J.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.J = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.J = builder.buildPartial();
                                }
                                this.f33802o |= 16;
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 152:
                                this.f33802o |= 32;
                                this.K = codedInputStream.readInt32();
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 162:
                                boolean z29 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z29) {
                                    this.f33812y = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33812y.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                continue;
                                z12 = z15;
                                z14 = z14;
                            case 168:
                                boolean z30 = (z14 ? 1 : 0) & true;
                                z14 = z14;
                                if (!z30) {
                                    this.f33813z = new ArrayList();
                                    z14 = (z14 ? 1 : 0) | true;
                                }
                                this.f33813z.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                        this.f33813z = new ArrayList();
                                        z14 = (z14 ? 1 : 0) | true;
                                    }
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33813z.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                TypeTable.Builder builder2 = (this.f33802o & 64) == 64 ? this.Q.toBuilder() : null;
                                TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                this.Q = typeTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(typeTable);
                                    this.Q = builder2.buildPartial();
                                }
                                this.f33802o |= 64;
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
                                VersionRequirementTable.Builder builder3 = (this.f33802o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.S.toBuilder() : null;
                                VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                this.S = versionRequirementTable;
                                if (builder3 != null) {
                                    builder3.mergeFrom(versionRequirementTable);
                                    this.S = builder3.buildPartial();
                                }
                                this.f33802o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
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
                                            this.f33808u = Collections.unmodifiableList(this.f33808u);
                                        }
                                        if (z11 & true) {
                                            this.f33806s = Collections.unmodifiableList(this.f33806s);
                                        }
                                        if (z11 & true) {
                                            this.f33807t = Collections.unmodifiableList(this.f33807t);
                                        }
                                        if ((z11 & true) == c10) {
                                            this.f33810w = Collections.unmodifiableList(this.f33810w);
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
                                            this.f33812y = Collections.unmodifiableList(this.f33812y);
                                        }
                                        if (z11 & true) {
                                            this.f33813z = Collections.unmodifiableList(this.f33813z);
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
                                            this.f33801i = newOutput.toByteString();
                                            throw th3;
                                        }
                                        this.f33801i = newOutput.toByteString();
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
                        this.f33808u = Collections.unmodifiableList(this.f33808u);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33806s = Collections.unmodifiableList(this.f33806s);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33807t = Collections.unmodifiableList(this.f33807t);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33810w = Collections.unmodifiableList(this.f33810w);
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
                        this.f33812y = Collections.unmodifiableList(this.f33812y);
                    }
                    if ((z14 ? 1 : 0) & true) {
                        this.f33813z = Collections.unmodifiableList(this.f33813z);
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
                        this.f33801i = newOutput.toByteString();
                        throw th5;
                    }
                    this.f33801i = newOutput.toByteString();
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
        private static final CompilerPluginData f33829s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33830e;

        /* renamed from: i  reason: collision with root package name */
        private int f33831i;

        /* renamed from: o  reason: collision with root package name */
        private int f33832o;

        /* renamed from: p  reason: collision with root package name */
        private ByteString f33833p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33834q;

        /* renamed from: r  reason: collision with root package name */
        private int f33835r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<CompilerPluginData, Builder> implements CompilerPluginDataOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33836e;

            /* renamed from: i  reason: collision with root package name */
            private int f33837i;

            /* renamed from: o  reason: collision with root package name */
            private ByteString f33838o = ByteString.EMPTY;

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
                int i10 = this.f33836e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                compilerPluginData.f33832o = this.f33837i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                compilerPluginData.f33833p = this.f33838o;
                compilerPluginData.f33831i = i11;
                return compilerPluginData;
            }

            public boolean hasData() {
                if ((this.f33836e & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasPluginId() {
                if ((this.f33836e & 1) == 1) {
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
                this.f33836e |= 2;
                this.f33838o = byteString;
                return this;
            }

            public Builder setPluginId(int i10) {
                this.f33836e |= 1;
                this.f33837i = i10;
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
                setUnknownFields(getUnknownFields().concat(compilerPluginData.f33830e));
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
            f33829s = compilerPluginData;
            compilerPluginData.l();
        }

        public static CompilerPluginData getDefaultInstance() {
            return f33829s;
        }

        private void l() {
            this.f33832o = 0;
            this.f33833p = ByteString.EMPTY;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public ByteString getData() {
            return this.f33833p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<CompilerPluginData> getParserForType() {
            return PARSER;
        }

        public int getPluginId() {
            return this.f33832o;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33835r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33831i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33832o);
            } else {
                i10 = 0;
            }
            if ((this.f33831i & 2) == 2) {
                i10 += CodedOutputStream.computeBytesSize(2, this.f33833p);
            }
            int size = i10 + this.f33830e.size();
            this.f33835r = size;
            return size;
        }

        public boolean hasData() {
            if ((this.f33831i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasPluginId() {
            if ((this.f33831i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33834q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasPluginId()) {
                this.f33834q = (byte) 0;
                return false;
            } else if (!hasData()) {
                this.f33834q = (byte) 0;
                return false;
            } else {
                this.f33834q = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33831i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33832o);
            }
            if ((this.f33831i & 2) == 2) {
                codedOutputStream.writeBytes(2, this.f33833p);
            }
            codedOutputStream.writeRawBytes(this.f33830e);
        }

        public static Builder newBuilder(CompilerPluginData compilerPluginData) {
            return newBuilder().mergeFrom(compilerPluginData);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public CompilerPluginData getDefaultInstanceForType() {
            return f33829s;
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
            this.f33834q = (byte) -1;
            this.f33835r = -1;
            this.f33830e = builder.getUnknownFields();
        }

        private CompilerPluginData(boolean z10) {
            this.f33834q = (byte) -1;
            this.f33835r = -1;
            this.f33830e = ByteString.EMPTY;
        }

        private CompilerPluginData(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33834q = (byte) -1;
            this.f33835r = -1;
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
                                this.f33831i |= 1;
                                this.f33832o = codedInputStream.readInt32();
                            } else if (readTag != 18) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f33831i |= 2;
                                this.f33833p = codedInputStream.readBytes();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33830e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33830e = newOutput.toByteString();
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
                this.f33830e = newOutput.toByteString();
                throw th4;
            }
            this.f33830e = newOutput.toByteString();
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
        private static final Constructor f33839v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33840i;

        /* renamed from: o  reason: collision with root package name */
        private int f33841o;

        /* renamed from: p  reason: collision with root package name */
        private int f33842p;

        /* renamed from: q  reason: collision with root package name */
        private List f33843q;

        /* renamed from: r  reason: collision with root package name */
        private List f33844r;

        /* renamed from: s  reason: collision with root package name */
        private List f33845s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33846t;

        /* renamed from: u  reason: collision with root package name */
        private int f33847u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Constructor, Builder> implements ConstructorOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33848o;

            /* renamed from: p  reason: collision with root package name */
            private int f33849p = 6;

            /* renamed from: q  reason: collision with root package name */
            private List f33850q;

            /* renamed from: r  reason: collision with root package name */
            private List f33851r;

            /* renamed from: s  reason: collision with root package name */
            private List f33852s;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33850q = list;
                this.f33851r = list;
                this.f33852s = list;
                m();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33848o & 8) != 8) {
                    this.f33852s = new ArrayList(this.f33852s);
                    this.f33848o |= 8;
                }
            }

            private void k() {
                if ((this.f33848o & 2) != 2) {
                    this.f33850q = new ArrayList(this.f33850q);
                    this.f33848o |= 2;
                }
            }

            private void l() {
                if ((this.f33848o & 4) != 4) {
                    this.f33851r = new ArrayList(this.f33851r);
                    this.f33848o |= 4;
                }
            }

            private void m() {
            }

            public Constructor buildPartial() {
                Constructor constructor = new Constructor(this);
                int i10 = 1;
                if ((this.f33848o & 1) != 1) {
                    i10 = 0;
                }
                constructor.f33842p = this.f33849p;
                if ((this.f33848o & 2) == 2) {
                    this.f33850q = Collections.unmodifiableList(this.f33850q);
                    this.f33848o &= -3;
                }
                constructor.f33843q = this.f33850q;
                if ((this.f33848o & 4) == 4) {
                    this.f33851r = Collections.unmodifiableList(this.f33851r);
                    this.f33848o &= -5;
                }
                constructor.f33844r = this.f33851r;
                if ((this.f33848o & 8) == 8) {
                    this.f33852s = Collections.unmodifiableList(this.f33852s);
                    this.f33848o &= -9;
                }
                constructor.f33845s = this.f33852s;
                constructor.f33841o = i10;
                return constructor;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f33852s.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f33852s.size();
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f33850q.get(i10);
            }

            public int getValueParameterCount() {
                return this.f33850q.size();
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
                this.f33848o |= 1;
                this.f33849p = i10;
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
                if (!constructor.f33843q.isEmpty()) {
                    if (this.f33850q.isEmpty()) {
                        this.f33850q = constructor.f33843q;
                        this.f33848o &= -3;
                    } else {
                        k();
                        this.f33850q.addAll(constructor.f33843q);
                    }
                }
                if (!constructor.f33844r.isEmpty()) {
                    if (this.f33851r.isEmpty()) {
                        this.f33851r = constructor.f33844r;
                        this.f33848o &= -5;
                    } else {
                        l();
                        this.f33851r.addAll(constructor.f33844r);
                    }
                }
                if (!constructor.f33845s.isEmpty()) {
                    if (this.f33852s.isEmpty()) {
                        this.f33852s = constructor.f33845s;
                        this.f33848o &= -9;
                    } else {
                        j();
                        this.f33852s.addAll(constructor.f33845s);
                    }
                }
                f(constructor);
                setUnknownFields(getUnknownFields().concat(constructor.f33840i));
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
            f33839v = constructor;
            constructor.v();
        }

        public static Constructor getDefaultInstance() {
            return f33839v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void v() {
            this.f33842p = 6;
            List list = Collections.EMPTY_LIST;
            this.f33843q = list;
            this.f33844r = list;
            this.f33845s = list;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f33845s.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f33845s.size();
        }

        public int getFlags() {
            return this.f33842p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Constructor> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33847u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33841o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33842p);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33843q.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33843q.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f33844r.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33844r.get(i14)).intValue());
            }
            int size = i10 + i13 + (getVersionRequirementList().size() * 2);
            for (int i15 = 0; i15 < this.f33845s.size(); i15++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f33845s.get(i15));
            }
            int j10 = size + j() + this.f33840i.size();
            this.f33847u = j10;
            return j10;
        }

        public ValueParameter getValueParameter(int i10) {
            return (ValueParameter) this.f33843q.get(i10);
        }

        public int getValueParameterCount() {
            return this.f33843q.size();
        }

        public List<ValueParameter> getValueParameterList() {
            return this.f33843q;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f33844r;
        }

        public boolean hasFlags() {
            if ((this.f33841o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33846t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getValueParameterCount(); i10++) {
                if (!getValueParameter(i10).isInitialized()) {
                    this.f33846t = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getCompilerPluginDataCount(); i11++) {
                if (!getCompilerPluginData(i11).isInitialized()) {
                    this.f33846t = (byte) 0;
                    return false;
                }
            }
            if (!i()) {
                this.f33846t = (byte) 0;
                return false;
            }
            this.f33846t = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33841o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33842p);
            }
            for (int i10 = 0; i10 < this.f33843q.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33843q.get(i10));
            }
            for (int i11 = 0; i11 < this.f33844r.size(); i11++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f33844r.get(i11)).intValue());
            }
            for (int i12 = 0; i12 < this.f33845s.size(); i12++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f33845s.get(i12));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33840i);
        }

        public static Builder newBuilder(Constructor constructor) {
            return newBuilder().mergeFrom(constructor);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Constructor getDefaultInstanceForType() {
            return f33839v;
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
            this.f33846t = (byte) -1;
            this.f33847u = -1;
            this.f33840i = extendableBuilder.getUnknownFields();
        }

        private Constructor(boolean z10) {
            this.f33846t = (byte) -1;
            this.f33847u = -1;
            this.f33840i = ByteString.EMPTY;
        }

        private Constructor(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33846t = (byte) -1;
            this.f33847u = -1;
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
                                this.f33841o |= 1;
                                this.f33842p = codedInputStream.readInt32();
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33843q = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33843q.add(codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite));
                            } else if (readTag == 248) {
                                if (!(z11 & true)) {
                                    this.f33844r = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33844r.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag == 250) {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33844r = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f33844r.add(Integer.valueOf(codedInputStream.readInt32()));
                                }
                                codedInputStream.popLimit(pushLimit);
                            } else if (readTag != 258) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33845s = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33845s.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33843q = Collections.unmodifiableList(this.f33843q);
                        }
                        if (z11 & true) {
                            this.f33844r = Collections.unmodifiableList(this.f33844r);
                        }
                        if (z11 & true) {
                            this.f33845s = Collections.unmodifiableList(this.f33845s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33840i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33840i = newOutput.toByteString();
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
                this.f33843q = Collections.unmodifiableList(this.f33843q);
            }
            if (z11 & true) {
                this.f33844r = Collections.unmodifiableList(this.f33844r);
            }
            if (z11 & true) {
                this.f33845s = Collections.unmodifiableList(this.f33845s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33840i = newOutput.toByteString();
                throw th4;
            }
            this.f33840i = newOutput.toByteString();
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
        private static final Contract f33853q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33854e;

        /* renamed from: i  reason: collision with root package name */
        private List f33855i;

        /* renamed from: o  reason: collision with root package name */
        private byte f33856o;

        /* renamed from: p  reason: collision with root package name */
        private int f33857p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Contract, Builder> implements ContractOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33858e;

            /* renamed from: i  reason: collision with root package name */
            private List f33859i = Collections.EMPTY_LIST;

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
                if ((this.f33858e & 1) != 1) {
                    this.f33859i = new ArrayList(this.f33859i);
                    this.f33858e |= 1;
                }
            }

            private void e() {
            }

            public Contract buildPartial() {
                Contract contract = new Contract(this);
                if ((this.f33858e & 1) == 1) {
                    this.f33859i = Collections.unmodifiableList(this.f33859i);
                    this.f33858e &= -2;
                }
                contract.f33855i = this.f33859i;
                return contract;
            }

            public Effect getEffect(int i10) {
                return (Effect) this.f33859i.get(i10);
            }

            public int getEffectCount() {
                return this.f33859i.size();
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
                if (!contract.f33855i.isEmpty()) {
                    if (this.f33859i.isEmpty()) {
                        this.f33859i = contract.f33855i;
                        this.f33858e &= -2;
                    } else {
                        d();
                        this.f33859i.addAll(contract.f33855i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(contract.f33854e));
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
            f33853q = contract;
            contract.k();
        }

        public static Contract getDefaultInstance() {
            return f33853q;
        }

        private void k() {
            this.f33855i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public Effect getEffect(int i10) {
            return (Effect) this.f33855i.get(i10);
        }

        public int getEffectCount() {
            return this.f33855i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Contract> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33857p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33855i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33855i.get(i12));
            }
            int size = i11 + this.f33854e.size();
            this.f33857p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33856o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectCount(); i10++) {
                if (!getEffect(i10).isInitialized()) {
                    this.f33856o = (byte) 0;
                    return false;
                }
            }
            this.f33856o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33855i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33855i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33854e);
        }

        public static Builder newBuilder(Contract contract) {
            return newBuilder().mergeFrom(contract);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Contract getDefaultInstanceForType() {
            return f33853q;
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
            this.f33856o = (byte) -1;
            this.f33857p = -1;
            this.f33854e = builder.getUnknownFields();
        }

        private Contract(boolean z10) {
            this.f33856o = (byte) -1;
            this.f33857p = -1;
            this.f33854e = ByteString.EMPTY;
        }

        private Contract(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33856o = (byte) -1;
            this.f33857p = -1;
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
                                        this.f33855i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33855i.add(codedInputStream.readMessage(Effect.PARSER, extensionRegistryLite));
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
                        this.f33855i = Collections.unmodifiableList(this.f33855i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33854e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33854e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33855i = Collections.unmodifiableList(this.f33855i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33854e = newOutput.toByteString();
                throw th4;
            }
            this.f33854e = newOutput.toByteString();
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
        private static final Effect f33860u;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33861e;

        /* renamed from: i  reason: collision with root package name */
        private int f33862i;

        /* renamed from: o  reason: collision with root package name */
        private EffectType f33863o;

        /* renamed from: p  reason: collision with root package name */
        private List f33864p;

        /* renamed from: q  reason: collision with root package name */
        private Expression f33865q;

        /* renamed from: r  reason: collision with root package name */
        private InvocationKind f33866r;

        /* renamed from: s  reason: collision with root package name */
        private byte f33867s;

        /* renamed from: t  reason: collision with root package name */
        private int f33868t;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Effect, Builder> implements EffectOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33869e;

            /* renamed from: i  reason: collision with root package name */
            private EffectType f33870i = EffectType.RETURNS_CONSTANT;

            /* renamed from: o  reason: collision with root package name */
            private List f33871o = Collections.EMPTY_LIST;

            /* renamed from: p  reason: collision with root package name */
            private Expression f33872p = Expression.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private InvocationKind f33873q = InvocationKind.AT_MOST_ONCE;

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
                if ((this.f33869e & 2) != 2) {
                    this.f33871o = new ArrayList(this.f33871o);
                    this.f33869e |= 2;
                }
            }

            private void e() {
            }

            public Effect buildPartial() {
                Effect effect = new Effect(this);
                int i10 = this.f33869e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                effect.f33863o = this.f33870i;
                if ((this.f33869e & 2) == 2) {
                    this.f33871o = Collections.unmodifiableList(this.f33871o);
                    this.f33869e &= -3;
                }
                effect.f33864p = this.f33871o;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                effect.f33865q = this.f33872p;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                effect.f33866r = this.f33873q;
                effect.f33862i = i11;
                return effect;
            }

            public Expression getConclusionOfConditionalEffect() {
                return this.f33872p;
            }

            public Expression getEffectConstructorArgument(int i10) {
                return (Expression) this.f33871o.get(i10);
            }

            public int getEffectConstructorArgumentCount() {
                return this.f33871o.size();
            }

            public boolean hasConclusionOfConditionalEffect() {
                if ((this.f33869e & 4) == 4) {
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
                if ((this.f33869e & 4) == 4 && this.f33872p != Expression.getDefaultInstance()) {
                    this.f33872p = Expression.newBuilder(this.f33872p).mergeFrom(expression).buildPartial();
                } else {
                    this.f33872p = expression;
                }
                this.f33869e |= 4;
                return this;
            }

            public Builder setEffectType(EffectType effectType) {
                effectType.getClass();
                this.f33869e |= 1;
                this.f33870i = effectType;
                return this;
            }

            public Builder setKind(InvocationKind invocationKind) {
                invocationKind.getClass();
                this.f33869e |= 8;
                this.f33873q = invocationKind;
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
                if (!effect.f33864p.isEmpty()) {
                    if (this.f33871o.isEmpty()) {
                        this.f33871o = effect.f33864p;
                        this.f33869e &= -3;
                    } else {
                        d();
                        this.f33871o.addAll(effect.f33864p);
                    }
                }
                if (effect.hasConclusionOfConditionalEffect()) {
                    mergeConclusionOfConditionalEffect(effect.getConclusionOfConditionalEffect());
                }
                if (effect.hasKind()) {
                    setKind(effect.getKind());
                }
                setUnknownFields(getUnknownFields().concat(effect.f33861e));
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
            private static Internal.EnumLiteMap f33874e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33876d;

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
                this.f33876d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33876d;
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
            private static Internal.EnumLiteMap f33877e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33879d;

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
                this.f33879d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33879d;
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
            f33860u = effect;
            effect.o();
        }

        public static Effect getDefaultInstance() {
            return f33860u;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void o() {
            this.f33863o = EffectType.RETURNS_CONSTANT;
            this.f33864p = Collections.EMPTY_LIST;
            this.f33865q = Expression.getDefaultInstance();
            this.f33866r = InvocationKind.AT_MOST_ONCE;
        }

        public Expression getConclusionOfConditionalEffect() {
            return this.f33865q;
        }

        public Expression getEffectConstructorArgument(int i10) {
            return (Expression) this.f33864p.get(i10);
        }

        public int getEffectConstructorArgumentCount() {
            return this.f33864p.size();
        }

        public EffectType getEffectType() {
            return this.f33863o;
        }

        public InvocationKind getKind() {
            return this.f33866r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Effect> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33868t;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33862i & 1) == 1) {
                i10 = CodedOutputStream.computeEnumSize(1, this.f33863o.getNumber());
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f33864p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f33864p.get(i12));
            }
            if ((this.f33862i & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33865q);
            }
            if ((this.f33862i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f33866r.getNumber());
            }
            int size = i10 + this.f33861e.size();
            this.f33868t = size;
            return size;
        }

        public boolean hasConclusionOfConditionalEffect() {
            if ((this.f33862i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasEffectType() {
            if ((this.f33862i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasKind() {
            if ((this.f33862i & 4) == 4) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33867s;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getEffectConstructorArgumentCount(); i10++) {
                if (!getEffectConstructorArgument(i10).isInitialized()) {
                    this.f33867s = (byte) 0;
                    return false;
                }
            }
            if (hasConclusionOfConditionalEffect() && !getConclusionOfConditionalEffect().isInitialized()) {
                this.f33867s = (byte) 0;
                return false;
            }
            this.f33867s = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33862i & 1) == 1) {
                codedOutputStream.writeEnum(1, this.f33863o.getNumber());
            }
            for (int i10 = 0; i10 < this.f33864p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f33864p.get(i10));
            }
            if ((this.f33862i & 2) == 2) {
                codedOutputStream.writeMessage(3, this.f33865q);
            }
            if ((this.f33862i & 4) == 4) {
                codedOutputStream.writeEnum(4, this.f33866r.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f33861e);
        }

        public static Builder newBuilder(Effect effect) {
            return newBuilder().mergeFrom(effect);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Effect getDefaultInstanceForType() {
            return f33860u;
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
            this.f33867s = (byte) -1;
            this.f33868t = -1;
            this.f33861e = builder.getUnknownFields();
        }

        private Effect(boolean z10) {
            this.f33867s = (byte) -1;
            this.f33868t = -1;
            this.f33861e = ByteString.EMPTY;
        }

        private Effect(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33867s = (byte) -1;
            this.f33868t = -1;
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
                                    this.f33862i |= 1;
                                    this.f33863o = valueOf;
                                }
                            } else if (readTag == 18) {
                                if (!(z11 & true)) {
                                    this.f33864p = new ArrayList();
                                    z11 = true;
                                }
                                this.f33864p.add(codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite));
                            } else if (readTag == 26) {
                                Expression.Builder builder = (this.f33862i & 2) == 2 ? this.f33865q.toBuilder() : null;
                                Expression expression = (Expression) codedInputStream.readMessage(Expression.PARSER, extensionRegistryLite);
                                this.f33865q = expression;
                                if (builder != null) {
                                    builder.mergeFrom(expression);
                                    this.f33865q = builder.buildPartial();
                                }
                                this.f33862i |= 2;
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
                                    this.f33862i |= 4;
                                    this.f33866r = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33864p = Collections.unmodifiableList(this.f33864p);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33861e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33861e = newOutput.toByteString();
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
                this.f33864p = Collections.unmodifiableList(this.f33864p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33861e = newOutput.toByteString();
                throw th4;
            }
            this.f33861e = newOutput.toByteString();
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
        private static final EnumEntry f33880s;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33881i;

        /* renamed from: o  reason: collision with root package name */
        private int f33882o;

        /* renamed from: p  reason: collision with root package name */
        private int f33883p;

        /* renamed from: q  reason: collision with root package name */
        private byte f33884q;

        /* renamed from: r  reason: collision with root package name */
        private int f33885r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<EnumEntry, Builder> implements EnumEntryOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33886o;

            /* renamed from: p  reason: collision with root package name */
            private int f33887p;

            private Builder() {
                j();
            }

            static /* synthetic */ Builder g() {
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
                if ((this.f33886o & 1) != 1) {
                    i10 = 0;
                }
                enumEntry.f33883p = this.f33887p;
                enumEntry.f33882o = i10;
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
                this.f33886o |= 1;
                this.f33887p = i10;
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
                setUnknownFields(getUnknownFields().concat(enumEntry.f33881i));
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
            f33880s = enumEntry;
            enumEntry.p();
        }

        public static EnumEntry getDefaultInstance() {
            return f33880s;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void p() {
            this.f33883p = 0;
        }

        public int getName() {
            return this.f33883p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<EnumEntry> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33885r;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33882o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33883p);
            } else {
                i10 = 0;
            }
            int j10 = i10 + j() + this.f33881i.size();
            this.f33885r = j10;
            return j10;
        }

        public boolean hasName() {
            if ((this.f33882o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33884q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!i()) {
                this.f33884q = (byte) 0;
                return false;
            }
            this.f33884q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33882o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33883p);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33881i);
        }

        public static Builder newBuilder(EnumEntry enumEntry) {
            return newBuilder().mergeFrom(enumEntry);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public EnumEntry getDefaultInstanceForType() {
            return f33880s;
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
            this.f33884q = (byte) -1;
            this.f33885r = -1;
            this.f33881i = extendableBuilder.getUnknownFields();
        }

        private EnumEntry(boolean z10) {
            this.f33884q = (byte) -1;
            this.f33885r = -1;
            this.f33881i = ByteString.EMPTY;
        }

        private EnumEntry(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33884q = (byte) -1;
            this.f33885r = -1;
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
                                    this.f33882o |= 1;
                                    this.f33883p = codedInputStream.readInt32();
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
                        this.f33881i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33881i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33881i = newOutput.toByteString();
                throw th4;
            }
            this.f33881i = newOutput.toByteString();
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
        private static final Expression f33888x;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33889e;

        /* renamed from: i  reason: collision with root package name */
        private int f33890i;

        /* renamed from: o  reason: collision with root package name */
        private int f33891o;

        /* renamed from: p  reason: collision with root package name */
        private int f33892p;

        /* renamed from: q  reason: collision with root package name */
        private ConstantValue f33893q;

        /* renamed from: r  reason: collision with root package name */
        private Type f33894r;

        /* renamed from: s  reason: collision with root package name */
        private int f33895s;

        /* renamed from: t  reason: collision with root package name */
        private List f33896t;

        /* renamed from: u  reason: collision with root package name */
        private List f33897u;

        /* renamed from: v  reason: collision with root package name */
        private byte f33898v;

        /* renamed from: w  reason: collision with root package name */
        private int f33899w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<Expression, Builder> implements ExpressionOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f33900e;

            /* renamed from: i  reason: collision with root package name */
            private int f33901i;

            /* renamed from: o  reason: collision with root package name */
            private int f33902o;

            /* renamed from: p  reason: collision with root package name */
            private ConstantValue f33903p = ConstantValue.TRUE;

            /* renamed from: q  reason: collision with root package name */
            private Type f33904q = Type.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private int f33905r;

            /* renamed from: s  reason: collision with root package name */
            private List f33906s;

            /* renamed from: t  reason: collision with root package name */
            private List f33907t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33906s = list;
                this.f33907t = list;
                f();
            }

            static /* synthetic */ Builder b() {
                return c();
            }

            private static Builder c() {
                return new Builder();
            }

            private void d() {
                if ((this.f33900e & 32) != 32) {
                    this.f33906s = new ArrayList(this.f33906s);
                    this.f33900e |= 32;
                }
            }

            private void e() {
                if ((this.f33900e & 64) != 64) {
                    this.f33907t = new ArrayList(this.f33907t);
                    this.f33900e |= 64;
                }
            }

            private void f() {
            }

            public Expression buildPartial() {
                Expression expression = new Expression(this);
                int i10 = this.f33900e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                expression.f33891o = this.f33901i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                expression.f33892p = this.f33902o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                expression.f33893q = this.f33903p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                expression.f33894r = this.f33904q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                expression.f33895s = this.f33905r;
                if ((this.f33900e & 32) == 32) {
                    this.f33906s = Collections.unmodifiableList(this.f33906s);
                    this.f33900e &= -33;
                }
                expression.f33896t = this.f33906s;
                if ((this.f33900e & 64) == 64) {
                    this.f33907t = Collections.unmodifiableList(this.f33907t);
                    this.f33900e &= -65;
                }
                expression.f33897u = this.f33907t;
                expression.f33890i = i11;
                return expression;
            }

            public Expression getAndArgument(int i10) {
                return (Expression) this.f33906s.get(i10);
            }

            public int getAndArgumentCount() {
                return this.f33906s.size();
            }

            public Type getIsInstanceType() {
                return this.f33904q;
            }

            public Expression getOrArgument(int i10) {
                return (Expression) this.f33907t.get(i10);
            }

            public int getOrArgumentCount() {
                return this.f33907t.size();
            }

            public boolean hasIsInstanceType() {
                if ((this.f33900e & 8) == 8) {
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
                if ((this.f33900e & 8) == 8 && this.f33904q != Type.getDefaultInstance()) {
                    this.f33904q = Type.newBuilder(this.f33904q).mergeFrom(type).buildPartial();
                } else {
                    this.f33904q = type;
                }
                this.f33900e |= 8;
                return this;
            }

            public Builder setConstantValue(ConstantValue constantValue) {
                constantValue.getClass();
                this.f33900e |= 4;
                this.f33903p = constantValue;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33900e |= 1;
                this.f33901i = i10;
                return this;
            }

            public Builder setIsInstanceTypeId(int i10) {
                this.f33900e |= 16;
                this.f33905r = i10;
                return this;
            }

            public Builder setValueParameterReference(int i10) {
                this.f33900e |= 2;
                this.f33902o = i10;
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
                if (!expression.f33896t.isEmpty()) {
                    if (this.f33906s.isEmpty()) {
                        this.f33906s = expression.f33896t;
                        this.f33900e &= -33;
                    } else {
                        d();
                        this.f33906s.addAll(expression.f33896t);
                    }
                }
                if (!expression.f33897u.isEmpty()) {
                    if (this.f33907t.isEmpty()) {
                        this.f33907t = expression.f33897u;
                        this.f33900e &= -65;
                    } else {
                        e();
                        this.f33907t.addAll(expression.f33897u);
                    }
                }
                setUnknownFields(getUnknownFields().concat(expression.f33889e));
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
            private static Internal.EnumLiteMap f33908e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f33910d;

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
                this.f33910d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f33910d;
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
            f33888x = expression;
            expression.s();
        }

        public static Expression getDefaultInstance() {
            return f33888x;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void s() {
            this.f33891o = 0;
            this.f33892p = 0;
            this.f33893q = ConstantValue.TRUE;
            this.f33894r = Type.getDefaultInstance();
            this.f33895s = 0;
            List list = Collections.EMPTY_LIST;
            this.f33896t = list;
            this.f33897u = list;
        }

        public Expression getAndArgument(int i10) {
            return (Expression) this.f33896t.get(i10);
        }

        public int getAndArgumentCount() {
            return this.f33896t.size();
        }

        public ConstantValue getConstantValue() {
            return this.f33893q;
        }

        public int getFlags() {
            return this.f33891o;
        }

        public Type getIsInstanceType() {
            return this.f33894r;
        }

        public int getIsInstanceTypeId() {
            return this.f33895s;
        }

        public Expression getOrArgument(int i10) {
            return (Expression) this.f33897u.get(i10);
        }

        public int getOrArgumentCount() {
            return this.f33897u.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Expression> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33899w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33890i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33891o);
            } else {
                i10 = 0;
            }
            if ((this.f33890i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33892p);
            }
            if ((this.f33890i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f33893q.getNumber());
            }
            if ((this.f33890i & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f33894r);
            }
            if ((this.f33890i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f33895s);
            }
            for (int i12 = 0; i12 < this.f33896t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.f33896t.get(i12));
            }
            for (int i13 = 0; i13 < this.f33897u.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(7, (MessageLite) this.f33897u.get(i13));
            }
            int size = i10 + this.f33889e.size();
            this.f33899w = size;
            return size;
        }

        public int getValueParameterReference() {
            return this.f33892p;
        }

        public boolean hasConstantValue() {
            if ((this.f33890i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33890i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceType() {
            if ((this.f33890i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasIsInstanceTypeId() {
            if ((this.f33890i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasValueParameterReference() {
            if ((this.f33890i & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33898v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasIsInstanceType() && !getIsInstanceType().isInitialized()) {
                this.f33898v = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getAndArgumentCount(); i10++) {
                if (!getAndArgument(i10).isInitialized()) {
                    this.f33898v = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getOrArgumentCount(); i11++) {
                if (!getOrArgument(i11).isInitialized()) {
                    this.f33898v = (byte) 0;
                    return false;
                }
            }
            this.f33898v = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f33890i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f33891o);
            }
            if ((this.f33890i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f33892p);
            }
            if ((this.f33890i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f33893q.getNumber());
            }
            if ((this.f33890i & 8) == 8) {
                codedOutputStream.writeMessage(4, this.f33894r);
            }
            if ((this.f33890i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f33895s);
            }
            for (int i10 = 0; i10 < this.f33896t.size(); i10++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.f33896t.get(i10));
            }
            for (int i11 = 0; i11 < this.f33897u.size(); i11++) {
                codedOutputStream.writeMessage(7, (MessageLite) this.f33897u.get(i11));
            }
            codedOutputStream.writeRawBytes(this.f33889e);
        }

        public static Builder newBuilder(Expression expression) {
            return newBuilder().mergeFrom(expression);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Expression getDefaultInstanceForType() {
            return f33888x;
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
            this.f33898v = (byte) -1;
            this.f33899w = -1;
            this.f33889e = builder.getUnknownFields();
        }

        private Expression(boolean z10) {
            this.f33898v = (byte) -1;
            this.f33899w = -1;
            this.f33889e = ByteString.EMPTY;
        }

        private Expression(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33898v = (byte) -1;
            this.f33899w = -1;
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
                                this.f33890i |= 1;
                                this.f33891o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f33890i |= 2;
                                this.f33892p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                ConstantValue valueOf = ConstantValue.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f33890i |= 4;
                                    this.f33893q = valueOf;
                                }
                            } else if (readTag == 34) {
                                Type.Builder builder = (this.f33890i & 8) == 8 ? this.f33894r.toBuilder() : null;
                                Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                this.f33894r = type;
                                if (builder != null) {
                                    builder.mergeFrom(type);
                                    this.f33894r = builder.buildPartial();
                                }
                                this.f33890i |= 8;
                            } else if (readTag == 40) {
                                this.f33890i |= 16;
                                this.f33895s = codedInputStream.readInt32();
                            } else if (readTag == 50) {
                                if (!(z11 & true)) {
                                    this.f33896t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33896t.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            } else if (readTag != 58) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                if (!(z11 & true)) {
                                    this.f33897u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f33897u.add(codedInputStream.readMessage(PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11 & true) {
                            this.f33896t = Collections.unmodifiableList(this.f33896t);
                        }
                        if (z11 & true) {
                            this.f33897u = Collections.unmodifiableList(this.f33897u);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33889e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33889e = newOutput.toByteString();
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
                this.f33896t = Collections.unmodifiableList(this.f33896t);
            }
            if (z11 & true) {
                this.f33897u = Collections.unmodifiableList(this.f33897u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33889e = newOutput.toByteString();
                throw th4;
            }
            this.f33889e = newOutput.toByteString();
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
        private final ByteString f33911i;

        /* renamed from: o  reason: collision with root package name */
        private int f33912o;

        /* renamed from: p  reason: collision with root package name */
        private int f33913p;

        /* renamed from: q  reason: collision with root package name */
        private int f33914q;

        /* renamed from: r  reason: collision with root package name */
        private int f33915r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33916s;

        /* renamed from: t  reason: collision with root package name */
        private int f33917t;

        /* renamed from: u  reason: collision with root package name */
        private List f33918u;

        /* renamed from: v  reason: collision with root package name */
        private Type f33919v;

        /* renamed from: w  reason: collision with root package name */
        private int f33920w;

        /* renamed from: x  reason: collision with root package name */
        private List f33921x;

        /* renamed from: y  reason: collision with root package name */
        private List f33922y;

        /* renamed from: z  reason: collision with root package name */
        private int f33923z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Function, Builder> implements FunctionOrBuilder {
            private TypeTable A;
            private List B;
            private Contract C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f33924o;

            /* renamed from: r  reason: collision with root package name */
            private int f33927r;

            /* renamed from: t  reason: collision with root package name */
            private int f33929t;

            /* renamed from: u  reason: collision with root package name */
            private List f33930u;

            /* renamed from: v  reason: collision with root package name */
            private Type f33931v;

            /* renamed from: w  reason: collision with root package name */
            private int f33932w;

            /* renamed from: x  reason: collision with root package name */
            private List f33933x;

            /* renamed from: y  reason: collision with root package name */
            private List f33934y;

            /* renamed from: z  reason: collision with root package name */
            private List f33935z;

            /* renamed from: p  reason: collision with root package name */
            private int f33925p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f33926q = 6;

            /* renamed from: s  reason: collision with root package name */
            private Type f33928s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33930u = list;
                this.f33931v = Type.getDefaultInstance();
                this.f33933x = list;
                this.f33934y = list;
                this.f33935z = list;
                this.A = TypeTable.getDefaultInstance();
                this.B = list;
                this.C = Contract.getDefaultInstance();
                this.D = list;
                q();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33924o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33924o |= 16384;
                }
            }

            private void k() {
                if ((this.f33924o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33934y = new ArrayList(this.f33934y);
                    this.f33924o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33924o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33933x = new ArrayList(this.f33933x);
                    this.f33924o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33924o & 32) != 32) {
                    this.f33930u = new ArrayList(this.f33930u);
                    this.f33924o |= 32;
                }
            }

            private void o() {
                if ((this.f33924o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) != 1024) {
                    this.f33935z = new ArrayList(this.f33935z);
                    this.f33924o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                }
            }

            private void p() {
                if ((this.f33924o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 4096) {
                    this.B = new ArrayList(this.B);
                    this.f33924o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                }
            }

            private void q() {
            }

            public Function buildPartial() {
                Function function = new Function(this);
                int i10 = this.f33924o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                function.f33913p = this.f33925p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                function.f33914q = this.f33926q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                function.f33915r = this.f33927r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                function.f33916s = this.f33928s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                function.f33917t = this.f33929t;
                if ((this.f33924o & 32) == 32) {
                    this.f33930u = Collections.unmodifiableList(this.f33930u);
                    this.f33924o &= -33;
                }
                function.f33918u = this.f33930u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                function.f33919v = this.f33931v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                function.f33920w = this.f33932w;
                if ((this.f33924o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33933x = Collections.unmodifiableList(this.f33933x);
                    this.f33924o &= -257;
                }
                function.f33921x = this.f33933x;
                if ((this.f33924o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33934y = Collections.unmodifiableList(this.f33934y);
                    this.f33924o &= -513;
                }
                function.f33922y = this.f33934y;
                if ((this.f33924o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    this.f33935z = Collections.unmodifiableList(this.f33935z);
                    this.f33924o &= -1025;
                }
                function.A = this.f33935z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                function.B = this.A;
                if ((this.f33924o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    this.B = Collections.unmodifiableList(this.B);
                    this.f33924o &= -4097;
                }
                function.C = this.B;
                if ((i10 & 8192) == 8192) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                function.D = this.C;
                if ((this.f33924o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33924o &= -16385;
                }
                function.E = this.D;
                function.f33912o = i11;
                return function;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33933x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33933x.size();
            }

            public Contract getContract() {
                return this.C;
            }

            public Type getReceiverType() {
                return this.f33931v;
            }

            public Type getReturnType() {
                return this.f33928s;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33930u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33930u.size();
            }

            public TypeTable getTypeTable() {
                return this.A;
            }

            public ValueParameter getValueParameter(int i10) {
                return (ValueParameter) this.f33935z.get(i10);
            }

            public int getValueParameterCount() {
                return this.f33935z.size();
            }

            public boolean hasContract() {
                if ((this.f33924o & 8192) == 8192) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f33924o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f33924o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f33924o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeTable() {
                if ((this.f33924o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
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
                if ((this.f33924o & 8192) == 8192 && this.C != Contract.getDefaultInstance()) {
                    this.C = Contract.newBuilder(this.C).mergeFrom(contract).buildPartial();
                } else {
                    this.C = contract;
                }
                this.f33924o |= 8192;
                return this;
            }

            public Builder mergeReceiverType(Type type) {
                if ((this.f33924o & 64) == 64 && this.f33931v != Type.getDefaultInstance()) {
                    this.f33931v = Type.newBuilder(this.f33931v).mergeFrom(type).buildPartial();
                } else {
                    this.f33931v = type;
                }
                this.f33924o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f33924o & 8) == 8 && this.f33928s != Type.getDefaultInstance()) {
                    this.f33928s = Type.newBuilder(this.f33928s).mergeFrom(type).buildPartial();
                } else {
                    this.f33928s = type;
                }
                this.f33924o |= 8;
                return this;
            }

            public Builder mergeTypeTable(TypeTable typeTable) {
                if ((this.f33924o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != TypeTable.getDefaultInstance()) {
                    this.A = TypeTable.newBuilder(this.A).mergeFrom(typeTable).buildPartial();
                } else {
                    this.A = typeTable;
                }
                this.f33924o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33924o |= 1;
                this.f33925p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33924o |= 4;
                this.f33927r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f33924o |= 2;
                this.f33926q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f33924o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33932w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f33924o |= 16;
                this.f33929t = i10;
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
                if (!function.f33918u.isEmpty()) {
                    if (this.f33930u.isEmpty()) {
                        this.f33930u = function.f33918u;
                        this.f33924o &= -33;
                    } else {
                        m();
                        this.f33930u.addAll(function.f33918u);
                    }
                }
                if (function.hasReceiverType()) {
                    mergeReceiverType(function.getReceiverType());
                }
                if (function.hasReceiverTypeId()) {
                    setReceiverTypeId(function.getReceiverTypeId());
                }
                if (!function.f33921x.isEmpty()) {
                    if (this.f33933x.isEmpty()) {
                        this.f33933x = function.f33921x;
                        this.f33924o &= -257;
                    } else {
                        l();
                        this.f33933x.addAll(function.f33921x);
                    }
                }
                if (!function.f33922y.isEmpty()) {
                    if (this.f33934y.isEmpty()) {
                        this.f33934y = function.f33922y;
                        this.f33924o &= -513;
                    } else {
                        k();
                        this.f33934y.addAll(function.f33922y);
                    }
                }
                if (!function.A.isEmpty()) {
                    if (this.f33935z.isEmpty()) {
                        this.f33935z = function.A;
                        this.f33924o &= -1025;
                    } else {
                        o();
                        this.f33935z.addAll(function.A);
                    }
                }
                if (function.hasTypeTable()) {
                    mergeTypeTable(function.getTypeTable());
                }
                if (!function.C.isEmpty()) {
                    if (this.B.isEmpty()) {
                        this.B = function.C;
                        this.f33924o &= -4097;
                    } else {
                        p();
                        this.B.addAll(function.C);
                    }
                }
                if (function.hasContract()) {
                    mergeContract(function.getContract());
                }
                if (!function.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = function.E;
                        this.f33924o &= -16385;
                    } else {
                        j();
                        this.D.addAll(function.E);
                    }
                }
                f(function);
                setUnknownFields(getUnknownFields().concat(function.f33911i));
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
            this.f33913p = 6;
            this.f33914q = 6;
            this.f33915r = 0;
            this.f33916s = Type.getDefaultInstance();
            this.f33917t = 0;
            List list = Collections.EMPTY_LIST;
            this.f33918u = list;
            this.f33919v = Type.getDefaultInstance();
            this.f33920w = 0;
            this.f33921x = list;
            this.f33922y = list;
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
            return Builder.g();
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
            return (Type) this.f33921x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33921x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33922y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33921x;
        }

        public Contract getContract() {
            return this.D;
        }

        public int getFlags() {
            return this.f33913p;
        }

        public int getName() {
            return this.f33915r;
        }

        public int getOldFlags() {
            return this.f33914q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Function> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f33919v;
        }

        public int getReceiverTypeId() {
            return this.f33920w;
        }

        public Type getReturnType() {
            return this.f33916s;
        }

        public int getReturnTypeId() {
            return this.f33917t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33912o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33914q);
            } else {
                i10 = 0;
            }
            if ((this.f33912o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33915r);
            }
            if ((this.f33912o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33916s);
            }
            for (int i12 = 0; i12 < this.f33918u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33918u.get(i12));
            }
            if ((this.f33912o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33919v);
            }
            for (int i13 = 0; i13 < this.A.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(6, (MessageLite) this.A.get(i13));
            }
            if ((this.f33912o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f33917t);
            }
            if ((this.f33912o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f33920w);
            }
            if ((this.f33912o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33913p);
            }
            for (int i14 = 0; i14 < this.f33921x.size(); i14++) {
                i10 += CodedOutputStream.computeMessageSize(10, (MessageLite) this.f33921x.get(i14));
            }
            int i15 = 0;
            for (int i16 = 0; i16 < this.f33922y.size(); i16++) {
                i15 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33922y.get(i16)).intValue());
            }
            int i17 = i10 + i15;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i17 = i17 + 1 + CodedOutputStream.computeInt32SizeNoTag(i15);
            }
            this.f33923z = i15;
            if ((this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i17 += CodedOutputStream.computeMessageSize(30, this.B);
            }
            int i18 = 0;
            for (int i19 = 0; i19 < this.C.size(); i19++) {
                i18 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.C.get(i19)).intValue());
            }
            int size = i17 + i18 + (getVersionRequirementList().size() * 2);
            if ((this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                size += CodedOutputStream.computeMessageSize(32, this.D);
            }
            for (int i20 = 0; i20 < this.E.size(); i20++) {
                size += CodedOutputStream.computeMessageSize(33, (MessageLite) this.E.get(i20));
            }
            int j10 = size + j() + this.f33911i.size();
            this.G = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f33918u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33918u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33918u;
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
            if ((this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f33912o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33912o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f33912o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f33912o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f33912o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f33912o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f33912o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasTypeTable() {
            if ((this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f33912o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f33914q);
            }
            if ((this.f33912o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f33915r);
            }
            if ((this.f33912o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f33916s);
            }
            for (int i10 = 0; i10 < this.f33918u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33918u.get(i10));
            }
            if ((this.f33912o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f33919v);
            }
            for (int i11 = 0; i11 < this.A.size(); i11++) {
                codedOutputStream.writeMessage(6, (MessageLite) this.A.get(i11));
            }
            if ((this.f33912o & 16) == 16) {
                codedOutputStream.writeInt32(7, this.f33917t);
            }
            if ((this.f33912o & 64) == 64) {
                codedOutputStream.writeInt32(8, this.f33920w);
            }
            if ((this.f33912o & 1) == 1) {
                codedOutputStream.writeInt32(9, this.f33913p);
            }
            for (int i12 = 0; i12 < this.f33921x.size(); i12++) {
                codedOutputStream.writeMessage(10, (MessageLite) this.f33921x.get(i12));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(90);
                codedOutputStream.writeRawVarint32(this.f33923z);
            }
            for (int i13 = 0; i13 < this.f33922y.size(); i13++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33922y.get(i13)).intValue());
            }
            if ((this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(30, this.B);
            }
            for (int i14 = 0; i14 < this.C.size(); i14++) {
                codedOutputStream.writeInt32(31, ((Integer) this.C.get(i14)).intValue());
            }
            if ((this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(32, this.D);
            }
            for (int i15 = 0; i15 < this.E.size(); i15++) {
                codedOutputStream.writeMessage(33, (MessageLite) this.E.get(i15));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33911i);
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
            this.f33923z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33911i = extendableBuilder.getUnknownFields();
        }

        private Function(boolean z10) {
            this.f33923z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33911i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r8v0 */
        /* JADX WARN: Type inference failed for: r8v1 */
        /* JADX WARN: Type inference failed for: r8v2, types: [boolean] */
        private Function(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            boolean z10;
            this.f33923z = -1;
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
                                    this.f33912o |= 2;
                                    this.f33914q = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 16:
                                    z10 = z11;
                                    this.f33912o |= 4;
                                    this.f33915r = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    z10 = z11;
                                    Type.Builder builder = (this.f33912o & 8) == 8 ? this.f33916s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33916s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33916s = builder.buildPartial();
                                    }
                                    this.f33912o |= 8;
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    z10 = z11;
                                    boolean z14 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z14) {
                                        this.f33918u = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33918u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 42:
                                    z10 = z11;
                                    Type.Builder builder2 = (this.f33912o & 32) == 32 ? this.f33919v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33919v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f33919v = builder2.buildPartial();
                                    }
                                    this.f33912o |= 32;
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
                                    this.f33912o |= 16;
                                    this.f33917t = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 64:
                                    z10 = z11;
                                    this.f33912o |= 64;
                                    this.f33920w = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 72:
                                    z10 = z11;
                                    this.f33912o |= 1;
                                    this.f33913p = codedInputStream.readInt32();
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 82:
                                    z10 = z11;
                                    boolean z16 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z16) {
                                        this.f33921x = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33921x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 88:
                                    z10 = z11;
                                    boolean z17 = (z13 ? 1 : 0) & true;
                                    z13 = z13;
                                    if (!z17) {
                                        this.f33922y = new ArrayList();
                                        z13 = (z13 ? 1 : 0) | true;
                                    }
                                    this.f33922y.add(Integer.valueOf(codedInputStream.readInt32()));
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
                                            this.f33922y = new ArrayList();
                                            z13 = (z13 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33922y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    z11 = z10;
                                    z13 = z13;
                                case 242:
                                    z10 = z11;
                                    TypeTable.Builder builder3 = (this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.B.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.B = typeTable;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(typeTable);
                                        this.B = builder3.buildPartial();
                                    }
                                    this.f33912o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
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
                                    Contract.Builder builder4 = (this.f33912o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.D.toBuilder() : null;
                                    Contract contract = (Contract) codedInputStream.readMessage(Contract.PARSER, extensionRegistryLite);
                                    this.D = contract;
                                    if (builder4 != null) {
                                        builder4.mergeFrom(contract);
                                        this.D = builder4.buildPartial();
                                    }
                                    this.f33912o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
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
                                this.f33918u = Collections.unmodifiableList(this.f33918u);
                            }
                            if (((z13 ? 1 : 0) & true) == r82) {
                                this.A = Collections.unmodifiableList(this.A);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f33921x = Collections.unmodifiableList(this.f33921x);
                            }
                            if ((z13 ? 1 : 0) & true) {
                                this.f33922y = Collections.unmodifiableList(this.f33922y);
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
                                this.f33911i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f33911i = newOutput.toByteString();
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
                        this.f33918u = Collections.unmodifiableList(this.f33918u);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.A = Collections.unmodifiableList(this.A);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f33921x = Collections.unmodifiableList(this.f33921x);
                    }
                    if ((z13 ? 1 : 0) & true) {
                        this.f33922y = Collections.unmodifiableList(this.f33922y);
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
                        this.f33911i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33911i = newOutput.toByteString();
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
        private static Internal.EnumLiteMap f33936e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33938d;

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
            this.f33938d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33938d;
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
        private static Internal.EnumLiteMap f33939e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f33941d;

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
            this.f33941d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f33941d;
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
        private static final Package f33942w;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33943i;

        /* renamed from: o  reason: collision with root package name */
        private int f33944o;

        /* renamed from: p  reason: collision with root package name */
        private List f33945p;

        /* renamed from: q  reason: collision with root package name */
        private List f33946q;

        /* renamed from: r  reason: collision with root package name */
        private List f33947r;

        /* renamed from: s  reason: collision with root package name */
        private TypeTable f33948s;

        /* renamed from: t  reason: collision with root package name */
        private VersionRequirementTable f33949t;

        /* renamed from: u  reason: collision with root package name */
        private byte f33950u;

        /* renamed from: v  reason: collision with root package name */
        private int f33951v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Package, Builder> implements PackageOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33952o;

            /* renamed from: p  reason: collision with root package name */
            private List f33953p;

            /* renamed from: q  reason: collision with root package name */
            private List f33954q;

            /* renamed from: r  reason: collision with root package name */
            private List f33955r;

            /* renamed from: s  reason: collision with root package name */
            private TypeTable f33956s;

            /* renamed from: t  reason: collision with root package name */
            private VersionRequirementTable f33957t;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33953p = list;
                this.f33954q = list;
                this.f33955r = list;
                this.f33956s = TypeTable.getDefaultInstance();
                this.f33957t = VersionRequirementTable.getDefaultInstance();
                m();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33952o & 1) != 1) {
                    this.f33953p = new ArrayList(this.f33953p);
                    this.f33952o |= 1;
                }
            }

            private void k() {
                if ((this.f33952o & 2) != 2) {
                    this.f33954q = new ArrayList(this.f33954q);
                    this.f33952o |= 2;
                }
            }

            private void l() {
                if ((this.f33952o & 4) != 4) {
                    this.f33955r = new ArrayList(this.f33955r);
                    this.f33952o |= 4;
                }
            }

            private void m() {
            }

            public Package buildPartial() {
                Package r02 = new Package(this);
                int i10 = this.f33952o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f33953p = Collections.unmodifiableList(this.f33953p);
                    this.f33952o &= -2;
                }
                r02.f33945p = this.f33953p;
                if ((this.f33952o & 2) == 2) {
                    this.f33954q = Collections.unmodifiableList(this.f33954q);
                    this.f33952o &= -3;
                }
                r02.f33946q = this.f33954q;
                if ((this.f33952o & 4) == 4) {
                    this.f33955r = Collections.unmodifiableList(this.f33955r);
                    this.f33952o &= -5;
                }
                r02.f33947r = this.f33955r;
                if ((i10 & 8) != 8) {
                    i11 = 0;
                }
                r02.f33948s = this.f33956s;
                if ((i10 & 16) == 16) {
                    i11 |= 2;
                }
                r02.f33949t = this.f33957t;
                r02.f33944o = i11;
                return r02;
            }

            public Function getFunction(int i10) {
                return (Function) this.f33953p.get(i10);
            }

            public int getFunctionCount() {
                return this.f33953p.size();
            }

            public Property getProperty(int i10) {
                return (Property) this.f33954q.get(i10);
            }

            public int getPropertyCount() {
                return this.f33954q.size();
            }

            public TypeAlias getTypeAlias(int i10) {
                return (TypeAlias) this.f33955r.get(i10);
            }

            public int getTypeAliasCount() {
                return this.f33955r.size();
            }

            public TypeTable getTypeTable() {
                return this.f33956s;
            }

            public boolean hasTypeTable() {
                if ((this.f33952o & 8) == 8) {
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
                if ((this.f33952o & 8) == 8 && this.f33956s != TypeTable.getDefaultInstance()) {
                    this.f33956s = TypeTable.newBuilder(this.f33956s).mergeFrom(typeTable).buildPartial();
                } else {
                    this.f33956s = typeTable;
                }
                this.f33952o |= 8;
                return this;
            }

            public Builder mergeVersionRequirementTable(VersionRequirementTable versionRequirementTable) {
                if ((this.f33952o & 16) == 16 && this.f33957t != VersionRequirementTable.getDefaultInstance()) {
                    this.f33957t = VersionRequirementTable.newBuilder(this.f33957t).mergeFrom(versionRequirementTable).buildPartial();
                } else {
                    this.f33957t = versionRequirementTable;
                }
                this.f33952o |= 16;
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
                if (!r32.f33945p.isEmpty()) {
                    if (this.f33953p.isEmpty()) {
                        this.f33953p = r32.f33945p;
                        this.f33952o &= -2;
                    } else {
                        j();
                        this.f33953p.addAll(r32.f33945p);
                    }
                }
                if (!r32.f33946q.isEmpty()) {
                    if (this.f33954q.isEmpty()) {
                        this.f33954q = r32.f33946q;
                        this.f33952o &= -3;
                    } else {
                        k();
                        this.f33954q.addAll(r32.f33946q);
                    }
                }
                if (!r32.f33947r.isEmpty()) {
                    if (this.f33955r.isEmpty()) {
                        this.f33955r = r32.f33947r;
                        this.f33952o &= -5;
                    } else {
                        l();
                        this.f33955r.addAll(r32.f33947r);
                    }
                }
                if (r32.hasTypeTable()) {
                    mergeTypeTable(r32.getTypeTable());
                }
                if (r32.hasVersionRequirementTable()) {
                    mergeVersionRequirementTable(r32.getVersionRequirementTable());
                }
                f(r32);
                setUnknownFields(getUnknownFields().concat(r32.f33943i));
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
            f33942w = r02;
            r02.w();
        }

        public static Package getDefaultInstance() {
            return f33942w;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static Package parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void w() {
            List list = Collections.EMPTY_LIST;
            this.f33945p = list;
            this.f33946q = list;
            this.f33947r = list;
            this.f33948s = TypeTable.getDefaultInstance();
            this.f33949t = VersionRequirementTable.getDefaultInstance();
        }

        public Function getFunction(int i10) {
            return (Function) this.f33945p.get(i10);
        }

        public int getFunctionCount() {
            return this.f33945p.size();
        }

        public List<Function> getFunctionList() {
            return this.f33945p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Package> getParserForType() {
            return PARSER;
        }

        public Property getProperty(int i10) {
            return (Property) this.f33946q.get(i10);
        }

        public int getPropertyCount() {
            return this.f33946q.size();
        }

        public List<Property> getPropertyList() {
            return this.f33946q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f33951v;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33945p.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f33945p.get(i12));
            }
            for (int i13 = 0; i13 < this.f33946q.size(); i13++) {
                i11 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33946q.get(i13));
            }
            for (int i14 = 0; i14 < this.f33947r.size(); i14++) {
                i11 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f33947r.get(i14));
            }
            if ((this.f33944o & 1) == 1) {
                i11 += CodedOutputStream.computeMessageSize(30, this.f33948s);
            }
            if ((this.f33944o & 2) == 2) {
                i11 += CodedOutputStream.computeMessageSize(32, this.f33949t);
            }
            int j10 = i11 + j() + this.f33943i.size();
            this.f33951v = j10;
            return j10;
        }

        public TypeAlias getTypeAlias(int i10) {
            return (TypeAlias) this.f33947r.get(i10);
        }

        public int getTypeAliasCount() {
            return this.f33947r.size();
        }

        public List<TypeAlias> getTypeAliasList() {
            return this.f33947r;
        }

        public TypeTable getTypeTable() {
            return this.f33948s;
        }

        public VersionRequirementTable getVersionRequirementTable() {
            return this.f33949t;
        }

        public boolean hasTypeTable() {
            if ((this.f33944o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionRequirementTable() {
            if ((this.f33944o & 2) == 2) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33950u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getFunctionCount(); i10++) {
                if (!getFunction(i10).isInitialized()) {
                    this.f33950u = (byte) 0;
                    return false;
                }
            }
            for (int i11 = 0; i11 < getPropertyCount(); i11++) {
                if (!getProperty(i11).isInitialized()) {
                    this.f33950u = (byte) 0;
                    return false;
                }
            }
            for (int i12 = 0; i12 < getTypeAliasCount(); i12++) {
                if (!getTypeAlias(i12).isInitialized()) {
                    this.f33950u = (byte) 0;
                    return false;
                }
            }
            if (hasTypeTable() && !getTypeTable().isInitialized()) {
                this.f33950u = (byte) 0;
                return false;
            } else if (!i()) {
                this.f33950u = (byte) 0;
                return false;
            } else {
                this.f33950u = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            for (int i10 = 0; i10 < this.f33945p.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f33945p.get(i10));
            }
            for (int i11 = 0; i11 < this.f33946q.size(); i11++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33946q.get(i11));
            }
            for (int i12 = 0; i12 < this.f33947r.size(); i12++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f33947r.get(i12));
            }
            if ((this.f33944o & 1) == 1) {
                codedOutputStream.writeMessage(30, this.f33948s);
            }
            if ((this.f33944o & 2) == 2) {
                codedOutputStream.writeMessage(32, this.f33949t);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33943i);
        }

        public static Builder newBuilder(Package r12) {
            return newBuilder().mergeFrom(r12);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public Package getDefaultInstanceForType() {
            return f33942w;
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
            this.f33950u = (byte) -1;
            this.f33951v = -1;
            this.f33943i = extendableBuilder.getUnknownFields();
        }

        private Package(boolean z10) {
            this.f33950u = (byte) -1;
            this.f33951v = -1;
            this.f33943i = ByteString.EMPTY;
        }

        private Package(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33950u = (byte) -1;
            this.f33951v = -1;
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
                                    this.f33945p = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33945p.add(codedInputStream.readMessage(Function.PARSER, extensionRegistryLite));
                            } else if (readTag == 34) {
                                boolean z13 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z13) {
                                    this.f33946q = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33946q.add(codedInputStream.readMessage(Property.PARSER, extensionRegistryLite));
                            } else if (readTag != 42) {
                                if (readTag == 242) {
                                    TypeTable.Builder builder = (this.f33944o & 1) == 1 ? this.f33948s.toBuilder() : null;
                                    TypeTable typeTable = (TypeTable) codedInputStream.readMessage(TypeTable.PARSER, extensionRegistryLite);
                                    this.f33948s = typeTable;
                                    if (builder != null) {
                                        builder.mergeFrom(typeTable);
                                        this.f33948s = builder.buildPartial();
                                    }
                                    this.f33944o |= 1;
                                } else if (readTag != 258) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    VersionRequirementTable.Builder builder2 = (this.f33944o & 2) == 2 ? this.f33949t.toBuilder() : null;
                                    VersionRequirementTable versionRequirementTable = (VersionRequirementTable) codedInputStream.readMessage(VersionRequirementTable.PARSER, extensionRegistryLite);
                                    this.f33949t = versionRequirementTable;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(versionRequirementTable);
                                        this.f33949t = builder2.buildPartial();
                                    }
                                    this.f33944o |= 2;
                                }
                            } else {
                                boolean z14 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z14) {
                                    this.f33947r = new ArrayList();
                                    z11 = (z11 ? 1 : 0) | true;
                                }
                                this.f33947r.add(codedInputStream.readMessage(TypeAlias.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f33945p = Collections.unmodifiableList(this.f33945p);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33946q = Collections.unmodifiableList(this.f33946q);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33947r = Collections.unmodifiableList(this.f33947r);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33943i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33943i = newOutput.toByteString();
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
                this.f33945p = Collections.unmodifiableList(this.f33945p);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33946q = Collections.unmodifiableList(this.f33946q);
            }
            if ((z11 ? 1 : 0) & true) {
                this.f33947r = Collections.unmodifiableList(this.f33947r);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33943i = newOutput.toByteString();
                throw th4;
            }
            this.f33943i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class PackageFragment extends GeneratedMessageLite.ExtendableMessage<PackageFragment> implements PackageFragmentOrBuilder {
        public static Parser<PackageFragment> PARSER = new a();

        /* renamed from: v  reason: collision with root package name */
        private static final PackageFragment f33958v;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f33959i;

        /* renamed from: o  reason: collision with root package name */
        private int f33960o;

        /* renamed from: p  reason: collision with root package name */
        private StringTable f33961p;

        /* renamed from: q  reason: collision with root package name */
        private QualifiedNameTable f33962q;

        /* renamed from: r  reason: collision with root package name */
        private Package f33963r;

        /* renamed from: s  reason: collision with root package name */
        private List f33964s;

        /* renamed from: t  reason: collision with root package name */
        private byte f33965t;

        /* renamed from: u  reason: collision with root package name */
        private int f33966u;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<PackageFragment, Builder> implements PackageFragmentOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f33967o;

            /* renamed from: p  reason: collision with root package name */
            private StringTable f33968p = StringTable.getDefaultInstance();

            /* renamed from: q  reason: collision with root package name */
            private QualifiedNameTable f33969q = QualifiedNameTable.getDefaultInstance();

            /* renamed from: r  reason: collision with root package name */
            private Package f33970r = Package.getDefaultInstance();

            /* renamed from: s  reason: collision with root package name */
            private List f33971s = Collections.EMPTY_LIST;

            private Builder() {
                k();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33967o & 8) != 8) {
                    this.f33971s = new ArrayList(this.f33971s);
                    this.f33967o |= 8;
                }
            }

            private void k() {
            }

            public PackageFragment buildPartial() {
                PackageFragment packageFragment = new PackageFragment(this);
                int i10 = this.f33967o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                packageFragment.f33961p = this.f33968p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                packageFragment.f33962q = this.f33969q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                packageFragment.f33963r = this.f33970r;
                if ((this.f33967o & 8) == 8) {
                    this.f33971s = Collections.unmodifiableList(this.f33971s);
                    this.f33967o &= -9;
                }
                packageFragment.f33964s = this.f33971s;
                packageFragment.f33960o = i11;
                return packageFragment;
            }

            public Class getClass_(int i10) {
                return (Class) this.f33971s.get(i10);
            }

            public int getClass_Count() {
                return this.f33971s.size();
            }

            public Package getPackage() {
                return this.f33970r;
            }

            public QualifiedNameTable getQualifiedNames() {
                return this.f33969q;
            }

            public boolean hasPackage() {
                if ((this.f33967o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasQualifiedNames() {
                if ((this.f33967o & 2) == 2) {
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
                if ((this.f33967o & 4) == 4 && this.f33970r != Package.getDefaultInstance()) {
                    this.f33970r = Package.newBuilder(this.f33970r).mergeFrom(r42).buildPartial();
                } else {
                    this.f33970r = r42;
                }
                this.f33967o |= 4;
                return this;
            }

            public Builder mergeQualifiedNames(QualifiedNameTable qualifiedNameTable) {
                if ((this.f33967o & 2) == 2 && this.f33969q != QualifiedNameTable.getDefaultInstance()) {
                    this.f33969q = QualifiedNameTable.newBuilder(this.f33969q).mergeFrom(qualifiedNameTable).buildPartial();
                } else {
                    this.f33969q = qualifiedNameTable;
                }
                this.f33967o |= 2;
                return this;
            }

            public Builder mergeStrings(StringTable stringTable) {
                if ((this.f33967o & 1) == 1 && this.f33968p != StringTable.getDefaultInstance()) {
                    this.f33968p = StringTable.newBuilder(this.f33968p).mergeFrom(stringTable).buildPartial();
                } else {
                    this.f33968p = stringTable;
                }
                this.f33967o |= 1;
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
                if (!packageFragment.f33964s.isEmpty()) {
                    if (this.f33971s.isEmpty()) {
                        this.f33971s = packageFragment.f33964s;
                        this.f33967o &= -9;
                    } else {
                        j();
                        this.f33971s.addAll(packageFragment.f33964s);
                    }
                }
                f(packageFragment);
                setUnknownFields(getUnknownFields().concat(packageFragment.f33959i));
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
            f33958v = packageFragment;
            packageFragment.t();
        }

        public static PackageFragment getDefaultInstance() {
            return f33958v;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static PackageFragment parseFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseFrom(inputStream, extensionRegistryLite);
        }

        private void t() {
            this.f33961p = StringTable.getDefaultInstance();
            this.f33962q = QualifiedNameTable.getDefaultInstance();
            this.f33963r = Package.getDefaultInstance();
            this.f33964s = Collections.EMPTY_LIST;
        }

        public Class getClass_(int i10) {
            return (Class) this.f33964s.get(i10);
        }

        public int getClass_Count() {
            return this.f33964s.size();
        }

        public List<Class> getClass_List() {
            return this.f33964s;
        }

        public Package getPackage() {
            return this.f33963r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<PackageFragment> getParserForType() {
            return PARSER;
        }

        public QualifiedNameTable getQualifiedNames() {
            return this.f33962q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f33966u;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33960o & 1) == 1) {
                i10 = CodedOutputStream.computeMessageSize(1, this.f33961p);
            } else {
                i10 = 0;
            }
            if ((this.f33960o & 2) == 2) {
                i10 += CodedOutputStream.computeMessageSize(2, this.f33962q);
            }
            if ((this.f33960o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33963r);
            }
            for (int i12 = 0; i12 < this.f33964s.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33964s.get(i12));
            }
            int j10 = i10 + j() + this.f33959i.size();
            this.f33966u = j10;
            return j10;
        }

        public StringTable getStrings() {
            return this.f33961p;
        }

        public boolean hasPackage() {
            if ((this.f33960o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasQualifiedNames() {
            if ((this.f33960o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasStrings() {
            if ((this.f33960o & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f33965t;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (hasQualifiedNames() && !getQualifiedNames().isInitialized()) {
                this.f33965t = (byte) 0;
                return false;
            } else if (hasPackage() && !getPackage().isInitialized()) {
                this.f33965t = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getClass_Count(); i10++) {
                    if (!getClass_(i10).isInitialized()) {
                        this.f33965t = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f33965t = (byte) 0;
                    return false;
                }
                this.f33965t = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f33960o & 1) == 1) {
                codedOutputStream.writeMessage(1, this.f33961p);
            }
            if ((this.f33960o & 2) == 2) {
                codedOutputStream.writeMessage(2, this.f33962q);
            }
            if ((this.f33960o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f33963r);
            }
            for (int i10 = 0; i10 < this.f33964s.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33964s.get(i10));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33959i);
        }

        public static Builder newBuilder(PackageFragment packageFragment) {
            return newBuilder().mergeFrom(packageFragment);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public PackageFragment getDefaultInstanceForType() {
            return f33958v;
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
            this.f33965t = (byte) -1;
            this.f33966u = -1;
            this.f33959i = extendableBuilder.getUnknownFields();
        }

        private PackageFragment(boolean z10) {
            this.f33965t = (byte) -1;
            this.f33966u = -1;
            this.f33959i = ByteString.EMPTY;
        }

        private PackageFragment(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33965t = (byte) -1;
            this.f33966u = -1;
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
                                StringTable.Builder builder = (this.f33960o & 1) == 1 ? this.f33961p.toBuilder() : null;
                                StringTable stringTable = (StringTable) codedInputStream.readMessage(StringTable.PARSER, extensionRegistryLite);
                                this.f33961p = stringTable;
                                if (builder != null) {
                                    builder.mergeFrom(stringTable);
                                    this.f33961p = builder.buildPartial();
                                }
                                this.f33960o |= 1;
                            } else if (readTag == 18) {
                                QualifiedNameTable.Builder builder2 = (this.f33960o & 2) == 2 ? this.f33962q.toBuilder() : null;
                                QualifiedNameTable qualifiedNameTable = (QualifiedNameTable) codedInputStream.readMessage(QualifiedNameTable.PARSER, extensionRegistryLite);
                                this.f33962q = qualifiedNameTable;
                                if (builder2 != null) {
                                    builder2.mergeFrom(qualifiedNameTable);
                                    this.f33962q = builder2.buildPartial();
                                }
                                this.f33960o |= 2;
                            } else if (readTag == 26) {
                                Package.Builder builder3 = (this.f33960o & 4) == 4 ? this.f33963r.toBuilder() : null;
                                Package r62 = (Package) codedInputStream.readMessage(Package.PARSER, extensionRegistryLite);
                                this.f33963r = r62;
                                if (builder3 != null) {
                                    builder3.mergeFrom(r62);
                                    this.f33963r = builder3.buildPartial();
                                }
                                this.f33960o |= 4;
                            } else if (readTag != 34) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                boolean z12 = (z11 ? 1 : 0) & true;
                                z11 = z11;
                                if (!z12) {
                                    this.f33964s = new ArrayList();
                                    z11 = true;
                                }
                                this.f33964s.add(codedInputStream.readMessage(Class.PARSER, extensionRegistryLite));
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if ((z11 ? 1 : 0) & true) {
                            this.f33964s = Collections.unmodifiableList(this.f33964s);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f33959i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33959i = newOutput.toByteString();
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
                this.f33964s = Collections.unmodifiableList(this.f33964s);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33959i = newOutput.toByteString();
                throw th4;
            }
            this.f33959i = newOutput.toByteString();
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
        private final ByteString f33972i;

        /* renamed from: o  reason: collision with root package name */
        private int f33973o;

        /* renamed from: p  reason: collision with root package name */
        private int f33974p;

        /* renamed from: q  reason: collision with root package name */
        private int f33975q;

        /* renamed from: r  reason: collision with root package name */
        private int f33976r;

        /* renamed from: s  reason: collision with root package name */
        private Type f33977s;

        /* renamed from: t  reason: collision with root package name */
        private int f33978t;

        /* renamed from: u  reason: collision with root package name */
        private List f33979u;

        /* renamed from: v  reason: collision with root package name */
        private Type f33980v;

        /* renamed from: w  reason: collision with root package name */
        private int f33981w;

        /* renamed from: x  reason: collision with root package name */
        private List f33982x;

        /* renamed from: y  reason: collision with root package name */
        private List f33983y;

        /* renamed from: z  reason: collision with root package name */
        private int f33984z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<Property, Builder> implements PropertyOrBuilder {
            private int A;
            private int B;
            private List C;
            private List D;

            /* renamed from: o  reason: collision with root package name */
            private int f33985o;

            /* renamed from: r  reason: collision with root package name */
            private int f33988r;

            /* renamed from: t  reason: collision with root package name */
            private int f33990t;

            /* renamed from: u  reason: collision with root package name */
            private List f33991u;

            /* renamed from: v  reason: collision with root package name */
            private Type f33992v;

            /* renamed from: w  reason: collision with root package name */
            private int f33993w;

            /* renamed from: x  reason: collision with root package name */
            private List f33994x;

            /* renamed from: y  reason: collision with root package name */
            private List f33995y;

            /* renamed from: z  reason: collision with root package name */
            private ValueParameter f33996z;

            /* renamed from: p  reason: collision with root package name */
            private int f33986p = 518;

            /* renamed from: q  reason: collision with root package name */
            private int f33987q = 2054;

            /* renamed from: s  reason: collision with root package name */
            private Type f33989s = Type.getDefaultInstance();

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f33991u = list;
                this.f33992v = Type.getDefaultInstance();
                this.f33994x = list;
                this.f33995y = list;
                this.f33996z = ValueParameter.getDefaultInstance();
                this.C = list;
                this.D = list;
                p();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f33985o & 16384) != 16384) {
                    this.D = new ArrayList(this.D);
                    this.f33985o |= 16384;
                }
            }

            private void k() {
                if ((this.f33985o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f33995y = new ArrayList(this.f33995y);
                    this.f33985o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f33985o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f33994x = new ArrayList(this.f33994x);
                    this.f33985o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void m() {
                if ((this.f33985o & 32) != 32) {
                    this.f33991u = new ArrayList(this.f33991u);
                    this.f33985o |= 32;
                }
            }

            private void o() {
                if ((this.f33985o & 8192) != 8192) {
                    this.C = new ArrayList(this.C);
                    this.f33985o |= 8192;
                }
            }

            private void p() {
            }

            public Property buildPartial() {
                Property property = new Property(this);
                int i10 = this.f33985o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                property.f33974p = this.f33986p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                property.f33975q = this.f33987q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                property.f33976r = this.f33988r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                property.f33977s = this.f33989s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                property.f33978t = this.f33990t;
                if ((this.f33985o & 32) == 32) {
                    this.f33991u = Collections.unmodifiableList(this.f33991u);
                    this.f33985o &= -33;
                }
                property.f33979u = this.f33991u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                property.f33980v = this.f33992v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                property.f33981w = this.f33993w;
                if ((this.f33985o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f33994x = Collections.unmodifiableList(this.f33994x);
                    this.f33985o &= -257;
                }
                property.f33982x = this.f33994x;
                if ((this.f33985o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f33995y = Collections.unmodifiableList(this.f33995y);
                    this.f33985o &= -513;
                }
                property.f33983y = this.f33995y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                property.A = this.f33996z;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                property.B = this.A;
                if ((i10 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                property.C = this.B;
                if ((this.f33985o & 8192) == 8192) {
                    this.C = Collections.unmodifiableList(this.C);
                    this.f33985o &= -8193;
                }
                property.D = this.C;
                if ((this.f33985o & 16384) == 16384) {
                    this.D = Collections.unmodifiableList(this.D);
                    this.f33985o &= -16385;
                }
                property.E = this.D;
                property.f33973o = i11;
                return property;
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.D.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.D.size();
            }

            public Type getContextReceiverType(int i10) {
                return (Type) this.f33994x.get(i10);
            }

            public int getContextReceiverTypeCount() {
                return this.f33994x.size();
            }

            public Type getReceiverType() {
                return this.f33992v;
            }

            public Type getReturnType() {
                return this.f33989s;
            }

            public ValueParameter getSetterValueParameter() {
                return this.f33996z;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f33991u.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f33991u.size();
            }

            public boolean hasName() {
                if ((this.f33985o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasReceiverType() {
                if ((this.f33985o & 64) == 64) {
                    return true;
                }
                return false;
            }

            public boolean hasReturnType() {
                if ((this.f33985o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasSetterValueParameter() {
                if ((this.f33985o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
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
                if ((this.f33985o & 64) == 64 && this.f33992v != Type.getDefaultInstance()) {
                    this.f33992v = Type.newBuilder(this.f33992v).mergeFrom(type).buildPartial();
                } else {
                    this.f33992v = type;
                }
                this.f33985o |= 64;
                return this;
            }

            public Builder mergeReturnType(Type type) {
                if ((this.f33985o & 8) == 8 && this.f33989s != Type.getDefaultInstance()) {
                    this.f33989s = Type.newBuilder(this.f33989s).mergeFrom(type).buildPartial();
                } else {
                    this.f33989s = type;
                }
                this.f33985o |= 8;
                return this;
            }

            public Builder mergeSetterValueParameter(ValueParameter valueParameter) {
                if ((this.f33985o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 && this.f33996z != ValueParameter.getDefaultInstance()) {
                    this.f33996z = ValueParameter.newBuilder(this.f33996z).mergeFrom(valueParameter).buildPartial();
                } else {
                    this.f33996z = valueParameter;
                }
                this.f33985o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f33985o |= 1;
                this.f33986p = i10;
                return this;
            }

            public Builder setGetterFlags(int i10) {
                this.f33985o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                this.A = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f33985o |= 4;
                this.f33988r = i10;
                return this;
            }

            public Builder setOldFlags(int i10) {
                this.f33985o |= 2;
                this.f33987q = i10;
                return this;
            }

            public Builder setReceiverTypeId(int i10) {
                this.f33985o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f33993w = i10;
                return this;
            }

            public Builder setReturnTypeId(int i10) {
                this.f33985o |= 16;
                this.f33990t = i10;
                return this;
            }

            public Builder setSetterFlags(int i10) {
                this.f33985o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
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
                if (!property.f33979u.isEmpty()) {
                    if (this.f33991u.isEmpty()) {
                        this.f33991u = property.f33979u;
                        this.f33985o &= -33;
                    } else {
                        m();
                        this.f33991u.addAll(property.f33979u);
                    }
                }
                if (property.hasReceiverType()) {
                    mergeReceiverType(property.getReceiverType());
                }
                if (property.hasReceiverTypeId()) {
                    setReceiverTypeId(property.getReceiverTypeId());
                }
                if (!property.f33982x.isEmpty()) {
                    if (this.f33994x.isEmpty()) {
                        this.f33994x = property.f33982x;
                        this.f33985o &= -257;
                    } else {
                        l();
                        this.f33994x.addAll(property.f33982x);
                    }
                }
                if (!property.f33983y.isEmpty()) {
                    if (this.f33995y.isEmpty()) {
                        this.f33995y = property.f33983y;
                        this.f33985o &= -513;
                    } else {
                        k();
                        this.f33995y.addAll(property.f33983y);
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
                        this.f33985o &= -8193;
                    } else {
                        o();
                        this.C.addAll(property.D);
                    }
                }
                if (!property.E.isEmpty()) {
                    if (this.D.isEmpty()) {
                        this.D = property.E;
                        this.f33985o &= -16385;
                    } else {
                        j();
                        this.D.addAll(property.E);
                    }
                }
                f(property);
                setUnknownFields(getUnknownFields().concat(property.f33972i));
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
            this.f33974p = 518;
            this.f33975q = 2054;
            this.f33976r = 0;
            this.f33977s = Type.getDefaultInstance();
            this.f33978t = 0;
            List list = Collections.EMPTY_LIST;
            this.f33979u = list;
            this.f33980v = Type.getDefaultInstance();
            this.f33981w = 0;
            this.f33982x = list;
            this.f33983y = list;
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
            return Builder.g();
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.E.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.E.size();
        }

        public Type getContextReceiverType(int i10) {
            return (Type) this.f33982x.get(i10);
        }

        public int getContextReceiverTypeCount() {
            return this.f33982x.size();
        }

        public List<Integer> getContextReceiverTypeIdList() {
            return this.f33983y;
        }

        public List<Type> getContextReceiverTypeList() {
            return this.f33982x;
        }

        public int getFlags() {
            return this.f33974p;
        }

        public int getGetterFlags() {
            return this.B;
        }

        public int getName() {
            return this.f33976r;
        }

        public int getOldFlags() {
            return this.f33975q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<Property> getParserForType() {
            return PARSER;
        }

        public Type getReceiverType() {
            return this.f33980v;
        }

        public int getReceiverTypeId() {
            return this.f33981w;
        }

        public Type getReturnType() {
            return this.f33977s;
        }

        public int getReturnTypeId() {
            return this.f33978t;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.G;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f33973o & 2) == 2) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f33975q);
            } else {
                i10 = 0;
            }
            if ((this.f33973o & 4) == 4) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f33976r);
            }
            if ((this.f33973o & 8) == 8) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f33977s);
            }
            for (int i12 = 0; i12 < this.f33979u.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(4, (MessageLite) this.f33979u.get(i12));
            }
            if ((this.f33973o & 32) == 32) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f33980v);
            }
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeMessageSize(6, this.A);
            }
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeInt32Size(7, this.B);
            }
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(8, this.C);
            }
            if ((this.f33973o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f33978t);
            }
            if ((this.f33973o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(10, this.f33981w);
            }
            if ((this.f33973o & 1) == 1) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f33974p);
            }
            for (int i13 = 0; i13 < this.f33982x.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(12, (MessageLite) this.f33982x.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f33983y.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f33983y.get(i15)).intValue());
            }
            int i16 = i10 + i14;
            if (!getContextReceiverTypeIdList().isEmpty()) {
                i16 = i16 + 1 + CodedOutputStream.computeInt32SizeNoTag(i14);
            }
            this.f33984z = i14;
            int i17 = 0;
            for (int i18 = 0; i18 < this.D.size(); i18++) {
                i17 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.D.get(i18)).intValue());
            }
            int size = i16 + i17 + (getVersionRequirementList().size() * 2);
            for (int i19 = 0; i19 < this.E.size(); i19++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.E.get(i19));
            }
            int j10 = size + j() + this.f33972i.size();
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
            return (TypeParameter) this.f33979u.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f33979u.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f33979u;
        }

        public List<Integer> getVersionRequirementList() {
            return this.D;
        }

        public boolean hasFlags() {
            if ((this.f33973o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasGetterFlags() {
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f33973o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasOldFlags() {
            if ((this.f33973o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverType() {
            if ((this.f33973o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasReceiverTypeId() {
            if ((this.f33973o & 64) == 64) {
                return true;
            }
            return false;
        }

        public boolean hasReturnType() {
            if ((this.f33973o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasReturnTypeId() {
            if ((this.f33973o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasSetterFlags() {
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasSetterValueParameter() {
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
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
            if ((this.f33973o & 2) == 2) {
                codedOutputStream.writeInt32(1, this.f33975q);
            }
            if ((this.f33973o & 4) == 4) {
                codedOutputStream.writeInt32(2, this.f33976r);
            }
            if ((this.f33973o & 8) == 8) {
                codedOutputStream.writeMessage(3, this.f33977s);
            }
            for (int i10 = 0; i10 < this.f33979u.size(); i10++) {
                codedOutputStream.writeMessage(4, (MessageLite) this.f33979u.get(i10));
            }
            if ((this.f33973o & 32) == 32) {
                codedOutputStream.writeMessage(5, this.f33980v);
            }
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeMessage(6, this.A);
            }
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeInt32(7, this.B);
            }
            if ((this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(8, this.C);
            }
            if ((this.f33973o & 16) == 16) {
                codedOutputStream.writeInt32(9, this.f33978t);
            }
            if ((this.f33973o & 64) == 64) {
                codedOutputStream.writeInt32(10, this.f33981w);
            }
            if ((this.f33973o & 1) == 1) {
                codedOutputStream.writeInt32(11, this.f33974p);
            }
            for (int i11 = 0; i11 < this.f33982x.size(); i11++) {
                codedOutputStream.writeMessage(12, (MessageLite) this.f33982x.get(i11));
            }
            if (getContextReceiverTypeIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(106);
                codedOutputStream.writeRawVarint32(this.f33984z);
            }
            for (int i12 = 0; i12 < this.f33983y.size(); i12++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f33983y.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.D.size(); i13++) {
                codedOutputStream.writeInt32(31, ((Integer) this.D.get(i13)).intValue());
            }
            for (int i14 = 0; i14 < this.E.size(); i14++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.E.get(i14));
            }
            k10.writeUntil(19000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f33972i);
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
            this.f33984z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33972i = extendableBuilder.getUnknownFields();
        }

        private Property(boolean z10) {
            this.f33984z = -1;
            this.F = (byte) -1;
            this.G = -1;
            this.f33972i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private Property(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f33984z = -1;
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
                                    this.f33973o |= 2;
                                    this.f33975q = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f33973o |= 4;
                                    this.f33976r = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    Type.Builder builder = (this.f33973o & 8) == 8 ? this.f33977s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33977s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f33977s = builder.buildPartial();
                                    }
                                    this.f33973o |= 8;
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    boolean z12 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z12) {
                                        this.f33979u = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33979u.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case 42:
                                    Type.Builder builder2 = (this.f33973o & 32) == 32 ? this.f33980v.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f33980v = type2;
                                    if (builder2 != null) {
                                        builder2.mergeFrom(type2);
                                        this.f33980v = builder2.buildPartial();
                                    }
                                    this.f33973o |= 32;
                                    continue;
                                case 50:
                                    ValueParameter.Builder builder3 = (this.f33973o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128 ? this.A.toBuilder() : null;
                                    ValueParameter valueParameter = (ValueParameter) codedInputStream.readMessage(ValueParameter.PARSER, extensionRegistryLite);
                                    this.A = valueParameter;
                                    if (builder3 != null) {
                                        builder3.mergeFrom(valueParameter);
                                        this.A = builder3.buildPartial();
                                    }
                                    this.f33973o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f33973o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    this.B = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f33973o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f33973o |= 16;
                                    this.f33978t = codedInputStream.readInt32();
                                    continue;
                                case 80:
                                    this.f33973o |= 64;
                                    this.f33981w = codedInputStream.readInt32();
                                    continue;
                                case 88:
                                    this.f33973o |= 1;
                                    this.f33974p = codedInputStream.readInt32();
                                    continue;
                                case 98:
                                    boolean z13 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z13) {
                                        this.f33982x = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33982x.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                                    continue;
                                case 104:
                                    boolean z14 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z14) {
                                        this.f33983y = new ArrayList();
                                        z11 = (z11 ? 1 : 0) | true;
                                    }
                                    this.f33983y.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case 106:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    boolean z15 = (z11 ? 1 : 0) & true;
                                    z11 = z11;
                                    if (!z15) {
                                        z11 = z11;
                                        if (codedInputStream.getBytesUntilLimit() > 0) {
                                            this.f33983y = new ArrayList();
                                            z11 = (z11 ? 1 : 0) | true;
                                        }
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f33983y.add(Integer.valueOf(codedInputStream.readInt32()));
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
                            this.f33979u = Collections.unmodifiableList(this.f33979u);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33982x = Collections.unmodifiableList(this.f33982x);
                        }
                        if ((z11 ? 1 : 0) & true) {
                            this.f33983y = Collections.unmodifiableList(this.f33983y);
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
                            this.f33972i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f33972i = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                } else {
                    if ((z11 ? 1 : 0) & true) {
                        this.f33979u = Collections.unmodifiableList(this.f33979u);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f33982x = Collections.unmodifiableList(this.f33982x);
                    }
                    if ((z11 ? 1 : 0) & true) {
                        this.f33983y = Collections.unmodifiableList(this.f33983y);
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
                        this.f33972i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f33972i = newOutput.toByteString();
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
        private static final QualifiedNameTable f33997q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f33998e;

        /* renamed from: i  reason: collision with root package name */
        private List f33999i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34000o;

        /* renamed from: p  reason: collision with root package name */
        private int f34001p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<QualifiedNameTable, Builder> implements QualifiedNameTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34002e;

            /* renamed from: i  reason: collision with root package name */
            private List f34003i = Collections.EMPTY_LIST;

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
                if ((this.f34002e & 1) != 1) {
                    this.f34003i = new ArrayList(this.f34003i);
                    this.f34002e |= 1;
                }
            }

            private void e() {
            }

            public QualifiedNameTable buildPartial() {
                QualifiedNameTable qualifiedNameTable = new QualifiedNameTable(this);
                if ((this.f34002e & 1) == 1) {
                    this.f34003i = Collections.unmodifiableList(this.f34003i);
                    this.f34002e &= -2;
                }
                qualifiedNameTable.f33999i = this.f34003i;
                return qualifiedNameTable;
            }

            public QualifiedName getQualifiedName(int i10) {
                return (QualifiedName) this.f34003i.get(i10);
            }

            public int getQualifiedNameCount() {
                return this.f34003i.size();
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
                if (!qualifiedNameTable.f33999i.isEmpty()) {
                    if (this.f34003i.isEmpty()) {
                        this.f34003i = qualifiedNameTable.f33999i;
                        this.f34002e &= -2;
                    } else {
                        d();
                        this.f34003i.addAll(qualifiedNameTable.f33999i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(qualifiedNameTable.f33998e));
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
            private static final QualifiedName f34004t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34005e;

            /* renamed from: i  reason: collision with root package name */
            private int f34006i;

            /* renamed from: o  reason: collision with root package name */
            private int f34007o;

            /* renamed from: p  reason: collision with root package name */
            private int f34008p;

            /* renamed from: q  reason: collision with root package name */
            private Kind f34009q;

            /* renamed from: r  reason: collision with root package name */
            private byte f34010r;

            /* renamed from: s  reason: collision with root package name */
            private int f34011s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<QualifiedName, Builder> implements QualifiedNameOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34012e;

                /* renamed from: o  reason: collision with root package name */
                private int f34014o;

                /* renamed from: i  reason: collision with root package name */
                private int f34013i = -1;

                /* renamed from: p  reason: collision with root package name */
                private Kind f34015p = Kind.PACKAGE;

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
                    int i10 = this.f34012e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    qualifiedName.f34007o = this.f34013i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    qualifiedName.f34008p = this.f34014o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    qualifiedName.f34009q = this.f34015p;
                    qualifiedName.f34006i = i11;
                    return qualifiedName;
                }

                public boolean hasShortName() {
                    if ((this.f34012e & 2) == 2) {
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
                    this.f34012e |= 4;
                    this.f34015p = kind;
                    return this;
                }

                public Builder setParentQualifiedName(int i10) {
                    this.f34012e |= 1;
                    this.f34013i = i10;
                    return this;
                }

                public Builder setShortName(int i10) {
                    this.f34012e |= 2;
                    this.f34014o = i10;
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
                    setUnknownFields(getUnknownFields().concat(qualifiedName.f34005e));
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
                private static Internal.EnumLiteMap f34016e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f34018d;

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
                    this.f34018d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f34018d;
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
                f34004t = qualifiedName;
                qualifiedName.m();
            }

            public static QualifiedName getDefaultInstance() {
                return f34004t;
            }

            private void m() {
                this.f34007o = -1;
                this.f34008p = 0;
                this.f34009q = Kind.PACKAGE;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            public Kind getKind() {
                return this.f34009q;
            }

            public int getParentQualifiedName() {
                return this.f34007o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<QualifiedName> getParserForType() {
                return PARSER;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34011s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34006i & 1) == 1) {
                    i10 = CodedOutputStream.computeInt32Size(1, this.f34007o);
                } else {
                    i10 = 0;
                }
                if ((this.f34006i & 2) == 2) {
                    i10 += CodedOutputStream.computeInt32Size(2, this.f34008p);
                }
                if ((this.f34006i & 4) == 4) {
                    i10 += CodedOutputStream.computeEnumSize(3, this.f34009q.getNumber());
                }
                int size = i10 + this.f34005e.size();
                this.f34011s = size;
                return size;
            }

            public int getShortName() {
                return this.f34008p;
            }

            public boolean hasKind() {
                if ((this.f34006i & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasParentQualifiedName() {
                if ((this.f34006i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasShortName() {
                if ((this.f34006i & 2) == 2) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34010r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (!hasShortName()) {
                    this.f34010r = (byte) 0;
                    return false;
                }
                this.f34010r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34006i & 1) == 1) {
                    codedOutputStream.writeInt32(1, this.f34007o);
                }
                if ((this.f34006i & 2) == 2) {
                    codedOutputStream.writeInt32(2, this.f34008p);
                }
                if ((this.f34006i & 4) == 4) {
                    codedOutputStream.writeEnum(3, this.f34009q.getNumber());
                }
                codedOutputStream.writeRawBytes(this.f34005e);
            }

            public static Builder newBuilder(QualifiedName qualifiedName) {
                return newBuilder().mergeFrom(qualifiedName);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public QualifiedName getDefaultInstanceForType() {
                return f34004t;
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
                this.f34010r = (byte) -1;
                this.f34011s = -1;
                this.f34005e = builder.getUnknownFields();
            }

            private QualifiedName(boolean z10) {
                this.f34010r = (byte) -1;
                this.f34011s = -1;
                this.f34005e = ByteString.EMPTY;
            }

            private QualifiedName(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34010r = (byte) -1;
                this.f34011s = -1;
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
                                        this.f34006i |= 1;
                                        this.f34007o = codedInputStream.readInt32();
                                    } else if (readTag == 16) {
                                        this.f34006i |= 2;
                                        this.f34008p = codedInputStream.readInt32();
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
                                            this.f34006i |= 4;
                                            this.f34009q = valueOf;
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
                            this.f34005e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34005e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34005e = newOutput.toByteString();
                    throw th4;
                }
                this.f34005e = newOutput.toByteString();
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
            f33997q = qualifiedNameTable;
            qualifiedNameTable.k();
        }

        public static QualifiedNameTable getDefaultInstance() {
            return f33997q;
        }

        private void k() {
            this.f33999i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<QualifiedNameTable> getParserForType() {
            return PARSER;
        }

        public QualifiedName getQualifiedName(int i10) {
            return (QualifiedName) this.f33999i.get(i10);
        }

        public int getQualifiedNameCount() {
            return this.f33999i.size();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34001p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f33999i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f33999i.get(i12));
            }
            int size = i11 + this.f33998e.size();
            this.f34001p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34000o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getQualifiedNameCount(); i10++) {
                if (!getQualifiedName(i10).isInitialized()) {
                    this.f34000o = (byte) 0;
                    return false;
                }
            }
            this.f34000o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f33999i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f33999i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f33998e);
        }

        public static Builder newBuilder(QualifiedNameTable qualifiedNameTable) {
            return newBuilder().mergeFrom(qualifiedNameTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public QualifiedNameTable getDefaultInstanceForType() {
            return f33997q;
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
            this.f34000o = (byte) -1;
            this.f34001p = -1;
            this.f33998e = builder.getUnknownFields();
        }

        private QualifiedNameTable(boolean z10) {
            this.f34000o = (byte) -1;
            this.f34001p = -1;
            this.f33998e = ByteString.EMPTY;
        }

        private QualifiedNameTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34000o = (byte) -1;
            this.f34001p = -1;
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
                                        this.f33999i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f33999i.add(codedInputStream.readMessage(QualifiedName.PARSER, extensionRegistryLite));
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
                        this.f33999i = Collections.unmodifiableList(this.f33999i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f33998e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f33998e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f33999i = Collections.unmodifiableList(this.f33999i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f33998e = newOutput.toByteString();
                throw th4;
            }
            this.f33998e = newOutput.toByteString();
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
        private static final StringTable f34019q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34020e;

        /* renamed from: i  reason: collision with root package name */
        private LazyStringList f34021i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34022o;

        /* renamed from: p  reason: collision with root package name */
        private int f34023p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<StringTable, Builder> implements StringTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34024e;

            /* renamed from: i  reason: collision with root package name */
            private LazyStringList f34025i = LazyStringArrayList.EMPTY;

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
                if ((this.f34024e & 1) != 1) {
                    this.f34025i = new LazyStringArrayList(this.f34025i);
                    this.f34024e |= 1;
                }
            }

            private void e() {
            }

            public StringTable buildPartial() {
                StringTable stringTable = new StringTable(this);
                if ((this.f34024e & 1) == 1) {
                    this.f34025i = this.f34025i.getUnmodifiableView();
                    this.f34024e &= -2;
                }
                stringTable.f34021i = this.f34025i;
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
                if (!stringTable.f34021i.isEmpty()) {
                    if (this.f34025i.isEmpty()) {
                        this.f34025i = stringTable.f34021i;
                        this.f34024e &= -2;
                    } else {
                        d();
                        this.f34025i.addAll(stringTable.f34021i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(stringTable.f34020e));
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
            f34019q = stringTable;
            stringTable.k();
        }

        public static StringTable getDefaultInstance() {
            return f34019q;
        }

        private void k() {
            this.f34021i = LazyStringArrayList.EMPTY;
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
            int i10 = this.f34023p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34021i.size(); i12++) {
                i11 += CodedOutputStream.computeBytesSizeNoTag(this.f34021i.getByteString(i12));
            }
            int size = i11 + getStringList().size() + this.f34020e.size();
            this.f34023p = size;
            return size;
        }

        public String getString(int i10) {
            return this.f34021i.get(i10);
        }

        public ProtocolStringList getStringList() {
            return this.f34021i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34022o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34022o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34021i.size(); i10++) {
                codedOutputStream.writeBytes(1, this.f34021i.getByteString(i10));
            }
            codedOutputStream.writeRawBytes(this.f34020e);
        }

        public static Builder newBuilder(StringTable stringTable) {
            return newBuilder().mergeFrom(stringTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public StringTable getDefaultInstanceForType() {
            return f34019q;
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
            this.f34022o = (byte) -1;
            this.f34023p = -1;
            this.f34020e = builder.getUnknownFields();
        }

        private StringTable(boolean z10) {
            this.f34022o = (byte) -1;
            this.f34023p = -1;
            this.f34020e = ByteString.EMPTY;
        }

        private StringTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34022o = (byte) -1;
            this.f34023p = -1;
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
                                        this.f34021i = new LazyStringArrayList();
                                        z11 = true;
                                    }
                                    this.f34021i.add(readBytes);
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
                        this.f34021i = this.f34021i.getUnmodifiableView();
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34020e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34020e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34021i = this.f34021i.getUnmodifiableView();
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34020e = newOutput.toByteString();
                throw th4;
            }
            this.f34020e = newOutput.toByteString();
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
        private final ByteString f34026i;

        /* renamed from: o  reason: collision with root package name */
        private int f34027o;

        /* renamed from: p  reason: collision with root package name */
        private List f34028p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f34029q;

        /* renamed from: r  reason: collision with root package name */
        private int f34030r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34031s;

        /* renamed from: t  reason: collision with root package name */
        private int f34032t;

        /* renamed from: u  reason: collision with root package name */
        private int f34033u;

        /* renamed from: v  reason: collision with root package name */
        private int f34034v;

        /* renamed from: w  reason: collision with root package name */
        private int f34035w;

        /* renamed from: x  reason: collision with root package name */
        private int f34036x;

        /* renamed from: y  reason: collision with root package name */
        private Type f34037y;

        /* renamed from: z  reason: collision with root package name */
        private int f34038z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Argument extends GeneratedMessageLite implements ArgumentOrBuilder {
            public static Parser<Argument> PARSER = new a();

            /* renamed from: t  reason: collision with root package name */
            private static final Argument f34039t;

            /* renamed from: e  reason: collision with root package name */
            private final ByteString f34040e;

            /* renamed from: i  reason: collision with root package name */
            private int f34041i;

            /* renamed from: o  reason: collision with root package name */
            private Projection f34042o;

            /* renamed from: p  reason: collision with root package name */
            private Type f34043p;

            /* renamed from: q  reason: collision with root package name */
            private int f34044q;

            /* renamed from: r  reason: collision with root package name */
            private byte f34045r;

            /* renamed from: s  reason: collision with root package name */
            private int f34046s;

            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
            public static final class Builder extends GeneratedMessageLite.Builder<Argument, Builder> implements ArgumentOrBuilder {

                /* renamed from: e  reason: collision with root package name */
                private int f34047e;

                /* renamed from: i  reason: collision with root package name */
                private Projection f34048i = Projection.INV;

                /* renamed from: o  reason: collision with root package name */
                private Type f34049o = Type.getDefaultInstance();

                /* renamed from: p  reason: collision with root package name */
                private int f34050p;

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
                    int i10 = this.f34047e;
                    int i11 = 1;
                    if ((i10 & 1) != 1) {
                        i11 = 0;
                    }
                    argument.f34042o = this.f34048i;
                    if ((i10 & 2) == 2) {
                        i11 |= 2;
                    }
                    argument.f34043p = this.f34049o;
                    if ((i10 & 4) == 4) {
                        i11 |= 4;
                    }
                    argument.f34044q = this.f34050p;
                    argument.f34041i = i11;
                    return argument;
                }

                public Type getType() {
                    return this.f34049o;
                }

                public boolean hasType() {
                    if ((this.f34047e & 2) == 2) {
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
                    if ((this.f34047e & 2) == 2 && this.f34049o != Type.getDefaultInstance()) {
                        this.f34049o = Type.newBuilder(this.f34049o).mergeFrom(type).buildPartial();
                    } else {
                        this.f34049o = type;
                    }
                    this.f34047e |= 2;
                    return this;
                }

                public Builder setProjection(Projection projection) {
                    projection.getClass();
                    this.f34047e |= 1;
                    this.f34048i = projection;
                    return this;
                }

                public Builder setTypeId(int i10) {
                    this.f34047e |= 4;
                    this.f34050p = i10;
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
                    setUnknownFields(getUnknownFields().concat(argument.f34040e));
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
                private static Internal.EnumLiteMap f34051e = new a();

                /* renamed from: d  reason: collision with root package name */
                private final int f34053d;

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
                    this.f34053d = i11;
                }

                @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
                public final int getNumber() {
                    return this.f34053d;
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
                f34039t = argument;
                argument.m();
            }

            public static Argument getDefaultInstance() {
                return f34039t;
            }

            private void m() {
                this.f34042o = Projection.INV;
                this.f34043p = Type.getDefaultInstance();
                this.f34044q = 0;
            }

            public static Builder newBuilder() {
                return Builder.b();
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public Parser<Argument> getParserForType() {
                return PARSER;
            }

            public Projection getProjection() {
                return this.f34042o;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public int getSerializedSize() {
                int i10;
                int i11 = this.f34046s;
                if (i11 != -1) {
                    return i11;
                }
                if ((this.f34041i & 1) == 1) {
                    i10 = CodedOutputStream.computeEnumSize(1, this.f34042o.getNumber());
                } else {
                    i10 = 0;
                }
                if ((this.f34041i & 2) == 2) {
                    i10 += CodedOutputStream.computeMessageSize(2, this.f34043p);
                }
                if ((this.f34041i & 4) == 4) {
                    i10 += CodedOutputStream.computeInt32Size(3, this.f34044q);
                }
                int size = i10 + this.f34040e.size();
                this.f34046s = size;
                return size;
            }

            public Type getType() {
                return this.f34043p;
            }

            public int getTypeId() {
                return this.f34044q;
            }

            public boolean hasProjection() {
                if ((this.f34041i & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f34041i & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasTypeId() {
                if ((this.f34041i & 4) == 4) {
                    return true;
                }
                return false;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                byte b10 = this.f34045r;
                if (b10 == 1) {
                    return true;
                }
                if (b10 == 0) {
                    return false;
                }
                if (hasType() && !getType().isInitialized()) {
                    this.f34045r = (byte) 0;
                    return false;
                }
                this.f34045r = (byte) 1;
                return true;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
            public void writeTo(CodedOutputStream codedOutputStream) {
                getSerializedSize();
                if ((this.f34041i & 1) == 1) {
                    codedOutputStream.writeEnum(1, this.f34042o.getNumber());
                }
                if ((this.f34041i & 2) == 2) {
                    codedOutputStream.writeMessage(2, this.f34043p);
                }
                if ((this.f34041i & 4) == 4) {
                    codedOutputStream.writeInt32(3, this.f34044q);
                }
                codedOutputStream.writeRawBytes(this.f34040e);
            }

            public static Builder newBuilder(Argument argument) {
                return newBuilder().mergeFrom(argument);
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public Argument getDefaultInstanceForType() {
                return f34039t;
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
                this.f34045r = (byte) -1;
                this.f34046s = -1;
                this.f34040e = builder.getUnknownFields();
            }

            private Argument(boolean z10) {
                this.f34045r = (byte) -1;
                this.f34046s = -1;
                this.f34040e = ByteString.EMPTY;
            }

            private Argument(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
                this.f34045r = (byte) -1;
                this.f34046s = -1;
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
                                            this.f34041i |= 1;
                                            this.f34042o = valueOf;
                                        }
                                    } else if (readTag == 18) {
                                        Builder builder = (this.f34041i & 2) == 2 ? this.f34043p.toBuilder() : null;
                                        Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                        this.f34043p = type;
                                        if (builder != null) {
                                            builder.mergeFrom(type);
                                            this.f34043p = builder.buildPartial();
                                        }
                                        this.f34041i |= 2;
                                    } else if (readTag != 24) {
                                        if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                        }
                                    } else {
                                        this.f34041i |= 4;
                                        this.f34044q = codedInputStream.readInt32();
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
                            this.f34040e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34040e = newOutput.toByteString();
                        e();
                        throw th2;
                    }
                }
                try {
                    newInstance.flush();
                } catch (IOException unused2) {
                } catch (Throwable th4) {
                    this.f34040e = newOutput.toByteString();
                    throw th4;
                }
                this.f34040e = newOutput.toByteString();
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
            private int f34054o;

            /* renamed from: q  reason: collision with root package name */
            private boolean f34056q;

            /* renamed from: r  reason: collision with root package name */
            private int f34057r;

            /* renamed from: t  reason: collision with root package name */
            private int f34059t;

            /* renamed from: u  reason: collision with root package name */
            private int f34060u;

            /* renamed from: v  reason: collision with root package name */
            private int f34061v;

            /* renamed from: w  reason: collision with root package name */
            private int f34062w;

            /* renamed from: x  reason: collision with root package name */
            private int f34063x;

            /* renamed from: z  reason: collision with root package name */
            private int f34065z;

            /* renamed from: p  reason: collision with root package name */
            private List f34055p = Collections.EMPTY_LIST;

            /* renamed from: s  reason: collision with root package name */
            private Type f34058s = Type.getDefaultInstance();

            /* renamed from: y  reason: collision with root package name */
            private Type f34064y = Type.getDefaultInstance();
            private Type A = Type.getDefaultInstance();

            private Builder() {
                k();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34054o & 1) != 1) {
                    this.f34055p = new ArrayList(this.f34055p);
                    this.f34054o |= 1;
                }
            }

            private void k() {
            }

            public Type buildPartial() {
                Type type = new Type(this);
                int i10 = this.f34054o;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34055p = Collections.unmodifiableList(this.f34055p);
                    this.f34054o &= -2;
                }
                type.f34028p = this.f34055p;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                type.f34029q = this.f34056q;
                if ((i10 & 4) == 4) {
                    i11 |= 2;
                }
                type.f34030r = this.f34057r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                type.f34031s = this.f34058s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                type.f34032t = this.f34059t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                type.f34033u = this.f34060u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                type.f34034v = this.f34061v;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    i11 |= 64;
                }
                type.f34035w = this.f34062w;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
                type.f34036x = this.f34063x;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
                type.f34037y = this.f34064y;
                if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                    i11 |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
                type.f34038z = this.f34065z;
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
                type.f34027o = i11;
                return type;
            }

            public Type getAbbreviatedType() {
                return this.A;
            }

            public Argument getArgument(int i10) {
                return (Argument) this.f34055p.get(i10);
            }

            public int getArgumentCount() {
                return this.f34055p.size();
            }

            public Type getFlexibleUpperBound() {
                return this.f34058s;
            }

            public Type getOuterType() {
                return this.f34064y;
            }

            public boolean hasAbbreviatedType() {
                if ((this.f34054o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                    return true;
                }
                return false;
            }

            public boolean hasFlexibleUpperBound() {
                if ((this.f34054o & 8) == 8) {
                    return true;
                }
                return false;
            }

            public boolean hasOuterType() {
                if ((this.f34054o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
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
                if ((this.f34054o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048 && this.A != Type.getDefaultInstance()) {
                    this.A = Type.newBuilder(this.A).mergeFrom(type).buildPartial();
                } else {
                    this.A = type;
                }
                this.f34054o |= RecyclerView.ItemAnimator.FLAG_MOVED;
                return this;
            }

            public Builder mergeFlexibleUpperBound(Type type) {
                if ((this.f34054o & 8) == 8 && this.f34058s != Type.getDefaultInstance()) {
                    this.f34058s = Type.newBuilder(this.f34058s).mergeFrom(type).buildPartial();
                } else {
                    this.f34058s = type;
                }
                this.f34054o |= 8;
                return this;
            }

            public Builder mergeOuterType(Type type) {
                if ((this.f34054o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512 && this.f34064y != Type.getDefaultInstance()) {
                    this.f34064y = Type.newBuilder(this.f34064y).mergeFrom(type).buildPartial();
                } else {
                    this.f34064y = type;
                }
                this.f34054o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                return this;
            }

            public Builder setAbbreviatedTypeId(int i10) {
                this.f34054o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                this.B = i10;
                return this;
            }

            public Builder setClassName(int i10) {
                this.f34054o |= 32;
                this.f34060u = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34054o |= 8192;
                this.C = i10;
                return this;
            }

            public Builder setFlexibleTypeCapabilitiesId(int i10) {
                this.f34054o |= 4;
                this.f34057r = i10;
                return this;
            }

            public Builder setFlexibleUpperBoundId(int i10) {
                this.f34054o |= 16;
                this.f34059t = i10;
                return this;
            }

            public Builder setNullable(boolean z10) {
                this.f34054o |= 2;
                this.f34056q = z10;
                return this;
            }

            public Builder setOuterTypeId(int i10) {
                this.f34054o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                this.f34065z = i10;
                return this;
            }

            public Builder setTypeAliasName(int i10) {
                this.f34054o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                this.f34063x = i10;
                return this;
            }

            public Builder setTypeParameter(int i10) {
                this.f34054o |= 64;
                this.f34061v = i10;
                return this;
            }

            public Builder setTypeParameterName(int i10) {
                this.f34054o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                this.f34062w = i10;
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
                if (!type.f34028p.isEmpty()) {
                    if (this.f34055p.isEmpty()) {
                        this.f34055p = type.f34028p;
                        this.f34054o &= -2;
                    } else {
                        j();
                        this.f34055p.addAll(type.f34028p);
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
                setUnknownFields(getUnknownFields().concat(type.f34026i));
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
            this.f34028p = Collections.EMPTY_LIST;
            this.f34029q = false;
            this.f34030r = 0;
            this.f34031s = getDefaultInstance();
            this.f34032t = 0;
            this.f34033u = 0;
            this.f34034v = 0;
            this.f34035w = 0;
            this.f34036x = 0;
            this.f34037y = getDefaultInstance();
            this.f34038z = 0;
            this.A = getDefaultInstance();
            this.B = 0;
            this.C = 0;
        }

        public static Type getDefaultInstance() {
            return F;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public Type getAbbreviatedType() {
            return this.A;
        }

        public int getAbbreviatedTypeId() {
            return this.B;
        }

        public Argument getArgument(int i10) {
            return (Argument) this.f34028p.get(i10);
        }

        public int getArgumentCount() {
            return this.f34028p.size();
        }

        public List<Argument> getArgumentList() {
            return this.f34028p;
        }

        public int getClassName() {
            return this.f34033u;
        }

        public int getFlags() {
            return this.C;
        }

        public int getFlexibleTypeCapabilitiesId() {
            return this.f34030r;
        }

        public Type getFlexibleUpperBound() {
            return this.f34031s;
        }

        public int getFlexibleUpperBoundId() {
            return this.f34032t;
        }

        public boolean getNullable() {
            return this.f34029q;
        }

        public Type getOuterType() {
            return this.f34037y;
        }

        public int getOuterTypeId() {
            return this.f34038z;
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
            if ((this.f34027o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                i10 = CodedOutputStream.computeInt32Size(1, this.C);
            } else {
                i10 = 0;
            }
            for (int i12 = 0; i12 < this.f34028p.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(2, (MessageLite) this.f34028p.get(i12));
            }
            if ((this.f34027o & 1) == 1) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f34029q);
            }
            if ((this.f34027o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f34030r);
            }
            if ((this.f34027o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(5, this.f34031s);
            }
            if ((this.f34027o & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f34033u);
            }
            if ((this.f34027o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34034v);
            }
            if ((this.f34027o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(8, this.f34032t);
            }
            if ((this.f34027o & 64) == 64) {
                i10 += CodedOutputStream.computeInt32Size(9, this.f34035w);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                i10 += CodedOutputStream.computeMessageSize(10, this.f34037y);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                i10 += CodedOutputStream.computeInt32Size(11, this.f34038z);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                i10 += CodedOutputStream.computeInt32Size(12, this.f34036x);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                i10 += CodedOutputStream.computeMessageSize(13, this.A);
            }
            if ((this.f34027o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                i10 += CodedOutputStream.computeInt32Size(14, this.B);
            }
            int j10 = i10 + j() + this.f34026i.size();
            this.E = j10;
            return j10;
        }

        public int getTypeAliasName() {
            return this.f34036x;
        }

        public int getTypeParameter() {
            return this.f34034v;
        }

        public int getTypeParameterName() {
            return this.f34035w;
        }

        public boolean hasAbbreviatedType() {
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                return true;
            }
            return false;
        }

        public boolean hasAbbreviatedTypeId() {
            if ((this.f34027o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                return true;
            }
            return false;
        }

        public boolean hasClassName() {
            if ((this.f34027o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34027o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleTypeCapabilitiesId() {
            if ((this.f34027o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBound() {
            if ((this.f34027o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasFlexibleUpperBoundId() {
            if ((this.f34027o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasNullable() {
            if ((this.f34027o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasOuterType() {
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                return true;
            }
            return false;
        }

        public boolean hasOuterTypeId() {
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                return true;
            }
            return false;
        }

        public boolean hasTypeAliasName() {
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameter() {
            if ((this.f34027o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasTypeParameterName() {
            if ((this.f34027o & 64) == 64) {
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
            if ((this.f34027o & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) == 4096) {
                codedOutputStream.writeInt32(1, this.C);
            }
            for (int i10 = 0; i10 < this.f34028p.size(); i10++) {
                codedOutputStream.writeMessage(2, (MessageLite) this.f34028p.get(i10));
            }
            if ((this.f34027o & 1) == 1) {
                codedOutputStream.writeBool(3, this.f34029q);
            }
            if ((this.f34027o & 2) == 2) {
                codedOutputStream.writeInt32(4, this.f34030r);
            }
            if ((this.f34027o & 4) == 4) {
                codedOutputStream.writeMessage(5, this.f34031s);
            }
            if ((this.f34027o & 16) == 16) {
                codedOutputStream.writeInt32(6, this.f34033u);
            }
            if ((this.f34027o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f34034v);
            }
            if ((this.f34027o & 8) == 8) {
                codedOutputStream.writeInt32(8, this.f34032t);
            }
            if ((this.f34027o & 64) == 64) {
                codedOutputStream.writeInt32(9, this.f34035w);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                codedOutputStream.writeMessage(10, this.f34037y);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                codedOutputStream.writeInt32(11, this.f34038z);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                codedOutputStream.writeInt32(12, this.f34036x);
            }
            if ((this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024) {
                codedOutputStream.writeMessage(13, this.A);
            }
            if ((this.f34027o & RecyclerView.ItemAnimator.FLAG_MOVED) == 2048) {
                codedOutputStream.writeInt32(14, this.B);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34026i);
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
            this.f34026i = extendableBuilder.getUnknownFields();
        }

        private Type(boolean z10) {
            this.D = (byte) -1;
            this.E = -1;
            this.f34026i = ByteString.EMPTY;
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
                                    this.f34027o |= RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT;
                                    this.C = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                                    if (!z11) {
                                        this.f34028p = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34028p.add(codedInputStream.readMessage(Argument.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                                    this.f34027o |= 1;
                                    this.f34029q = codedInputStream.readBool();
                                    continue;
                                case 32:
                                    this.f34027o |= 2;
                                    this.f34030r = codedInputStream.readInt32();
                                    continue;
                                case 42:
                                    builder = (this.f34027o & 4) == 4 ? this.f34031s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f34031s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34031s = builder.buildPartial();
                                    }
                                    this.f34027o |= 4;
                                    continue;
                                case 48:
                                    this.f34027o |= 16;
                                    this.f34033u = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34027o |= 32;
                                    this.f34034v = codedInputStream.readInt32();
                                    continue;
                                case 64:
                                    this.f34027o |= 8;
                                    this.f34032t = codedInputStream.readInt32();
                                    continue;
                                case 72:
                                    this.f34027o |= 64;
                                    this.f34035w = codedInputStream.readInt32();
                                    continue;
                                case 82:
                                    builder = (this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256 ? this.f34037y.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.f34037y = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34037y = builder.buildPartial();
                                    }
                                    this.f34027o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                                    continue;
                                case 88:
                                    this.f34027o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                                    this.f34038z = codedInputStream.readInt32();
                                    continue;
                                case 96:
                                    this.f34027o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                                    this.f34036x = codedInputStream.readInt32();
                                    continue;
                                case 106:
                                    builder = (this.f34027o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET) == 1024 ? this.A.toBuilder() : null;
                                    Type type3 = (Type) codedInputStream.readMessage(PARSER, extensionRegistryLite);
                                    this.A = type3;
                                    if (builder != null) {
                                        builder.mergeFrom(type3);
                                        this.A = builder.buildPartial();
                                    }
                                    this.f34027o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET;
                                    continue;
                                case 112:
                                    this.f34027o |= RecyclerView.ItemAnimator.FLAG_MOVED;
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
                        this.f34028p = Collections.unmodifiableList(this.f34028p);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34026i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34026i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34028p = Collections.unmodifiableList(this.f34028p);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34026i = newOutput.toByteString();
                throw th4;
            }
            this.f34026i = newOutput.toByteString();
            e();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class TypeAlias extends GeneratedMessageLite.ExtendableMessage<TypeAlias> implements TypeAliasOrBuilder {
        private static final TypeAlias B;
        public static Parser<TypeAlias> PARSER = new a();
        private int A;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34066i;

        /* renamed from: o  reason: collision with root package name */
        private int f34067o;

        /* renamed from: p  reason: collision with root package name */
        private int f34068p;

        /* renamed from: q  reason: collision with root package name */
        private int f34069q;

        /* renamed from: r  reason: collision with root package name */
        private List f34070r;

        /* renamed from: s  reason: collision with root package name */
        private Type f34071s;

        /* renamed from: t  reason: collision with root package name */
        private int f34072t;

        /* renamed from: u  reason: collision with root package name */
        private Type f34073u;

        /* renamed from: v  reason: collision with root package name */
        private int f34074v;

        /* renamed from: w  reason: collision with root package name */
        private List f34075w;

        /* renamed from: x  reason: collision with root package name */
        private List f34076x;

        /* renamed from: y  reason: collision with root package name */
        private List f34077y;

        /* renamed from: z  reason: collision with root package name */
        private byte f34078z;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeAlias, Builder> implements TypeAliasOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34079o;

            /* renamed from: p  reason: collision with root package name */
            private int f34080p = 6;

            /* renamed from: q  reason: collision with root package name */
            private int f34081q;

            /* renamed from: r  reason: collision with root package name */
            private List f34082r;

            /* renamed from: s  reason: collision with root package name */
            private Type f34083s;

            /* renamed from: t  reason: collision with root package name */
            private int f34084t;

            /* renamed from: u  reason: collision with root package name */
            private Type f34085u;

            /* renamed from: v  reason: collision with root package name */
            private int f34086v;

            /* renamed from: w  reason: collision with root package name */
            private List f34087w;

            /* renamed from: x  reason: collision with root package name */
            private List f34088x;

            /* renamed from: y  reason: collision with root package name */
            private List f34089y;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34082r = list;
                this.f34083s = Type.getDefaultInstance();
                this.f34085u = Type.getDefaultInstance();
                this.f34087w = list;
                this.f34088x = list;
                this.f34089y = list;
                o();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34079o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 128) {
                    this.f34087w = new ArrayList(this.f34087w);
                    this.f34079o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
                }
            }

            private void k() {
                if ((this.f34079o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) != 512) {
                    this.f34089y = new ArrayList(this.f34089y);
                    this.f34079o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING;
                }
            }

            private void l() {
                if ((this.f34079o & 4) != 4) {
                    this.f34082r = new ArrayList(this.f34082r);
                    this.f34079o |= 4;
                }
            }

            private void m() {
                if ((this.f34079o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 256) {
                    this.f34088x = new ArrayList(this.f34088x);
                    this.f34079o |= IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER;
                }
            }

            private void o() {
            }

            public TypeAlias buildPartial() {
                TypeAlias typeAlias = new TypeAlias(this);
                int i10 = this.f34079o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeAlias.f34068p = this.f34080p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeAlias.f34069q = this.f34081q;
                if ((this.f34079o & 4) == 4) {
                    this.f34082r = Collections.unmodifiableList(this.f34082r);
                    this.f34079o &= -5;
                }
                typeAlias.f34070r = this.f34082r;
                if ((i10 & 8) == 8) {
                    i11 |= 4;
                }
                typeAlias.f34071s = this.f34083s;
                if ((i10 & 16) == 16) {
                    i11 |= 8;
                }
                typeAlias.f34072t = this.f34084t;
                if ((i10 & 32) == 32) {
                    i11 |= 16;
                }
                typeAlias.f34073u = this.f34085u;
                if ((i10 & 64) == 64) {
                    i11 |= 32;
                }
                typeAlias.f34074v = this.f34086v;
                if ((this.f34079o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
                    this.f34087w = Collections.unmodifiableList(this.f34087w);
                    this.f34079o &= -129;
                }
                typeAlias.f34075w = this.f34087w;
                if ((this.f34079o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) == 256) {
                    this.f34088x = Collections.unmodifiableList(this.f34088x);
                    this.f34079o &= -257;
                }
                typeAlias.f34076x = this.f34088x;
                if ((this.f34079o & IntBufferBatchMountItem.INSTRUCTION_UPDATE_PADDING) == 512) {
                    this.f34089y = Collections.unmodifiableList(this.f34089y);
                    this.f34079o &= -513;
                }
                typeAlias.f34077y = this.f34089y;
                typeAlias.f34067o = i11;
                return typeAlias;
            }

            public Annotation getAnnotation(int i10) {
                return (Annotation) this.f34087w.get(i10);
            }

            public int getAnnotationCount() {
                return this.f34087w.size();
            }

            public CompilerPluginData getCompilerPluginData(int i10) {
                return (CompilerPluginData) this.f34089y.get(i10);
            }

            public int getCompilerPluginDataCount() {
                return this.f34089y.size();
            }

            public Type getExpandedType() {
                return this.f34085u;
            }

            public TypeParameter getTypeParameter(int i10) {
                return (TypeParameter) this.f34082r.get(i10);
            }

            public int getTypeParameterCount() {
                return this.f34082r.size();
            }

            public Type getUnderlyingType() {
                return this.f34083s;
            }

            public boolean hasExpandedType() {
                if ((this.f34079o & 32) == 32) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34079o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasUnderlyingType() {
                if ((this.f34079o & 8) == 8) {
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
                if ((this.f34079o & 32) == 32 && this.f34085u != Type.getDefaultInstance()) {
                    this.f34085u = Type.newBuilder(this.f34085u).mergeFrom(type).buildPartial();
                } else {
                    this.f34085u = type;
                }
                this.f34079o |= 32;
                return this;
            }

            public Builder mergeUnderlyingType(Type type) {
                if ((this.f34079o & 8) == 8 && this.f34083s != Type.getDefaultInstance()) {
                    this.f34083s = Type.newBuilder(this.f34083s).mergeFrom(type).buildPartial();
                } else {
                    this.f34083s = type;
                }
                this.f34079o |= 8;
                return this;
            }

            public Builder setExpandedTypeId(int i10) {
                this.f34079o |= 64;
                this.f34086v = i10;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34079o |= 1;
                this.f34080p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34079o |= 2;
                this.f34081q = i10;
                return this;
            }

            public Builder setUnderlyingTypeId(int i10) {
                this.f34079o |= 16;
                this.f34084t = i10;
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
                if (!typeAlias.f34070r.isEmpty()) {
                    if (this.f34082r.isEmpty()) {
                        this.f34082r = typeAlias.f34070r;
                        this.f34079o &= -5;
                    } else {
                        l();
                        this.f34082r.addAll(typeAlias.f34070r);
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
                if (!typeAlias.f34075w.isEmpty()) {
                    if (this.f34087w.isEmpty()) {
                        this.f34087w = typeAlias.f34075w;
                        this.f34079o &= -129;
                    } else {
                        j();
                        this.f34087w.addAll(typeAlias.f34075w);
                    }
                }
                if (!typeAlias.f34076x.isEmpty()) {
                    if (this.f34088x.isEmpty()) {
                        this.f34088x = typeAlias.f34076x;
                        this.f34079o &= -257;
                    } else {
                        m();
                        this.f34088x.addAll(typeAlias.f34076x);
                    }
                }
                if (!typeAlias.f34077y.isEmpty()) {
                    if (this.f34089y.isEmpty()) {
                        this.f34089y = typeAlias.f34077y;
                        this.f34079o &= -513;
                    } else {
                        k();
                        this.f34089y.addAll(typeAlias.f34077y);
                    }
                }
                f(typeAlias);
                setUnknownFields(getUnknownFields().concat(typeAlias.f34066i));
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
            this.f34068p = 6;
            this.f34069q = 0;
            List list = Collections.EMPTY_LIST;
            this.f34070r = list;
            this.f34071s = Type.getDefaultInstance();
            this.f34072t = 0;
            this.f34073u = Type.getDefaultInstance();
            this.f34074v = 0;
            this.f34075w = list;
            this.f34076x = list;
            this.f34077y = list;
        }

        public static TypeAlias getDefaultInstance() {
            return B;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        public static TypeAlias parseDelimitedFrom(InputStream inputStream, ExtensionRegistryLite extensionRegistryLite) {
            return PARSER.parseDelimitedFrom(inputStream, extensionRegistryLite);
        }

        public Annotation getAnnotation(int i10) {
            return (Annotation) this.f34075w.get(i10);
        }

        public int getAnnotationCount() {
            return this.f34075w.size();
        }

        public List<Annotation> getAnnotationList() {
            return this.f34075w;
        }

        public CompilerPluginData getCompilerPluginData(int i10) {
            return (CompilerPluginData) this.f34077y.get(i10);
        }

        public int getCompilerPluginDataCount() {
            return this.f34077y.size();
        }

        public Type getExpandedType() {
            return this.f34073u;
        }

        public int getExpandedTypeId() {
            return this.f34074v;
        }

        public int getFlags() {
            return this.f34068p;
        }

        public int getName() {
            return this.f34069q;
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
            if ((this.f34067o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34068p);
            } else {
                i10 = 0;
            }
            if ((this.f34067o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34069q);
            }
            for (int i12 = 0; i12 < this.f34070r.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(3, (MessageLite) this.f34070r.get(i12));
            }
            if ((this.f34067o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34071s);
            }
            if ((this.f34067o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34072t);
            }
            if ((this.f34067o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(6, this.f34073u);
            }
            if ((this.f34067o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(7, this.f34074v);
            }
            for (int i13 = 0; i13 < this.f34075w.size(); i13++) {
                i10 += CodedOutputStream.computeMessageSize(8, (MessageLite) this.f34075w.get(i13));
            }
            int i14 = 0;
            for (int i15 = 0; i15 < this.f34076x.size(); i15++) {
                i14 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34076x.get(i15)).intValue());
            }
            int size = i10 + i14 + (getVersionRequirementList().size() * 2);
            for (int i16 = 0; i16 < this.f34077y.size(); i16++) {
                size += CodedOutputStream.computeMessageSize(32, (MessageLite) this.f34077y.get(i16));
            }
            int j10 = size + j() + this.f34066i.size();
            this.A = j10;
            return j10;
        }

        public TypeParameter getTypeParameter(int i10) {
            return (TypeParameter) this.f34070r.get(i10);
        }

        public int getTypeParameterCount() {
            return this.f34070r.size();
        }

        public List<TypeParameter> getTypeParameterList() {
            return this.f34070r;
        }

        public Type getUnderlyingType() {
            return this.f34071s;
        }

        public int getUnderlyingTypeId() {
            return this.f34072t;
        }

        public List<Integer> getVersionRequirementList() {
            return this.f34076x;
        }

        public boolean hasExpandedType() {
            if ((this.f34067o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasExpandedTypeId() {
            if ((this.f34067o & 32) == 32) {
                return true;
            }
            return false;
        }

        public boolean hasFlags() {
            if ((this.f34067o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34067o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingType() {
            if ((this.f34067o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasUnderlyingTypeId() {
            if ((this.f34067o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34078z;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f34078z = (byte) 0;
                return false;
            }
            for (int i10 = 0; i10 < getTypeParameterCount(); i10++) {
                if (!getTypeParameter(i10).isInitialized()) {
                    this.f34078z = (byte) 0;
                    return false;
                }
            }
            if (hasUnderlyingType() && !getUnderlyingType().isInitialized()) {
                this.f34078z = (byte) 0;
                return false;
            } else if (hasExpandedType() && !getExpandedType().isInitialized()) {
                this.f34078z = (byte) 0;
                return false;
            } else {
                for (int i11 = 0; i11 < getAnnotationCount(); i11++) {
                    if (!getAnnotation(i11).isInitialized()) {
                        this.f34078z = (byte) 0;
                        return false;
                    }
                }
                for (int i12 = 0; i12 < getCompilerPluginDataCount(); i12++) {
                    if (!getCompilerPluginData(i12).isInitialized()) {
                        this.f34078z = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34078z = (byte) 0;
                    return false;
                }
                this.f34078z = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34067o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34068p);
            }
            if ((this.f34067o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34069q);
            }
            for (int i10 = 0; i10 < this.f34070r.size(); i10++) {
                codedOutputStream.writeMessage(3, (MessageLite) this.f34070r.get(i10));
            }
            if ((this.f34067o & 4) == 4) {
                codedOutputStream.writeMessage(4, this.f34071s);
            }
            if ((this.f34067o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f34072t);
            }
            if ((this.f34067o & 16) == 16) {
                codedOutputStream.writeMessage(6, this.f34073u);
            }
            if ((this.f34067o & 32) == 32) {
                codedOutputStream.writeInt32(7, this.f34074v);
            }
            for (int i11 = 0; i11 < this.f34075w.size(); i11++) {
                codedOutputStream.writeMessage(8, (MessageLite) this.f34075w.get(i11));
            }
            for (int i12 = 0; i12 < this.f34076x.size(); i12++) {
                codedOutputStream.writeInt32(31, ((Integer) this.f34076x.get(i12)).intValue());
            }
            for (int i13 = 0; i13 < this.f34077y.size(); i13++) {
                codedOutputStream.writeMessage(32, (MessageLite) this.f34077y.get(i13));
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34066i);
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
            this.f34078z = (byte) -1;
            this.A = -1;
            this.f34066i = extendableBuilder.getUnknownFields();
        }

        private TypeAlias(boolean z10) {
            this.f34078z = (byte) -1;
            this.A = -1;
            this.f34066i = ByteString.EMPTY;
        }

        /* JADX WARN: Multi-variable type inference failed */
        /* JADX WARN: Type inference failed for: r5v0 */
        /* JADX WARN: Type inference failed for: r5v1 */
        /* JADX WARN: Type inference failed for: r5v2, types: [boolean] */
        private TypeAlias(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f34078z = (byte) -1;
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
                                    this.f34067o |= 1;
                                    this.f34068p = codedInputStream.readInt32();
                                    continue;
                                case 16:
                                    this.f34067o |= 2;
                                    this.f34069q = codedInputStream.readInt32();
                                    continue;
                                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                                    if (!(z11 & true)) {
                                        this.f34070r = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34070r.add(codedInputStream.readMessage(TypeParameter.PARSER, extensionRegistryLite));
                                    continue;
                                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                                    builder = (this.f34067o & 4) == 4 ? this.f34071s.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34071s = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34071s = builder.buildPartial();
                                    }
                                    this.f34067o |= 4;
                                    continue;
                                case 40:
                                    this.f34067o |= 8;
                                    this.f34072t = codedInputStream.readInt32();
                                    continue;
                                case 50:
                                    builder = (this.f34067o & 16) == 16 ? this.f34073u.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34073u = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34073u = builder.buildPartial();
                                    }
                                    this.f34067o |= 16;
                                    continue;
                                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                                    this.f34067o |= 32;
                                    this.f34074v = codedInputStream.readInt32();
                                    continue;
                                case 66:
                                    if (!(z11 & true)) {
                                        this.f34075w = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34075w.add(codedInputStream.readMessage(Annotation.PARSER, extensionRegistryLite));
                                    continue;
                                case 248:
                                    if (!(z11 & true)) {
                                        this.f34076x = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34076x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    continue;
                                case h.DEFAULT_SWIPE_ANIMATION_DURATION /* 250 */:
                                    int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                    if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34076x = new ArrayList();
                                        z11 |= true;
                                    }
                                    while (codedInputStream.getBytesUntilLimit() > 0) {
                                        this.f34076x.add(Integer.valueOf(codedInputStream.readInt32()));
                                    }
                                    codedInputStream.popLimit(pushLimit);
                                    continue;
                                    break;
                                case 258:
                                    if (!(z11 & true)) {
                                        this.f34077y = new ArrayList();
                                        z11 |= true;
                                    }
                                    this.f34077y.add(codedInputStream.readMessage(CompilerPluginData.PARSER, extensionRegistryLite));
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
                                this.f34070r = Collections.unmodifiableList(this.f34070r);
                            }
                            if ((z11 & true) == r52) {
                                this.f34075w = Collections.unmodifiableList(this.f34075w);
                            }
                            if (z11 & true) {
                                this.f34076x = Collections.unmodifiableList(this.f34076x);
                            }
                            if (z11 & true) {
                                this.f34077y = Collections.unmodifiableList(this.f34077y);
                            }
                            try {
                                newInstance.flush();
                            } catch (IOException unused) {
                            } catch (Throwable th3) {
                                this.f34066i = newOutput.toByteString();
                                throw th3;
                            }
                            this.f34066i = newOutput.toByteString();
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
                        this.f34070r = Collections.unmodifiableList(this.f34070r);
                    }
                    if (z11 & true) {
                        this.f34075w = Collections.unmodifiableList(this.f34075w);
                    }
                    if (z11 & true) {
                        this.f34076x = Collections.unmodifiableList(this.f34076x);
                    }
                    if (z11 & true) {
                        this.f34077y = Collections.unmodifiableList(this.f34077y);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused2) {
                    } catch (Throwable th4) {
                        this.f34066i = newOutput.toByteString();
                        throw th4;
                    }
                    this.f34066i = newOutput.toByteString();
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
        private static final TypeParameter f34090y;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34091i;

        /* renamed from: o  reason: collision with root package name */
        private int f34092o;

        /* renamed from: p  reason: collision with root package name */
        private int f34093p;

        /* renamed from: q  reason: collision with root package name */
        private int f34094q;

        /* renamed from: r  reason: collision with root package name */
        private boolean f34095r;

        /* renamed from: s  reason: collision with root package name */
        private Variance f34096s;

        /* renamed from: t  reason: collision with root package name */
        private List f34097t;

        /* renamed from: u  reason: collision with root package name */
        private List f34098u;

        /* renamed from: v  reason: collision with root package name */
        private int f34099v;

        /* renamed from: w  reason: collision with root package name */
        private byte f34100w;

        /* renamed from: x  reason: collision with root package name */
        private int f34101x;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<TypeParameter, Builder> implements TypeParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34102o;

            /* renamed from: p  reason: collision with root package name */
            private int f34103p;

            /* renamed from: q  reason: collision with root package name */
            private int f34104q;

            /* renamed from: r  reason: collision with root package name */
            private boolean f34105r;

            /* renamed from: s  reason: collision with root package name */
            private Variance f34106s = Variance.INV;

            /* renamed from: t  reason: collision with root package name */
            private List f34107t;

            /* renamed from: u  reason: collision with root package name */
            private List f34108u;

            private Builder() {
                List list = Collections.EMPTY_LIST;
                this.f34107t = list;
                this.f34108u = list;
                l();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
                if ((this.f34102o & 32) != 32) {
                    this.f34108u = new ArrayList(this.f34108u);
                    this.f34102o |= 32;
                }
            }

            private void k() {
                if ((this.f34102o & 16) != 16) {
                    this.f34107t = new ArrayList(this.f34107t);
                    this.f34102o |= 16;
                }
            }

            private void l() {
            }

            public TypeParameter buildPartial() {
                TypeParameter typeParameter = new TypeParameter(this);
                int i10 = this.f34102o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                typeParameter.f34093p = this.f34103p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                typeParameter.f34094q = this.f34104q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                typeParameter.f34095r = this.f34105r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                typeParameter.f34096s = this.f34106s;
                if ((this.f34102o & 16) == 16) {
                    this.f34107t = Collections.unmodifiableList(this.f34107t);
                    this.f34102o &= -17;
                }
                typeParameter.f34097t = this.f34107t;
                if ((this.f34102o & 32) == 32) {
                    this.f34108u = Collections.unmodifiableList(this.f34108u);
                    this.f34102o &= -33;
                }
                typeParameter.f34098u = this.f34108u;
                typeParameter.f34092o = i11;
                return typeParameter;
            }

            public Type getUpperBound(int i10) {
                return (Type) this.f34107t.get(i10);
            }

            public int getUpperBoundCount() {
                return this.f34107t.size();
            }

            public boolean hasId() {
                if ((this.f34102o & 1) == 1) {
                    return true;
                }
                return false;
            }

            public boolean hasName() {
                if ((this.f34102o & 2) == 2) {
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
                this.f34102o |= 1;
                this.f34103p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34102o |= 2;
                this.f34104q = i10;
                return this;
            }

            public Builder setReified(boolean z10) {
                this.f34102o |= 4;
                this.f34105r = z10;
                return this;
            }

            public Builder setVariance(Variance variance) {
                variance.getClass();
                this.f34102o |= 8;
                this.f34106s = variance;
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
                if (!typeParameter.f34097t.isEmpty()) {
                    if (this.f34107t.isEmpty()) {
                        this.f34107t = typeParameter.f34097t;
                        this.f34102o &= -17;
                    } else {
                        k();
                        this.f34107t.addAll(typeParameter.f34097t);
                    }
                }
                if (!typeParameter.f34098u.isEmpty()) {
                    if (this.f34108u.isEmpty()) {
                        this.f34108u = typeParameter.f34098u;
                        this.f34102o &= -33;
                    } else {
                        j();
                        this.f34108u.addAll(typeParameter.f34098u);
                    }
                }
                f(typeParameter);
                setUnknownFields(getUnknownFields().concat(typeParameter.f34091i));
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
            private static Internal.EnumLiteMap f34109e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34111d;

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
                this.f34111d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34111d;
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
            f34090y = typeParameter;
            typeParameter.w();
        }

        public static TypeParameter getDefaultInstance() {
            return f34090y;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void w() {
            this.f34093p = 0;
            this.f34094q = 0;
            this.f34095r = false;
            this.f34096s = Variance.INV;
            List list = Collections.EMPTY_LIST;
            this.f34097t = list;
            this.f34098u = list;
        }

        public int getId() {
            return this.f34093p;
        }

        public int getName() {
            return this.f34094q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeParameter> getParserForType() {
            return PARSER;
        }

        public boolean getReified() {
            return this.f34095r;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34101x;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34092o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34093p);
            } else {
                i10 = 0;
            }
            if ((this.f34092o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34094q);
            }
            if ((this.f34092o & 4) == 4) {
                i10 += CodedOutputStream.computeBoolSize(3, this.f34095r);
            }
            if ((this.f34092o & 8) == 8) {
                i10 += CodedOutputStream.computeEnumSize(4, this.f34096s.getNumber());
            }
            for (int i12 = 0; i12 < this.f34097t.size(); i12++) {
                i10 += CodedOutputStream.computeMessageSize(5, (MessageLite) this.f34097t.get(i12));
            }
            int i13 = 0;
            for (int i14 = 0; i14 < this.f34098u.size(); i14++) {
                i13 += CodedOutputStream.computeInt32SizeNoTag(((Integer) this.f34098u.get(i14)).intValue());
            }
            int i15 = i10 + i13;
            if (!getUpperBoundIdList().isEmpty()) {
                i15 = i15 + 1 + CodedOutputStream.computeInt32SizeNoTag(i13);
            }
            this.f34099v = i13;
            int j10 = i15 + j() + this.f34091i.size();
            this.f34101x = j10;
            return j10;
        }

        public Type getUpperBound(int i10) {
            return (Type) this.f34097t.get(i10);
        }

        public int getUpperBoundCount() {
            return this.f34097t.size();
        }

        public List<Integer> getUpperBoundIdList() {
            return this.f34098u;
        }

        public List<Type> getUpperBoundList() {
            return this.f34097t;
        }

        public Variance getVariance() {
            return this.f34096s;
        }

        public boolean hasId() {
            if ((this.f34092o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34092o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasReified() {
            if ((this.f34092o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasVariance() {
            if ((this.f34092o & 8) == 8) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34100w;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasId()) {
                this.f34100w = (byte) 0;
                return false;
            } else if (!hasName()) {
                this.f34100w = (byte) 0;
                return false;
            } else {
                for (int i10 = 0; i10 < getUpperBoundCount(); i10++) {
                    if (!getUpperBound(i10).isInitialized()) {
                        this.f34100w = (byte) 0;
                        return false;
                    }
                }
                if (!i()) {
                    this.f34100w = (byte) 0;
                    return false;
                }
                this.f34100w = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34092o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34093p);
            }
            if ((this.f34092o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34094q);
            }
            if ((this.f34092o & 4) == 4) {
                codedOutputStream.writeBool(3, this.f34095r);
            }
            if ((this.f34092o & 8) == 8) {
                codedOutputStream.writeEnum(4, this.f34096s.getNumber());
            }
            for (int i10 = 0; i10 < this.f34097t.size(); i10++) {
                codedOutputStream.writeMessage(5, (MessageLite) this.f34097t.get(i10));
            }
            if (getUpperBoundIdList().size() > 0) {
                codedOutputStream.writeRawVarint32(50);
                codedOutputStream.writeRawVarint32(this.f34099v);
            }
            for (int i11 = 0; i11 < this.f34098u.size(); i11++) {
                codedOutputStream.writeInt32NoTag(((Integer) this.f34098u.get(i11)).intValue());
            }
            k10.writeUntil(1000, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34091i);
        }

        public static Builder newBuilder(TypeParameter typeParameter) {
            return newBuilder().mergeFrom(typeParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeParameter getDefaultInstanceForType() {
            return f34090y;
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
            this.f34099v = -1;
            this.f34100w = (byte) -1;
            this.f34101x = -1;
            this.f34091i = extendableBuilder.getUnknownFields();
        }

        private TypeParameter(boolean z10) {
            this.f34099v = -1;
            this.f34100w = (byte) -1;
            this.f34101x = -1;
            this.f34091i = ByteString.EMPTY;
        }

        private TypeParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34099v = -1;
            this.f34100w = (byte) -1;
            this.f34101x = -1;
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
                                this.f34092o |= 1;
                                this.f34093p = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f34092o |= 2;
                                this.f34094q = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                this.f34092o |= 4;
                                this.f34095r = codedInputStream.readBool();
                            } else if (readTag == 32) {
                                int readEnum = codedInputStream.readEnum();
                                Variance valueOf = Variance.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34092o |= 8;
                                    this.f34096s = valueOf;
                                }
                            } else if (readTag == 42) {
                                if (!(z11 & true)) {
                                    this.f34097t = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34097t.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag == 48) {
                                if (!(z11 & true)) {
                                    this.f34098u = new ArrayList();
                                    z11 |= true;
                                }
                                this.f34098u.add(Integer.valueOf(codedInputStream.readInt32()));
                            } else if (readTag != 50) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                int pushLimit = codedInputStream.pushLimit(codedInputStream.readRawVarint32());
                                if (!(z11 & true) && codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34098u = new ArrayList();
                                    z11 |= true;
                                }
                                while (codedInputStream.getBytesUntilLimit() > 0) {
                                    this.f34098u.add(Integer.valueOf(codedInputStream.readInt32()));
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
                        this.f34097t = Collections.unmodifiableList(this.f34097t);
                    }
                    if (z11 & true) {
                        this.f34098u = Collections.unmodifiableList(this.f34098u);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34091i = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34091i = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11 & true) {
                this.f34097t = Collections.unmodifiableList(this.f34097t);
            }
            if (z11 & true) {
                this.f34098u = Collections.unmodifiableList(this.f34098u);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34091i = newOutput.toByteString();
                throw th4;
            }
            this.f34091i = newOutput.toByteString();
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
        private static final TypeTable f34112s;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34113e;

        /* renamed from: i  reason: collision with root package name */
        private int f34114i;

        /* renamed from: o  reason: collision with root package name */
        private List f34115o;

        /* renamed from: p  reason: collision with root package name */
        private int f34116p;

        /* renamed from: q  reason: collision with root package name */
        private byte f34117q;

        /* renamed from: r  reason: collision with root package name */
        private int f34118r;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<TypeTable, Builder> implements TypeTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34119e;

            /* renamed from: i  reason: collision with root package name */
            private List f34120i = Collections.EMPTY_LIST;

            /* renamed from: o  reason: collision with root package name */
            private int f34121o = -1;

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
                if ((this.f34119e & 1) != 1) {
                    this.f34120i = new ArrayList(this.f34120i);
                    this.f34119e |= 1;
                }
            }

            private void e() {
            }

            public TypeTable buildPartial() {
                TypeTable typeTable = new TypeTable(this);
                int i10 = this.f34119e;
                int i11 = 1;
                if ((i10 & 1) == 1) {
                    this.f34120i = Collections.unmodifiableList(this.f34120i);
                    this.f34119e &= -2;
                }
                typeTable.f34115o = this.f34120i;
                if ((i10 & 2) != 2) {
                    i11 = 0;
                }
                typeTable.f34116p = this.f34121o;
                typeTable.f34114i = i11;
                return typeTable;
            }

            public Type getType(int i10) {
                return (Type) this.f34120i.get(i10);
            }

            public int getTypeCount() {
                return this.f34120i.size();
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
                this.f34119e |= 2;
                this.f34121o = i10;
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
                if (!typeTable.f34115o.isEmpty()) {
                    if (this.f34120i.isEmpty()) {
                        this.f34120i = typeTable.f34115o;
                        this.f34119e &= -2;
                    } else {
                        d();
                        this.f34120i.addAll(typeTable.f34115o);
                    }
                }
                if (typeTable.hasFirstNullable()) {
                    setFirstNullable(typeTable.getFirstNullable());
                }
                setUnknownFields(getUnknownFields().concat(typeTable.f34113e));
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
            f34112s = typeTable;
            typeTable.m();
        }

        public static TypeTable getDefaultInstance() {
            return f34112s;
        }

        private void m() {
            this.f34115o = Collections.EMPTY_LIST;
            this.f34116p = -1;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        public int getFirstNullable() {
            return this.f34116p;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<TypeTable> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34118r;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34115o.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34115o.get(i12));
            }
            if ((this.f34114i & 1) == 1) {
                i11 += CodedOutputStream.computeInt32Size(2, this.f34116p);
            }
            int size = i11 + this.f34113e.size();
            this.f34118r = size;
            return size;
        }

        public Type getType(int i10) {
            return (Type) this.f34115o.get(i10);
        }

        public int getTypeCount() {
            return this.f34115o.size();
        }

        public List<Type> getTypeList() {
            return this.f34115o;
        }

        public boolean hasFirstNullable() {
            if ((this.f34114i & 1) == 1) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34117q;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            for (int i10 = 0; i10 < getTypeCount(); i10++) {
                if (!getType(i10).isInitialized()) {
                    this.f34117q = (byte) 0;
                    return false;
                }
            }
            this.f34117q = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34115o.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34115o.get(i10));
            }
            if ((this.f34114i & 1) == 1) {
                codedOutputStream.writeInt32(2, this.f34116p);
            }
            codedOutputStream.writeRawBytes(this.f34113e);
        }

        public static Builder newBuilder(TypeTable typeTable) {
            return newBuilder().mergeFrom(typeTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public TypeTable getDefaultInstanceForType() {
            return f34112s;
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
            this.f34117q = (byte) -1;
            this.f34118r = -1;
            this.f34113e = builder.getUnknownFields();
        }

        private TypeTable(boolean z10) {
            this.f34117q = (byte) -1;
            this.f34118r = -1;
            this.f34113e = ByteString.EMPTY;
        }

        private TypeTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34117q = (byte) -1;
            this.f34118r = -1;
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
                                    this.f34115o = new ArrayList();
                                    z11 = true;
                                }
                                this.f34115o.add(codedInputStream.readMessage(Type.PARSER, extensionRegistryLite));
                            } else if (readTag != 16) {
                                if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                }
                            } else {
                                this.f34114i |= 1;
                                this.f34116p = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        if (z11) {
                            this.f34115o = Collections.unmodifiableList(this.f34115o);
                        }
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34113e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34113e = newOutput.toByteString();
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
                this.f34115o = Collections.unmodifiableList(this.f34115o);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34113e = newOutput.toByteString();
                throw th4;
            }
            this.f34113e = newOutput.toByteString();
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
        private static final ValueParameter f34122x;

        /* renamed from: i  reason: collision with root package name */
        private final ByteString f34123i;

        /* renamed from: o  reason: collision with root package name */
        private int f34124o;

        /* renamed from: p  reason: collision with root package name */
        private int f34125p;

        /* renamed from: q  reason: collision with root package name */
        private int f34126q;

        /* renamed from: r  reason: collision with root package name */
        private Type f34127r;

        /* renamed from: s  reason: collision with root package name */
        private int f34128s;

        /* renamed from: t  reason: collision with root package name */
        private Type f34129t;

        /* renamed from: u  reason: collision with root package name */
        private int f34130u;

        /* renamed from: v  reason: collision with root package name */
        private byte f34131v;

        /* renamed from: w  reason: collision with root package name */
        private int f34132w;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.ExtendableBuilder<ValueParameter, Builder> implements ValueParameterOrBuilder {

            /* renamed from: o  reason: collision with root package name */
            private int f34133o;

            /* renamed from: p  reason: collision with root package name */
            private int f34134p;

            /* renamed from: q  reason: collision with root package name */
            private int f34135q;

            /* renamed from: s  reason: collision with root package name */
            private int f34137s;

            /* renamed from: u  reason: collision with root package name */
            private int f34139u;

            /* renamed from: r  reason: collision with root package name */
            private Type f34136r = Type.getDefaultInstance();

            /* renamed from: t  reason: collision with root package name */
            private Type f34138t = Type.getDefaultInstance();

            private Builder() {
                j();
            }

            static /* synthetic */ Builder g() {
                return i();
            }

            private static Builder i() {
                return new Builder();
            }

            private void j() {
            }

            public ValueParameter buildPartial() {
                ValueParameter valueParameter = new ValueParameter(this);
                int i10 = this.f34133o;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                valueParameter.f34125p = this.f34134p;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                valueParameter.f34126q = this.f34135q;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                valueParameter.f34127r = this.f34136r;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                valueParameter.f34128s = this.f34137s;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                valueParameter.f34129t = this.f34138t;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                valueParameter.f34130u = this.f34139u;
                valueParameter.f34124o = i11;
                return valueParameter;
            }

            public Type getType() {
                return this.f34136r;
            }

            public Type getVarargElementType() {
                return this.f34138t;
            }

            public boolean hasName() {
                if ((this.f34133o & 2) == 2) {
                    return true;
                }
                return false;
            }

            public boolean hasType() {
                if ((this.f34133o & 4) == 4) {
                    return true;
                }
                return false;
            }

            public boolean hasVarargElementType() {
                if ((this.f34133o & 16) == 16) {
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
                if ((this.f34133o & 4) == 4 && this.f34136r != Type.getDefaultInstance()) {
                    this.f34136r = Type.newBuilder(this.f34136r).mergeFrom(type).buildPartial();
                } else {
                    this.f34136r = type;
                }
                this.f34133o |= 4;
                return this;
            }

            public Builder mergeVarargElementType(Type type) {
                if ((this.f34133o & 16) == 16 && this.f34138t != Type.getDefaultInstance()) {
                    this.f34138t = Type.newBuilder(this.f34138t).mergeFrom(type).buildPartial();
                } else {
                    this.f34138t = type;
                }
                this.f34133o |= 16;
                return this;
            }

            public Builder setFlags(int i10) {
                this.f34133o |= 1;
                this.f34134p = i10;
                return this;
            }

            public Builder setName(int i10) {
                this.f34133o |= 2;
                this.f34135q = i10;
                return this;
            }

            public Builder setTypeId(int i10) {
                this.f34133o |= 8;
                this.f34137s = i10;
                return this;
            }

            public Builder setVarargElementTypeId(int i10) {
                this.f34133o |= 32;
                this.f34139u = i10;
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
                setUnknownFields(getUnknownFields().concat(valueParameter.f34123i));
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
            f34122x = valueParameter;
            valueParameter.u();
        }

        public static ValueParameter getDefaultInstance() {
            return f34122x;
        }

        public static Builder newBuilder() {
            return Builder.g();
        }

        private void u() {
            this.f34125p = 0;
            this.f34126q = 0;
            this.f34127r = Type.getDefaultInstance();
            this.f34128s = 0;
            this.f34129t = Type.getDefaultInstance();
            this.f34130u = 0;
        }

        public int getFlags() {
            return this.f34125p;
        }

        public int getName() {
            return this.f34126q;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<ValueParameter> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34132w;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34124o & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34125p);
            } else {
                i10 = 0;
            }
            if ((this.f34124o & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34126q);
            }
            if ((this.f34124o & 4) == 4) {
                i10 += CodedOutputStream.computeMessageSize(3, this.f34127r);
            }
            if ((this.f34124o & 16) == 16) {
                i10 += CodedOutputStream.computeMessageSize(4, this.f34129t);
            }
            if ((this.f34124o & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34128s);
            }
            if ((this.f34124o & 32) == 32) {
                i10 += CodedOutputStream.computeInt32Size(6, this.f34130u);
            }
            int j10 = i10 + j() + this.f34123i.size();
            this.f34132w = j10;
            return j10;
        }

        public Type getType() {
            return this.f34127r;
        }

        public int getTypeId() {
            return this.f34128s;
        }

        public Type getVarargElementType() {
            return this.f34129t;
        }

        public int getVarargElementTypeId() {
            return this.f34130u;
        }

        public boolean hasFlags() {
            if ((this.f34124o & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasName() {
            if ((this.f34124o & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasType() {
            if ((this.f34124o & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasTypeId() {
            if ((this.f34124o & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementType() {
            if ((this.f34124o & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVarargElementTypeId() {
            if ((this.f34124o & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34131v;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            if (!hasName()) {
                this.f34131v = (byte) 0;
                return false;
            } else if (hasType() && !getType().isInitialized()) {
                this.f34131v = (byte) 0;
                return false;
            } else if (hasVarargElementType() && !getVarargElementType().isInitialized()) {
                this.f34131v = (byte) 0;
                return false;
            } else if (!i()) {
                this.f34131v = (byte) 0;
                return false;
            } else {
                this.f34131v = (byte) 1;
                return true;
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            GeneratedMessageLite.ExtendableMessage.ExtensionWriter k10 = k();
            if ((this.f34124o & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34125p);
            }
            if ((this.f34124o & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34126q);
            }
            if ((this.f34124o & 4) == 4) {
                codedOutputStream.writeMessage(3, this.f34127r);
            }
            if ((this.f34124o & 16) == 16) {
                codedOutputStream.writeMessage(4, this.f34129t);
            }
            if ((this.f34124o & 8) == 8) {
                codedOutputStream.writeInt32(5, this.f34128s);
            }
            if ((this.f34124o & 32) == 32) {
                codedOutputStream.writeInt32(6, this.f34130u);
            }
            k10.writeUntil(h.DEFAULT_DRAG_ANIMATION_DURATION, codedOutputStream);
            codedOutputStream.writeRawBytes(this.f34123i);
        }

        public static Builder newBuilder(ValueParameter valueParameter) {
            return newBuilder().mergeFrom(valueParameter);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public ValueParameter getDefaultInstanceForType() {
            return f34122x;
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
            this.f34131v = (byte) -1;
            this.f34132w = -1;
            this.f34123i = extendableBuilder.getUnknownFields();
        }

        private ValueParameter(boolean z10) {
            this.f34131v = (byte) -1;
            this.f34132w = -1;
            this.f34123i = ByteString.EMPTY;
        }

        private ValueParameter(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            Type.Builder builder;
            this.f34131v = (byte) -1;
            this.f34132w = -1;
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
                                this.f34124o |= 1;
                                this.f34125p = codedInputStream.readInt32();
                            } else if (readTag != 16) {
                                if (readTag == 26) {
                                    builder = (this.f34124o & 4) == 4 ? this.f34127r.toBuilder() : null;
                                    Type type = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34127r = type;
                                    if (builder != null) {
                                        builder.mergeFrom(type);
                                        this.f34127r = builder.buildPartial();
                                    }
                                    this.f34124o |= 4;
                                } else if (readTag == 34) {
                                    builder = (this.f34124o & 16) == 16 ? this.f34129t.toBuilder() : null;
                                    Type type2 = (Type) codedInputStream.readMessage(Type.PARSER, extensionRegistryLite);
                                    this.f34129t = type2;
                                    if (builder != null) {
                                        builder.mergeFrom(type2);
                                        this.f34129t = builder.buildPartial();
                                    }
                                    this.f34124o |= 16;
                                } else if (readTag == 40) {
                                    this.f34124o |= 8;
                                    this.f34128s = codedInputStream.readInt32();
                                } else if (readTag != 48) {
                                    if (!f(codedInputStream, newInstance, extensionRegistryLite, readTag)) {
                                    }
                                } else {
                                    this.f34124o |= 32;
                                    this.f34130u = codedInputStream.readInt32();
                                }
                            } else {
                                this.f34124o |= 2;
                                this.f34126q = codedInputStream.readInt32();
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34123i = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34123i = newOutput.toByteString();
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
                this.f34123i = newOutput.toByteString();
                throw th4;
            }
            this.f34123i = newOutput.toByteString();
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
        private static final VersionRequirement f34140w;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34141e;

        /* renamed from: i  reason: collision with root package name */
        private int f34142i;

        /* renamed from: o  reason: collision with root package name */
        private int f34143o;

        /* renamed from: p  reason: collision with root package name */
        private int f34144p;

        /* renamed from: q  reason: collision with root package name */
        private Level f34145q;

        /* renamed from: r  reason: collision with root package name */
        private int f34146r;

        /* renamed from: s  reason: collision with root package name */
        private int f34147s;

        /* renamed from: t  reason: collision with root package name */
        private VersionKind f34148t;

        /* renamed from: u  reason: collision with root package name */
        private byte f34149u;

        /* renamed from: v  reason: collision with root package name */
        private int f34150v;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirement, Builder> implements VersionRequirementOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34151e;

            /* renamed from: i  reason: collision with root package name */
            private int f34152i;

            /* renamed from: o  reason: collision with root package name */
            private int f34153o;

            /* renamed from: q  reason: collision with root package name */
            private int f34155q;

            /* renamed from: r  reason: collision with root package name */
            private int f34156r;

            /* renamed from: p  reason: collision with root package name */
            private Level f34154p = Level.ERROR;

            /* renamed from: s  reason: collision with root package name */
            private VersionKind f34157s = VersionKind.LANGUAGE_VERSION;

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
                int i10 = this.f34151e;
                int i11 = 1;
                if ((i10 & 1) != 1) {
                    i11 = 0;
                }
                versionRequirement.f34143o = this.f34152i;
                if ((i10 & 2) == 2) {
                    i11 |= 2;
                }
                versionRequirement.f34144p = this.f34153o;
                if ((i10 & 4) == 4) {
                    i11 |= 4;
                }
                versionRequirement.f34145q = this.f34154p;
                if ((i10 & 8) == 8) {
                    i11 |= 8;
                }
                versionRequirement.f34146r = this.f34155q;
                if ((i10 & 16) == 16) {
                    i11 |= 16;
                }
                versionRequirement.f34147s = this.f34156r;
                if ((i10 & 32) == 32) {
                    i11 |= 32;
                }
                versionRequirement.f34148t = this.f34157s;
                versionRequirement.f34142i = i11;
                return versionRequirement;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
            public final boolean isInitialized() {
                return true;
            }

            public Builder setErrorCode(int i10) {
                this.f34151e |= 8;
                this.f34155q = i10;
                return this;
            }

            public Builder setLevel(Level level) {
                level.getClass();
                this.f34151e |= 4;
                this.f34154p = level;
                return this;
            }

            public Builder setMessage(int i10) {
                this.f34151e |= 16;
                this.f34156r = i10;
                return this;
            }

            public Builder setVersion(int i10) {
                this.f34151e |= 1;
                this.f34152i = i10;
                return this;
            }

            public Builder setVersionFull(int i10) {
                this.f34151e |= 2;
                this.f34153o = i10;
                return this;
            }

            public Builder setVersionKind(VersionKind versionKind) {
                versionKind.getClass();
                this.f34151e |= 32;
                this.f34157s = versionKind;
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
                setUnknownFields(getUnknownFields().concat(versionRequirement.f34141e));
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
            private static Internal.EnumLiteMap f34158e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34160d;

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
                this.f34160d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34160d;
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
            private static Internal.EnumLiteMap f34161e = new a();

            /* renamed from: d  reason: collision with root package name */
            private final int f34163d;

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
                this.f34163d = i11;
            }

            @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
            public final int getNumber() {
                return this.f34163d;
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
            f34140w = versionRequirement;
            versionRequirement.p();
        }

        public static VersionRequirement getDefaultInstance() {
            return f34140w;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        private void p() {
            this.f34143o = 0;
            this.f34144p = 0;
            this.f34145q = Level.ERROR;
            this.f34146r = 0;
            this.f34147s = 0;
            this.f34148t = VersionKind.LANGUAGE_VERSION;
        }

        public int getErrorCode() {
            return this.f34146r;
        }

        public Level getLevel() {
            return this.f34145q;
        }

        public int getMessage() {
            return this.f34147s;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirement> getParserForType() {
            return PARSER;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10;
            int i11 = this.f34150v;
            if (i11 != -1) {
                return i11;
            }
            if ((this.f34142i & 1) == 1) {
                i10 = CodedOutputStream.computeInt32Size(1, this.f34143o);
            } else {
                i10 = 0;
            }
            if ((this.f34142i & 2) == 2) {
                i10 += CodedOutputStream.computeInt32Size(2, this.f34144p);
            }
            if ((this.f34142i & 4) == 4) {
                i10 += CodedOutputStream.computeEnumSize(3, this.f34145q.getNumber());
            }
            if ((this.f34142i & 8) == 8) {
                i10 += CodedOutputStream.computeInt32Size(4, this.f34146r);
            }
            if ((this.f34142i & 16) == 16) {
                i10 += CodedOutputStream.computeInt32Size(5, this.f34147s);
            }
            if ((this.f34142i & 32) == 32) {
                i10 += CodedOutputStream.computeEnumSize(6, this.f34148t.getNumber());
            }
            int size = i10 + this.f34141e.size();
            this.f34150v = size;
            return size;
        }

        public int getVersion() {
            return this.f34143o;
        }

        public int getVersionFull() {
            return this.f34144p;
        }

        public VersionKind getVersionKind() {
            return this.f34148t;
        }

        public boolean hasErrorCode() {
            if ((this.f34142i & 8) == 8) {
                return true;
            }
            return false;
        }

        public boolean hasLevel() {
            if ((this.f34142i & 4) == 4) {
                return true;
            }
            return false;
        }

        public boolean hasMessage() {
            if ((this.f34142i & 16) == 16) {
                return true;
            }
            return false;
        }

        public boolean hasVersion() {
            if ((this.f34142i & 1) == 1) {
                return true;
            }
            return false;
        }

        public boolean hasVersionFull() {
            if ((this.f34142i & 2) == 2) {
                return true;
            }
            return false;
        }

        public boolean hasVersionKind() {
            if ((this.f34142i & 32) == 32) {
                return true;
            }
            return false;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34149u;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34149u = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            if ((this.f34142i & 1) == 1) {
                codedOutputStream.writeInt32(1, this.f34143o);
            }
            if ((this.f34142i & 2) == 2) {
                codedOutputStream.writeInt32(2, this.f34144p);
            }
            if ((this.f34142i & 4) == 4) {
                codedOutputStream.writeEnum(3, this.f34145q.getNumber());
            }
            if ((this.f34142i & 8) == 8) {
                codedOutputStream.writeInt32(4, this.f34146r);
            }
            if ((this.f34142i & 16) == 16) {
                codedOutputStream.writeInt32(5, this.f34147s);
            }
            if ((this.f34142i & 32) == 32) {
                codedOutputStream.writeEnum(6, this.f34148t.getNumber());
            }
            codedOutputStream.writeRawBytes(this.f34141e);
        }

        public static Builder newBuilder(VersionRequirement versionRequirement) {
            return newBuilder().mergeFrom(versionRequirement);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirement getDefaultInstanceForType() {
            return f34140w;
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
            this.f34149u = (byte) -1;
            this.f34150v = -1;
            this.f34141e = builder.getUnknownFields();
        }

        private VersionRequirement(boolean z10) {
            this.f34149u = (byte) -1;
            this.f34150v = -1;
            this.f34141e = ByteString.EMPTY;
        }

        private VersionRequirement(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34149u = (byte) -1;
            this.f34150v = -1;
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
                                this.f34142i |= 1;
                                this.f34143o = codedInputStream.readInt32();
                            } else if (readTag == 16) {
                                this.f34142i |= 2;
                                this.f34144p = codedInputStream.readInt32();
                            } else if (readTag == 24) {
                                int readEnum = codedInputStream.readEnum();
                                Level valueOf = Level.valueOf(readEnum);
                                if (valueOf == null) {
                                    newInstance.writeRawVarint32(readTag);
                                    newInstance.writeRawVarint32(readEnum);
                                } else {
                                    this.f34142i |= 4;
                                    this.f34145q = valueOf;
                                }
                            } else if (readTag == 32) {
                                this.f34142i |= 8;
                                this.f34146r = codedInputStream.readInt32();
                            } else if (readTag == 40) {
                                this.f34142i |= 16;
                                this.f34147s = codedInputStream.readInt32();
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
                                    this.f34142i |= 32;
                                    this.f34148t = valueOf2;
                                }
                            }
                        }
                        z10 = true;
                    } catch (Throwable th2) {
                        try {
                            newInstance.flush();
                        } catch (IOException unused) {
                        } catch (Throwable th3) {
                            this.f34141e = newOutput.toByteString();
                            throw th3;
                        }
                        this.f34141e = newOutput.toByteString();
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
                this.f34141e = newOutput.toByteString();
                throw th4;
            }
            this.f34141e = newOutput.toByteString();
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
        private static final VersionRequirementTable f34164q;

        /* renamed from: e  reason: collision with root package name */
        private final ByteString f34165e;

        /* renamed from: i  reason: collision with root package name */
        private List f34166i;

        /* renamed from: o  reason: collision with root package name */
        private byte f34167o;

        /* renamed from: p  reason: collision with root package name */
        private int f34168p;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class Builder extends GeneratedMessageLite.Builder<VersionRequirementTable, Builder> implements VersionRequirementTableOrBuilder {

            /* renamed from: e  reason: collision with root package name */
            private int f34169e;

            /* renamed from: i  reason: collision with root package name */
            private List f34170i = Collections.EMPTY_LIST;

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
                if ((this.f34169e & 1) != 1) {
                    this.f34170i = new ArrayList(this.f34170i);
                    this.f34169e |= 1;
                }
            }

            private void e() {
            }

            public VersionRequirementTable buildPartial() {
                VersionRequirementTable versionRequirementTable = new VersionRequirementTable(this);
                if ((this.f34169e & 1) == 1) {
                    this.f34170i = Collections.unmodifiableList(this.f34170i);
                    this.f34169e &= -2;
                }
                versionRequirementTable.f34166i = this.f34170i;
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
                if (!versionRequirementTable.f34166i.isEmpty()) {
                    if (this.f34170i.isEmpty()) {
                        this.f34170i = versionRequirementTable.f34166i;
                        this.f34169e &= -2;
                    } else {
                        d();
                        this.f34170i.addAll(versionRequirementTable.f34166i);
                    }
                }
                setUnknownFields(getUnknownFields().concat(versionRequirementTable.f34165e));
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
            f34164q = versionRequirementTable;
            versionRequirementTable.k();
        }

        public static VersionRequirementTable getDefaultInstance() {
            return f34164q;
        }

        private void k() {
            this.f34166i = Collections.EMPTY_LIST;
        }

        public static Builder newBuilder() {
            return Builder.b();
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.GeneratedMessageLite, kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public Parser<VersionRequirementTable> getParserForType() {
            return PARSER;
        }

        public int getRequirementCount() {
            return this.f34166i.size();
        }

        public List<VersionRequirement> getRequirementList() {
            return this.f34166i;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public int getSerializedSize() {
            int i10 = this.f34168p;
            if (i10 != -1) {
                return i10;
            }
            int i11 = 0;
            for (int i12 = 0; i12 < this.f34166i.size(); i12++) {
                i11 += CodedOutputStream.computeMessageSize(1, (MessageLite) this.f34166i.get(i12));
            }
            int size = i11 + this.f34165e.size();
            this.f34168p = size;
            return size;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public final boolean isInitialized() {
            byte b10 = this.f34167o;
            if (b10 == 1) {
                return true;
            }
            if (b10 == 0) {
                return false;
            }
            this.f34167o = (byte) 1;
            return true;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLite
        public void writeTo(CodedOutputStream codedOutputStream) {
            getSerializedSize();
            for (int i10 = 0; i10 < this.f34166i.size(); i10++) {
                codedOutputStream.writeMessage(1, (MessageLite) this.f34166i.get(i10));
            }
            codedOutputStream.writeRawBytes(this.f34165e);
        }

        public static Builder newBuilder(VersionRequirementTable versionRequirementTable) {
            return newBuilder().mergeFrom(versionRequirementTable);
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.MessageLiteOrBuilder
        public VersionRequirementTable getDefaultInstanceForType() {
            return f34164q;
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
            this.f34167o = (byte) -1;
            this.f34168p = -1;
            this.f34165e = builder.getUnknownFields();
        }

        private VersionRequirementTable(boolean z10) {
            this.f34167o = (byte) -1;
            this.f34168p = -1;
            this.f34165e = ByteString.EMPTY;
        }

        private VersionRequirementTable(CodedInputStream codedInputStream, ExtensionRegistryLite extensionRegistryLite) {
            this.f34167o = (byte) -1;
            this.f34168p = -1;
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
                                        this.f34166i = new ArrayList();
                                        z11 = true;
                                    }
                                    this.f34166i.add(codedInputStream.readMessage(VersionRequirement.PARSER, extensionRegistryLite));
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
                        this.f34166i = Collections.unmodifiableList(this.f34166i);
                    }
                    try {
                        newInstance.flush();
                    } catch (IOException unused) {
                    } catch (Throwable th3) {
                        this.f34165e = newOutput.toByteString();
                        throw th3;
                    }
                    this.f34165e = newOutput.toByteString();
                    e();
                    throw th2;
                }
            }
            if (z11) {
                this.f34166i = Collections.unmodifiableList(this.f34166i);
            }
            try {
                newInstance.flush();
            } catch (IOException unused2) {
            } catch (Throwable th4) {
                this.f34165e = newOutput.toByteString();
                throw th4;
            }
            this.f34165e = newOutput.toByteString();
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
        private static Internal.EnumLiteMap f34171e = new a();

        /* renamed from: d  reason: collision with root package name */
        private final int f34173d;

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
            this.f34173d = i11;
        }

        @Override // kotlin.reflect.jvm.internal.impl.protobuf.Internal.EnumLite
        public final int getNumber() {
            return this.f34173d;
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
