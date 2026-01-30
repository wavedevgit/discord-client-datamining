package kotlin.reflect.jvm.internal.impl.descriptors.impl;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorVisitor;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibilities;
import kotlin.reflect.jvm.internal.impl.descriptors.DescriptorVisibility;
import kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.Modality;
import kotlin.reflect.jvm.internal.impl.descriptors.ReceiverParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.SourceElement;
import kotlin.reflect.jvm.internal.impl.descriptors.TypeParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.ValueParameterDescriptor;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotations;
import kotlin.reflect.jvm.internal.impl.descriptors.annotations.AnnotationsKt;
import kotlin.reflect.jvm.internal.impl.descriptors.impl.ValueParameterDescriptorImpl;
import kotlin.reflect.jvm.internal.impl.name.Name;
import kotlin.reflect.jvm.internal.impl.resolve.DescriptorFactory;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ExtensionReceiver;
import kotlin.reflect.jvm.internal.impl.resolve.scopes.receivers.ImplicitContextReceiver;
import kotlin.reflect.jvm.internal.impl.types.DescriptorSubstitutor;
import kotlin.reflect.jvm.internal.impl.types.KotlinType;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitution;
import kotlin.reflect.jvm.internal.impl.types.TypeSubstitutor;
import kotlin.reflect.jvm.internal.impl.types.Variance;
import kotlin.reflect.jvm.internal.impl.utils.SmartList;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class FunctionDescriptorImpl extends DeclarationDescriptorNonRootImpl implements FunctionDescriptor {
    private boolean A;
    private boolean B;
    private boolean C;
    private boolean D;
    private boolean E;
    private boolean F;
    private boolean G;
    private boolean H;
    private boolean I;
    private Collection J;
    private volatile Function0 K;
    private final FunctionDescriptor L;
    private final CallableMemberDescriptor.Kind M;
    private FunctionDescriptor N;
    protected Map O;

    /* renamed from: p  reason: collision with root package name */
    private List f33746p;

    /* renamed from: q  reason: collision with root package name */
    private List f33747q;

    /* renamed from: r  reason: collision with root package name */
    private KotlinType f33748r;

    /* renamed from: s  reason: collision with root package name */
    private List f33749s;

    /* renamed from: t  reason: collision with root package name */
    private ReceiverParameterDescriptor f33750t;

    /* renamed from: u  reason: collision with root package name */
    private ReceiverParameterDescriptor f33751u;

    /* renamed from: v  reason: collision with root package name */
    private Modality f33752v;

    /* renamed from: w  reason: collision with root package name */
    private DescriptorVisibility f33753w;

    /* renamed from: x  reason: collision with root package name */
    private boolean f33754x;

    /* renamed from: y  reason: collision with root package name */
    private boolean f33755y;

    /* renamed from: z  reason: collision with root package name */
    private boolean f33756z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class CopyConfiguration implements FunctionDescriptor.CopyBuilder<FunctionDescriptor> {

        /* renamed from: a  reason: collision with root package name */
        protected TypeSubstitution f33757a;

        /* renamed from: b  reason: collision with root package name */
        protected DeclarationDescriptor f33758b;

        /* renamed from: c  reason: collision with root package name */
        protected Modality f33759c;

        /* renamed from: d  reason: collision with root package name */
        protected DescriptorVisibility f33760d;

        /* renamed from: e  reason: collision with root package name */
        protected FunctionDescriptor f33761e;

        /* renamed from: f  reason: collision with root package name */
        protected CallableMemberDescriptor.Kind f33762f;

        /* renamed from: g  reason: collision with root package name */
        protected List f33763g;

        /* renamed from: h  reason: collision with root package name */
        protected List f33764h;

        /* renamed from: i  reason: collision with root package name */
        protected ReceiverParameterDescriptor f33765i;

        /* renamed from: j  reason: collision with root package name */
        protected ReceiverParameterDescriptor f33766j;

        /* renamed from: k  reason: collision with root package name */
        protected KotlinType f33767k;

        /* renamed from: l  reason: collision with root package name */
        protected Name f33768l;

        /* renamed from: m  reason: collision with root package name */
        protected boolean f33769m;

        /* renamed from: n  reason: collision with root package name */
        protected boolean f33770n;

        /* renamed from: o  reason: collision with root package name */
        protected boolean f33771o;

        /* renamed from: p  reason: collision with root package name */
        protected boolean f33772p;

        /* renamed from: q  reason: collision with root package name */
        private boolean f33773q;

        /* renamed from: r  reason: collision with root package name */
        private List f33774r;

        /* renamed from: s  reason: collision with root package name */
        private Annotations f33775s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f33776t;

        /* renamed from: u  reason: collision with root package name */
        private Map f33777u;

        /* renamed from: v  reason: collision with root package name */
        private Boolean f33778v;

        /* renamed from: w  reason: collision with root package name */
        protected boolean f33779w;

        /* renamed from: x  reason: collision with root package name */
        final /* synthetic */ FunctionDescriptorImpl f33780x;

        public CopyConfiguration(@NotNull FunctionDescriptorImpl functionDescriptorImpl, @NotNull TypeSubstitution typeSubstitution, @NotNull DeclarationDescriptor declarationDescriptor, @NotNull Modality modality, @NotNull DescriptorVisibility descriptorVisibility, @NotNull CallableMemberDescriptor.Kind kind, @NotNull List<ValueParameterDescriptor> list, List<ReceiverParameterDescriptor> list2, @NotNull ReceiverParameterDescriptor receiverParameterDescriptor, KotlinType kotlinType, Name name) {
            if (typeSubstitution == null) {
                a(0);
            }
            if (declarationDescriptor == null) {
                a(1);
            }
            if (modality == null) {
                a(2);
            }
            if (descriptorVisibility == null) {
                a(3);
            }
            if (kind == null) {
                a(4);
            }
            if (list == null) {
                a(5);
            }
            if (list2 == null) {
                a(6);
            }
            if (kotlinType == null) {
                a(7);
            }
            this.f33780x = functionDescriptorImpl;
            this.f33761e = null;
            this.f33766j = functionDescriptorImpl.f33751u;
            this.f33769m = true;
            this.f33770n = false;
            this.f33771o = false;
            this.f33772p = false;
            this.f33773q = functionDescriptorImpl.isHiddenToOvercomeSignatureClash();
            this.f33774r = null;
            this.f33775s = null;
            this.f33776t = functionDescriptorImpl.isHiddenForResolutionEverywhereBesideSupercalls();
            this.f33777u = new LinkedHashMap();
            this.f33778v = null;
            this.f33779w = false;
            this.f33757a = typeSubstitution;
            this.f33758b = declarationDescriptor;
            this.f33759c = modality;
            this.f33760d = descriptorVisibility;
            this.f33762f = kind;
            this.f33763g = list;
            this.f33764h = list2;
            this.f33765i = receiverParameterDescriptor;
            this.f33767k = kotlinType;
            this.f33768l = name;
        }

        private static /* synthetic */ void a(int i10) {
            String str;
            int i11;
            switch (i10) {
                case 9:
                case 11:
                case 13:
                case 15:
                case 16:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case 40:
                case 41:
                case 42:
                    str = "@NotNull method %s.%s must not return null";
                    break;
                case 10:
                case 12:
                case 14:
                case 17:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case 23:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                default:
                    str = "Argument for @NotNull parameter '%s' of %s.%s must not be null";
                    break;
            }
            switch (i10) {
                case 9:
                case 11:
                case 13:
                case 15:
                case 16:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case 40:
                case 41:
                case 42:
                    i11 = 2;
                    break;
                case 10:
                case 12:
                case 14:
                case 17:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case 23:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                default:
                    i11 = 3;
                    break;
            }
            Object[] objArr = new Object[i11];
            switch (i10) {
                case 1:
                    objArr[0] = "newOwner";
                    break;
                case 2:
                    objArr[0] = "newModality";
                    break;
                case 3:
                    objArr[0] = "newVisibility";
                    break;
                case 4:
                case 14:
                    objArr[0] = "kind";
                    break;
                case 5:
                    objArr[0] = "newValueParameterDescriptors";
                    break;
                case 6:
                    objArr[0] = "newContextReceiverParameters";
                    break;
                case 7:
                    objArr[0] = "newReturnType";
                    break;
                case 8:
                    objArr[0] = "owner";
                    break;
                case 9:
                case 11:
                case 13:
                case 15:
                case 16:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case 40:
                case 41:
                case 42:
                    objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl$CopyConfiguration";
                    break;
                case 10:
                    objArr[0] = "modality";
                    break;
                case 12:
                    objArr[0] = "visibility";
                    break;
                case 17:
                    objArr[0] = StackTraceHelper.NAME_KEY;
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    objArr[0] = "parameters";
                    break;
                case 23:
                    objArr[0] = "type";
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    objArr[0] = "contextReceiverParameters";
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    objArr[0] = "additionalAnnotations";
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                default:
                    objArr[0] = "substitution";
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    objArr[0] = "userDataKey";
                    break;
            }
            switch (i10) {
                case 9:
                    objArr[1] = "setOwner";
                    break;
                case 10:
                case 12:
                case 14:
                case 17:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case 23:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                default:
                    objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl$CopyConfiguration";
                    break;
                case 11:
                    objArr[1] = "setModality";
                    break;
                case 13:
                    objArr[1] = "setVisibility";
                    break;
                case 15:
                    objArr[1] = "setKind";
                    break;
                case 16:
                    objArr[1] = "setCopyOverrides";
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    objArr[1] = "setName";
                    break;
                case 20:
                    objArr[1] = "setValueParameters";
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    objArr[1] = "setTypeParameters";
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    objArr[1] = "setReturnType";
                    break;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    objArr[1] = "setContextReceiverParameters";
                    break;
                case 27:
                    objArr[1] = "setExtensionReceiverParameter";
                    break;
                case 28:
                    objArr[1] = "setDispatchReceiverParameter";
                    break;
                case 29:
                    objArr[1] = "setOriginal";
                    break;
                case 30:
                    objArr[1] = "setSignatureChange";
                    break;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    objArr[1] = "setPreserveSourceElement";
                    break;
                case 32:
                    objArr[1] = "setDropOriginalInContainingParts";
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    objArr[1] = "setHiddenToOvercomeSignatureClash";
                    break;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    objArr[1] = "setHiddenForResolutionEverywhereBesideSupercalls";
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    objArr[1] = "setAdditionalAnnotations";
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    objArr[1] = "setSubstitution";
                    break;
                case 40:
                    objArr[1] = "putUserData";
                    break;
                case 41:
                    objArr[1] = "getSubstitution";
                    break;
                case 42:
                    objArr[1] = "setJustForTypeSubstitution";
                    break;
            }
            switch (i10) {
                case 8:
                    objArr[2] = "setOwner";
                    break;
                case 9:
                case 11:
                case 13:
                case 15:
                case 16:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case 40:
                case 41:
                case 42:
                    break;
                case 10:
                    objArr[2] = "setModality";
                    break;
                case 12:
                    objArr[2] = "setVisibility";
                    break;
                case 14:
                    objArr[2] = "setKind";
                    break;
                case 17:
                    objArr[2] = "setName";
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    objArr[2] = "setValueParameters";
                    break;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    objArr[2] = "setTypeParameters";
                    break;
                case 23:
                    objArr[2] = "setReturnType";
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    objArr[2] = "setContextReceiverParameters";
                    break;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    objArr[2] = "setAdditionalAnnotations";
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    objArr[2] = "setSubstitution";
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    objArr[2] = "putUserData";
                    break;
                default:
                    objArr[2] = "<init>";
                    break;
            }
            String format = String.format(str, objArr);
            switch (i10) {
                case 9:
                case 11:
                case 13:
                case 15:
                case 16:
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case 40:
                case 41:
                case 42:
                    throw new IllegalStateException(format);
                case 10:
                case 12:
                case 14:
                case 17:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case 23:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                default:
                    throw new IllegalArgumentException(format);
            }
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        public FunctionDescriptor build() {
            return this.f33780x.c(this);
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public <V> FunctionDescriptor.CopyBuilder<FunctionDescriptor> putUserData(@NotNull CallableDescriptor.UserDataKey<V> userDataKey, V v10) {
            if (userDataKey == null) {
                a(39);
            }
            this.f33777u.put(userDataKey, v10);
            return this;
        }

        public CopyConfiguration setHasSynthesizedParameterNames(boolean z10) {
            this.f33778v = Boolean.valueOf(z10);
            return this;
        }

        @NotNull
        public CopyConfiguration setJustForTypeSubstitution(boolean z10) {
            this.f33779w = z10;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public /* bridge */ /* synthetic */ FunctionDescriptor.CopyBuilder<FunctionDescriptor> setTypeParameters(@NotNull List list) {
            return setTypeParameters2((List<TypeParameterDescriptor>) list);
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public /* bridge */ /* synthetic */ FunctionDescriptor.CopyBuilder<FunctionDescriptor> setValueParameters(@NotNull List list) {
            return setValueParameters2((List<ValueParameterDescriptor>) list);
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setAdditionalAnnotations(@NotNull Annotations annotations) {
            if (annotations == null) {
                a(35);
            }
            this.f33775s = annotations;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setCopyOverrides(boolean z10) {
            this.f33769m = z10;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setDispatchReceiverParameter(ReceiverParameterDescriptor receiverParameterDescriptor) {
            this.f33766j = receiverParameterDescriptor;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setDropOriginalInContainingParts() {
            this.f33772p = true;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setExtensionReceiverParameter(ReceiverParameterDescriptor receiverParameterDescriptor) {
            this.f33765i = receiverParameterDescriptor;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setHiddenForResolutionEverywhereBesideSupercalls() {
            this.f33776t = true;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setHiddenToOvercomeSignatureClash() {
            this.f33773q = true;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setKind(@NotNull CallableMemberDescriptor.Kind kind) {
            if (kind == null) {
                a(14);
            }
            this.f33762f = kind;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setModality(@NotNull Modality modality) {
            if (modality == null) {
                a(10);
            }
            this.f33759c = modality;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setName(@NotNull Name name) {
            if (name == null) {
                a(17);
            }
            this.f33768l = name;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setOriginal(CallableMemberDescriptor callableMemberDescriptor) {
            this.f33761e = (FunctionDescriptor) callableMemberDescriptor;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setOwner(@NotNull DeclarationDescriptor declarationDescriptor) {
            if (declarationDescriptor == null) {
                a(8);
            }
            this.f33758b = declarationDescriptor;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setPreserveSourceElement() {
            this.f33771o = true;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setReturnType(@NotNull KotlinType kotlinType) {
            if (kotlinType == null) {
                a(23);
            }
            this.f33767k = kotlinType;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setSignatureChange() {
            this.f33770n = true;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setSubstitution(@NotNull TypeSubstitution typeSubstitution) {
            if (typeSubstitution == null) {
                a(37);
            }
            this.f33757a = typeSubstitution;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        /* renamed from: setTypeParameters  reason: avoid collision after fix types in other method */
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setTypeParameters2(@NotNull List<TypeParameterDescriptor> list) {
            if (list == null) {
                a(21);
            }
            this.f33774r = list;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        /* renamed from: setValueParameters  reason: avoid collision after fix types in other method */
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setValueParameters2(@NotNull List<ValueParameterDescriptor> list) {
            if (list == null) {
                a(19);
            }
            this.f33763g = list;
            return this;
        }

        @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor.CopyBuilder
        @NotNull
        public FunctionDescriptor.CopyBuilder<FunctionDescriptor> setVisibility(@NotNull DescriptorVisibility descriptorVisibility) {
            if (descriptorVisibility == null) {
                a(12);
            }
            this.f33760d = descriptorVisibility;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class a implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TypeSubstitutor f33781d;

        a(TypeSubstitutor typeSubstitutor) {
            this.f33781d = typeSubstitutor;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public Collection invoke() {
            SmartList smartList = new SmartList();
            for (FunctionDescriptor functionDescriptor : FunctionDescriptorImpl.this.getOverriddenDescriptors()) {
                smartList.add(functionDescriptor.substitute(this.f33781d));
            }
            return smartList;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ List f33783d;

        b(List list) {
            this.f33783d = list;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public List invoke() {
            return this.f33783d;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public FunctionDescriptorImpl(DeclarationDescriptor declarationDescriptor, FunctionDescriptor functionDescriptor, Annotations annotations, Name name, CallableMemberDescriptor.Kind kind, SourceElement sourceElement) {
        super(declarationDescriptor, annotations, name, sourceElement);
        if (declarationDescriptor == null) {
            a(0);
        }
        if (annotations == null) {
            a(1);
        }
        if (name == null) {
            a(2);
        }
        if (kind == null) {
            a(3);
        }
        if (sourceElement == null) {
            a(4);
        }
        this.f33753w = DescriptorVisibilities.UNKNOWN;
        this.f33754x = false;
        this.f33755y = false;
        this.f33756z = false;
        this.A = false;
        this.B = false;
        this.C = false;
        this.D = false;
        this.E = false;
        this.F = false;
        this.G = false;
        this.H = true;
        this.I = false;
        this.J = null;
        this.K = null;
        this.N = null;
        this.O = null;
        this.L = functionDescriptor == null ? this : functionDescriptor;
        this.M = kind;
    }

    private static /* synthetic */ void a(int i10) {
        String str;
        int i11;
        switch (i10) {
            case 9:
            case 13:
            case 14:
            case 15:
            case 16:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case 23:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
                str = "@NotNull method %s.%s must not return null";
                break;
            case 10:
            case 11:
            case 12:
            case 17:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
            default:
                str = "Argument for @NotNull parameter '%s' of %s.%s must not be null";
                break;
        }
        switch (i10) {
            case 9:
            case 13:
            case 14:
            case 15:
            case 16:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case 23:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
                i11 = 2;
                break;
            case 10:
            case 11:
            case 12:
            case 17:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
            default:
                i11 = 3;
                break;
        }
        Object[] objArr = new Object[i11];
        switch (i10) {
            case 1:
                objArr[0] = "annotations";
                break;
            case 2:
                objArr[0] = StackTraceHelper.NAME_KEY;
                break;
            case 3:
                objArr[0] = "kind";
                break;
            case 4:
                objArr[0] = "source";
                break;
            case 5:
                objArr[0] = "contextReceiverParameters";
                break;
            case 6:
                objArr[0] = "typeParameters";
                break;
            case 7:
            case 28:
            case 30:
                objArr[0] = "unsubstitutedValueParameters";
                break;
            case 8:
            case 10:
                objArr[0] = "visibility";
                break;
            case 9:
            case 13:
            case 14:
            case 15:
            case 16:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case 23:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
                objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl";
                break;
            case 11:
                objArr[0] = "unsubstitutedReturnType";
                break;
            case 12:
                objArr[0] = "extensionReceiverParameter";
                break;
            case 17:
                objArr[0] = "overriddenDescriptors";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                objArr[0] = "originalSubstitutor";
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case 29:
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                objArr[0] = "substitutor";
                break;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                objArr[0] = "configuration";
                break;
            default:
                objArr[0] = "containingDeclaration";
                break;
        }
        switch (i10) {
            case 9:
                objArr[1] = "initialize";
                break;
            case 10:
            case 11:
            case 12:
            case 17:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
            default:
                objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/impl/FunctionDescriptorImpl";
                break;
            case 13:
                objArr[1] = "getContextReceiverParameters";
                break;
            case 14:
                objArr[1] = "getOverriddenDescriptors";
                break;
            case 15:
                objArr[1] = "getModality";
                break;
            case 16:
                objArr[1] = "getVisibility";
                break;
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                objArr[1] = "getTypeParameters";
                break;
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                objArr[1] = "getValueParameters";
                break;
            case 20:
                objArr[1] = "getOriginal";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                objArr[1] = "getKind";
                break;
            case 23:
                objArr[1] = "newCopyBuilder";
                break;
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                objArr[1] = "copy";
                break;
            case 27:
                objArr[1] = "getSourceToUseForCopy";
                break;
        }
        switch (i10) {
            case 5:
            case 6:
            case 7:
            case 8:
                objArr[2] = "initialize";
                break;
            case 9:
            case 13:
            case 14:
            case 15:
            case 16:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case 23:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
                break;
            case 10:
                objArr[2] = "setVisibility";
                break;
            case 11:
                objArr[2] = "setReturnType";
                break;
            case 12:
                objArr[2] = "setExtensionReceiverParameter";
                break;
            case 17:
                objArr[2] = "setOverriddenDescriptors";
                break;
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                objArr[2] = "substitute";
                break;
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                objArr[2] = "newCopyBuilder";
                break;
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                objArr[2] = "doSubstitute";
                break;
            case 28:
            case 29:
            case 30:
            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                objArr[2] = "getSubstitutedValueParameters";
                break;
            default:
                objArr[2] = "<init>";
                break;
        }
        String format = String.format(str, objArr);
        switch (i10) {
            case 9:
            case 13:
            case 14:
            case 15:
            case 16:
            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
            case 20:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
            case 23:
            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
            case 27:
                throw new IllegalStateException(format);
            case 10:
            case 11:
            case 12:
            case 17:
            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
            default:
                throw new IllegalArgumentException(format);
        }
    }

    private SourceElement d(boolean z10, FunctionDescriptor functionDescriptor) {
        SourceElement sourceElement;
        if (z10) {
            if (functionDescriptor == null) {
                functionDescriptor = getOriginal();
            }
            sourceElement = functionDescriptor.getSource();
        } else {
            sourceElement = SourceElement.NO_SOURCE;
        }
        if (sourceElement == null) {
            a(27);
        }
        return sourceElement;
    }

    private void f() {
        Function0 function0 = this.K;
        if (function0 != null) {
            this.J = (Collection) function0.invoke();
            this.K = null;
        }
    }

    private void g(boolean z10) {
        this.F = z10;
    }

    public static List<ValueParameterDescriptor> getSubstitutedValueParameters(FunctionDescriptor functionDescriptor, @NotNull List<ValueParameterDescriptor> list, @NotNull TypeSubstitutor typeSubstitutor) {
        if (list == null) {
            a(28);
        }
        if (typeSubstitutor == null) {
            a(29);
        }
        return getSubstitutedValueParameters(functionDescriptor, list, typeSubstitutor, false, false, null);
    }

    private void h(boolean z10) {
        this.E = z10;
    }

    private void setInitialSignatureDescriptor(FunctionDescriptor functionDescriptor) {
        this.N = functionDescriptor;
    }

    public <R, D> R accept(DeclarationDescriptorVisitor<R, D> declarationDescriptorVisitor, D d10) {
        return declarationDescriptorVisitor.visitFunctionDescriptor(this, d10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public FunctionDescriptor c(CopyConfiguration copyConfiguration) {
        Annotations annotations;
        List<TypeParameterDescriptor> list;
        char c10;
        ReceiverParameterDescriptorImpl receiverParameterDescriptorImpl;
        FunctionDescriptor functionDescriptor;
        char c11;
        boolean z10;
        FunctionDescriptor functionDescriptor2;
        char c12;
        boolean z11;
        boolean z12;
        if (copyConfiguration == null) {
            a(25);
        }
        boolean[] zArr = new boolean[1];
        if (copyConfiguration.f33775s != null) {
            annotations = AnnotationsKt.composeAnnotations(getAnnotations(), copyConfiguration.f33775s);
        } else {
            annotations = getAnnotations();
        }
        Annotations annotations2 = annotations;
        DeclarationDescriptor declarationDescriptor = copyConfiguration.f33758b;
        FunctionDescriptor functionDescriptor3 = copyConfiguration.f33761e;
        FunctionDescriptorImpl createSubstitutedCopy = createSubstitutedCopy(declarationDescriptor, functionDescriptor3, copyConfiguration.f33762f, copyConfiguration.f33768l, annotations2, d(copyConfiguration.f33771o, functionDescriptor3));
        if (copyConfiguration.f33774r != null) {
            list = copyConfiguration.f33774r;
        } else {
            list = getTypeParameters();
        }
        zArr[0] = zArr[0] | (!list.isEmpty());
        ArrayList arrayList = new ArrayList(list.size());
        TypeSubstitutor substituteTypeParameters = DescriptorSubstitutor.substituteTypeParameters(list, copyConfiguration.f33757a, createSubstitutedCopy, arrayList, zArr);
        ReceiverParameterDescriptor receiverParameterDescriptor = null;
        if (substituteTypeParameters == null) {
            return null;
        }
        ArrayList arrayList2 = new ArrayList();
        if (!copyConfiguration.f33764h.isEmpty()) {
            int i10 = 0;
            for (ReceiverParameterDescriptor receiverParameterDescriptor2 : copyConfiguration.f33764h) {
                KotlinType substitute = substituteTypeParameters.substitute(receiverParameterDescriptor2.getType(), Variance.IN_VARIANCE);
                if (substitute == null) {
                    return null;
                }
                int i11 = i10 + 1;
                arrayList2.add(DescriptorFactory.createContextReceiverParameterForCallable(createSubstitutedCopy, substitute, ((ImplicitContextReceiver) receiverParameterDescriptor2.getValue()).getCustomLabelName(), receiverParameterDescriptor2.getAnnotations(), i10));
                boolean z13 = zArr[0];
                if (substitute != receiverParameterDescriptor2.getType()) {
                    z12 = true;
                } else {
                    z12 = false;
                }
                zArr[0] = z13 | z12;
                i10 = i11;
            }
        }
        ReceiverParameterDescriptor receiverParameterDescriptor3 = copyConfiguration.f33765i;
        if (receiverParameterDescriptor3 != null) {
            KotlinType substitute2 = substituteTypeParameters.substitute(receiverParameterDescriptor3.getType(), Variance.IN_VARIANCE);
            if (substitute2 == null) {
                return null;
            }
            ReceiverParameterDescriptorImpl receiverParameterDescriptorImpl2 = new ReceiverParameterDescriptorImpl(createSubstitutedCopy, new ExtensionReceiver(createSubstitutedCopy, substitute2, copyConfiguration.f33765i.getValue()), copyConfiguration.f33765i.getAnnotations());
            boolean z14 = zArr[0];
            if (substitute2 != copyConfiguration.f33765i.getType()) {
                z11 = true;
            } else {
                z11 = false;
            }
            zArr[0] = z11 | z14;
            c10 = 0;
            receiverParameterDescriptorImpl = receiverParameterDescriptorImpl2;
        } else {
            c10 = 0;
            receiverParameterDescriptorImpl = null;
        }
        ReceiverParameterDescriptor receiverParameterDescriptor4 = copyConfiguration.f33766j;
        if (receiverParameterDescriptor4 != null) {
            ReceiverParameterDescriptor substitute3 = receiverParameterDescriptor4.substitute(substituteTypeParameters);
            if (substitute3 == null) {
                return null;
            }
            boolean z15 = zArr[c10];
            if (substitute3 != copyConfiguration.f33766j) {
                c12 = 1;
            } else {
                c12 = c10;
            }
            zArr[c10] = z15 | c12;
            functionDescriptor = null;
            receiverParameterDescriptor = substitute3;
        } else {
            functionDescriptor = null;
        }
        List<ValueParameterDescriptor> substitutedValueParameters = getSubstitutedValueParameters(createSubstitutedCopy, copyConfiguration.f33763g, substituteTypeParameters, copyConfiguration.f33772p, copyConfiguration.f33771o, zArr);
        if (substitutedValueParameters == null) {
            return functionDescriptor;
        }
        KotlinType substitute4 = substituteTypeParameters.substitute(copyConfiguration.f33767k, Variance.OUT_VARIANCE);
        if (substitute4 == null) {
            return functionDescriptor;
        }
        boolean z16 = zArr[c10];
        if (substitute4 != copyConfiguration.f33767k) {
            c11 = 1;
        } else {
            c11 = c10;
        }
        boolean z17 = z16 | c11;
        zArr[c10] = z17;
        if (!z17 && copyConfiguration.f33779w) {
            return this;
        }
        createSubstitutedCopy.initialize(receiverParameterDescriptorImpl, receiverParameterDescriptor, arrayList2, arrayList, substitutedValueParameters, substitute4, copyConfiguration.f33759c, copyConfiguration.f33760d);
        createSubstitutedCopy.setOperator(this.f33754x);
        createSubstitutedCopy.setInfix(this.f33755y);
        createSubstitutedCopy.setExternal(this.f33756z);
        createSubstitutedCopy.setInline(this.A);
        createSubstitutedCopy.setTailrec(this.B);
        createSubstitutedCopy.setSuspend(this.G);
        createSubstitutedCopy.setExpect(this.C);
        createSubstitutedCopy.setActual(this.D);
        createSubstitutedCopy.setHasStableParameterNames(this.H);
        createSubstitutedCopy.h(copyConfiguration.f33773q);
        createSubstitutedCopy.g(copyConfiguration.f33776t);
        if (copyConfiguration.f33778v != null) {
            z10 = copyConfiguration.f33778v.booleanValue();
        } else {
            z10 = this.I;
        }
        createSubstitutedCopy.setHasSynthesizedParameterNames(z10);
        if (!copyConfiguration.f33777u.isEmpty() || this.O != null) {
            Map map = copyConfiguration.f33777u;
            Map map2 = this.O;
            if (map2 != null) {
                for (Map.Entry entry : map2.entrySet()) {
                    if (!map.containsKey(entry.getKey())) {
                        map.put(entry.getKey(), entry.getValue());
                    }
                }
            }
            if (map.size() == 1) {
                createSubstitutedCopy.O = Collections.singletonMap(map.keySet().iterator().next(), map.values().iterator().next());
            } else {
                createSubstitutedCopy.O = map;
            }
        }
        if (copyConfiguration.f33770n || getInitialSignatureDescriptor() != null) {
            if (getInitialSignatureDescriptor() != null) {
                functionDescriptor2 = getInitialSignatureDescriptor();
            } else {
                functionDescriptor2 = this;
            }
            createSubstitutedCopy.setInitialSignatureDescriptor(functionDescriptor2.substitute(substituteTypeParameters));
        }
        if (copyConfiguration.f33769m && !getOriginal().getOverriddenDescriptors().isEmpty()) {
            if (copyConfiguration.f33757a.isEmpty()) {
                Function0 function0 = this.K;
                if (function0 != null) {
                    createSubstitutedCopy.K = function0;
                    return createSubstitutedCopy;
                }
                createSubstitutedCopy.setOverriddenDescriptors(getOverriddenDescriptors());
                return createSubstitutedCopy;
            }
            createSubstitutedCopy.K = new a(substituteTypeParameters);
        }
        return createSubstitutedCopy;
    }

    protected abstract FunctionDescriptorImpl createSubstitutedCopy(DeclarationDescriptor declarationDescriptor, FunctionDescriptor functionDescriptor, CallableMemberDescriptor.Kind kind, Name name, Annotations annotations, SourceElement sourceElement);

    /* JADX INFO: Access modifiers changed from: protected */
    public CopyConfiguration e(TypeSubstitutor typeSubstitutor) {
        if (typeSubstitutor == null) {
            a(24);
        }
        return new CopyConfiguration(this, typeSubstitutor.getSubstitution(), getContainingDeclaration(), getModality(), getVisibility(), getKind(), getValueParameters(), getContextReceiverParameters(), getExtensionReceiverParameter(), getReturnType(), null);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    @NotNull
    public List<ReceiverParameterDescriptor> getContextReceiverParameters() {
        List<ReceiverParameterDescriptor> list = this.f33749s;
        if (list == null) {
            a(13);
        }
        return list;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public ReceiverParameterDescriptor getDispatchReceiverParameter() {
        return this.f33751u;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public ReceiverParameterDescriptor getExtensionReceiverParameter() {
        return this.f33750t;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor
    public FunctionDescriptor getInitialSignatureDescriptor() {
        return this.N;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor
    @NotNull
    public CallableMemberDescriptor.Kind getKind() {
        CallableMemberDescriptor.Kind kind = this.M;
        if (kind == null) {
            a(21);
        }
        return kind;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    @NotNull
    public Modality getModality() {
        Modality modality = this.f33752v;
        if (modality == null) {
            a(15);
        }
        return modality;
    }

    @NotNull
    public Collection<? extends FunctionDescriptor> getOverriddenDescriptors() {
        f();
        Collection<? extends FunctionDescriptor> collection = this.J;
        if (collection == null) {
            collection = Collections.EMPTY_LIST;
        }
        if (collection == null) {
            a(14);
        }
        return collection;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public KotlinType getReturnType() {
        return this.f33748r;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    @NotNull
    public List<TypeParameterDescriptor> getTypeParameters() {
        List<TypeParameterDescriptor> list = this.f33746p;
        if (list != null) {
            return list;
        }
        throw new IllegalStateException("typeParameters == null for " + this);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public <V> V getUserData(CallableDescriptor.UserDataKey<V> userDataKey) {
        Map map = this.O;
        if (map == null) {
            return null;
        }
        return (V) map.get(userDataKey);
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    @NotNull
    public List<ValueParameterDescriptor> getValueParameters() {
        List<ValueParameterDescriptor> list = this.f33747q;
        if (list == null) {
            a(19);
        }
        return list;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptorWithVisibility
    @NotNull
    public DescriptorVisibility getVisibility() {
        DescriptorVisibility descriptorVisibility = this.f33753w;
        if (descriptorVisibility == null) {
            a(16);
        }
        return descriptorVisibility;
    }

    public boolean hasStableParameterNames() {
        return this.H;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableDescriptor
    public boolean hasSynthesizedParameterNames() {
        return this.I;
    }

    @NotNull
    public FunctionDescriptorImpl initialize(ReceiverParameterDescriptor receiverParameterDescriptor, ReceiverParameterDescriptor receiverParameterDescriptor2, @NotNull List<ReceiverParameterDescriptor> list, @NotNull List<? extends TypeParameterDescriptor> list2, @NotNull List<ValueParameterDescriptor> list3, KotlinType kotlinType, Modality modality, @NotNull DescriptorVisibility descriptorVisibility) {
        if (list == null) {
            a(5);
        }
        if (list2 == null) {
            a(6);
        }
        if (list3 == null) {
            a(7);
        }
        if (descriptorVisibility == null) {
            a(8);
        }
        this.f33746p = CollectionsKt.h1(list2);
        this.f33747q = CollectionsKt.h1(list3);
        this.f33748r = kotlinType;
        this.f33752v = modality;
        this.f33753w = descriptorVisibility;
        this.f33750t = receiverParameterDescriptor;
        this.f33751u = receiverParameterDescriptor2;
        this.f33749s = list;
        for (int i10 = 0; i10 < list2.size(); i10++) {
            TypeParameterDescriptor typeParameterDescriptor = list2.get(i10);
            if (typeParameterDescriptor.getIndex() != i10) {
                throw new IllegalStateException(typeParameterDescriptor + " index is " + typeParameterDescriptor.getIndex() + " but position is " + i10);
            }
        }
        for (int i11 = 0; i11 < list3.size(); i11++) {
            ValueParameterDescriptor valueParameterDescriptor = list3.get(i11);
            if (valueParameterDescriptor.getIndex() != i11) {
                throw new IllegalStateException(valueParameterDescriptor + "index is " + valueParameterDescriptor.getIndex() + " but position is " + i11);
            }
        }
        return this;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isActual() {
        return this.D;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.MemberDescriptor
    public boolean isExpect() {
        return this.C;
    }

    public boolean isExternal() {
        return this.f33756z;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor
    public boolean isHiddenForResolutionEverywhereBesideSupercalls() {
        return this.F;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor
    public boolean isHiddenToOvercomeSignatureClash() {
        return this.E;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor
    public boolean isInfix() {
        if (this.f33755y) {
            return true;
        }
        for (FunctionDescriptor functionDescriptor : getOriginal().getOverriddenDescriptors()) {
            if (functionDescriptor.isInfix()) {
                return true;
            }
        }
        return false;
    }

    public boolean isInline() {
        return this.A;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor
    public boolean isOperator() {
        if (this.f33754x) {
            return true;
        }
        for (FunctionDescriptor functionDescriptor : getOriginal().getOverriddenDescriptors()) {
            if (functionDescriptor.isOperator()) {
                return true;
            }
        }
        return false;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor
    public boolean isSuspend() {
        return this.G;
    }

    public boolean isTailrec() {
        return this.B;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor
    @NotNull
    public FunctionDescriptor.CopyBuilder<? extends FunctionDescriptor> newCopyBuilder() {
        CopyConfiguration e10 = e(TypeSubstitutor.EMPTY);
        if (e10 == null) {
            a(23);
        }
        return e10;
    }

    public <V> void putInUserDataMap(CallableDescriptor.UserDataKey<V> userDataKey, Object obj) {
        if (this.O == null) {
            this.O = new LinkedHashMap();
        }
        this.O.put(userDataKey, obj);
    }

    public void setActual(boolean z10) {
        this.D = z10;
    }

    public void setExpect(boolean z10) {
        this.C = z10;
    }

    public void setExternal(boolean z10) {
        this.f33756z = z10;
    }

    public void setHasStableParameterNames(boolean z10) {
        this.H = z10;
    }

    public void setHasSynthesizedParameterNames(boolean z10) {
        this.I = z10;
    }

    public void setInfix(boolean z10) {
        this.f33755y = z10;
    }

    public void setInline(boolean z10) {
        this.A = z10;
    }

    public void setOperator(boolean z10) {
        this.f33754x = z10;
    }

    public void setOverriddenDescriptors(@NotNull Collection<? extends CallableMemberDescriptor> collection) {
        if (collection == null) {
            a(17);
        }
        this.J = collection;
        Iterator<? extends CallableMemberDescriptor> it = collection.iterator();
        while (it.hasNext()) {
            if (((FunctionDescriptor) it.next()).isHiddenForResolutionEverywhereBesideSupercalls()) {
                this.F = true;
                return;
            }
        }
    }

    public void setReturnType(@NotNull KotlinType kotlinType) {
        if (kotlinType == null) {
            a(11);
        }
        this.f33748r = kotlinType;
    }

    public void setSuspend(boolean z10) {
        this.G = z10;
    }

    public void setTailrec(boolean z10) {
        this.B = z10;
    }

    public void setVisibility(@NotNull DescriptorVisibility descriptorVisibility) {
        if (descriptorVisibility == null) {
            a(10);
        }
        this.f33753w = descriptorVisibility;
    }

    public static List<ValueParameterDescriptor> getSubstitutedValueParameters(FunctionDescriptor functionDescriptor, @NotNull List<ValueParameterDescriptor> list, @NotNull TypeSubstitutor typeSubstitutor, boolean z10, boolean z11, boolean[] zArr) {
        if (list == null) {
            a(30);
        }
        if (typeSubstitutor == null) {
            a(31);
        }
        ArrayList arrayList = new ArrayList(list.size());
        for (ValueParameterDescriptor valueParameterDescriptor : list) {
            KotlinType type = valueParameterDescriptor.getType();
            Variance variance = Variance.IN_VARIANCE;
            KotlinType substitute = typeSubstitutor.substitute(type, variance);
            KotlinType varargElementType = valueParameterDescriptor.getVarargElementType();
            KotlinType substitute2 = varargElementType == null ? null : typeSubstitutor.substitute(varargElementType, variance);
            if (substitute == null) {
                return null;
            }
            if ((substitute != valueParameterDescriptor.getType() || varargElementType != substitute2) && zArr != null) {
                zArr[0] = true;
            }
            arrayList.add(ValueParameterDescriptorImpl.createWithDestructuringDeclarations(functionDescriptor, z10 ? null : valueParameterDescriptor, valueParameterDescriptor.getIndex(), valueParameterDescriptor.getAnnotations(), valueParameterDescriptor.getName(), substitute, valueParameterDescriptor.declaresDefaultValue(), valueParameterDescriptor.isCrossinline(), valueParameterDescriptor.isNoinline(), substitute2, z11 ? valueParameterDescriptor.getSource() : SourceElement.NO_SOURCE, valueParameterDescriptor instanceof ValueParameterDescriptorImpl.WithDestructuringDeclaration ? new b(((ValueParameterDescriptorImpl.WithDestructuringDeclaration) valueParameterDescriptor).getDestructuringVariables()) : null));
        }
        return arrayList;
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.CallableMemberDescriptor
    @NotNull
    public FunctionDescriptor copy(DeclarationDescriptor declarationDescriptor, Modality modality, DescriptorVisibility descriptorVisibility, CallableMemberDescriptor.Kind kind, boolean z10) {
        FunctionDescriptor build = newCopyBuilder().setOwner(declarationDescriptor).setModality(modality).setVisibility(descriptorVisibility).setKind(kind).setCopyOverrides(z10).build();
        if (build == null) {
            a(26);
        }
        return build;
    }

    /* JADX WARN: Type inference failed for: r2v3, types: [kotlin.reflect.jvm.internal.impl.descriptors.impl.FunctionDescriptorImpl$CopyConfiguration] */
    @Override // kotlin.reflect.jvm.internal.impl.descriptors.FunctionDescriptor, kotlin.reflect.jvm.internal.impl.descriptors.Substitutable
    public FunctionDescriptor substitute(@NotNull TypeSubstitutor typeSubstitutor) {
        if (typeSubstitutor == null) {
            a(22);
        }
        return typeSubstitutor.isEmpty() ? this : e(typeSubstitutor).setOriginal((CallableMemberDescriptor) getOriginal()).setPreserveSourceElement().setJustForTypeSubstitution(true).build();
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorNonRootImpl, kotlin.reflect.jvm.internal.impl.descriptors.impl.DeclarationDescriptorImpl, kotlin.reflect.jvm.internal.impl.descriptors.DeclarationDescriptor
    @NotNull
    public FunctionDescriptor getOriginal() {
        FunctionDescriptor functionDescriptor = this.L;
        FunctionDescriptor original = functionDescriptor == this ? this : functionDescriptor.getOriginal();
        if (original == null) {
            a(20);
        }
        return original;
    }
}
