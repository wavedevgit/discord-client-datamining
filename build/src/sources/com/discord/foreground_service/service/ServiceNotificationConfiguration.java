package com.discord.foreground_service.service;

import java.util.List;
import java.util.Map;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
import sr.a;
@Metadata(d1 = {"\u0000<\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010 \n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0015\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0006\b\u0080\b\u0018\u0000 '2\u00020\u0001:\u0004'()*BA\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\b\u0010\u0004\u001a\u0004\u0018\u00010\u0003\u0012\u0006\u0010\u0005\u001a\u00020\u0006\u0012\b\u0010\u0007\u001a\u0004\u0018\u00010\b\u0012\f\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\n\u0012\u0006\u0010\u000b\u001a\u00020\f¢\u0006\u0004\b\r\u0010\u000eJ\t\u0010\u001a\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u001b\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\t\u0010\u001c\u001a\u00020\u0006HÆ\u0003J\u000b\u0010\u001d\u001a\u0004\u0018\u00010\bHÆ\u0003J\u000f\u0010\u001e\u001a\b\u0012\u0004\u0012\u00020\b0\nHÆ\u0003J\t\u0010\u001f\u001a\u00020\fHÆ\u0003JO\u0010 \u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u00032\b\b\u0002\u0010\u0005\u001a\u00020\u00062\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\b2\u000e\b\u0002\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\n2\b\b\u0002\u0010\u000b\u001a\u00020\fHÆ\u0001J\u0013\u0010!\u001a\u00020\"2\b\u0010#\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010$\u001a\u00020%HÖ\u0001J\t\u0010&\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u000f\u0010\u0010R\u0013\u0010\u0004\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0010R\u0011\u0010\u0005\u001a\u00020\u0006¢\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0013\u0010\u0007\u001a\u0004\u0018\u00010\b¢\u0006\b\n\u0000\u001a\u0004\b\u0014\u0010\u0015R\u0017\u0010\t\u001a\b\u0012\u0004\u0012\u00020\b0\n¢\u0006\b\n\u0000\u001a\u0004\b\u0016\u0010\u0017R\u0011\u0010\u000b\u001a\u00020\f¢\u0006\b\n\u0000\u001a\u0004\b\u0018\u0010\u0019¨\u0006+"}, d2 = {"Lcom/discord/foreground_service/service/ServiceNotificationConfiguration;", "", "title", "", "content", "priority", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Priority;", "contentAction", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Action;", "auxiliaryActions", "", "type", "Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Type;", "<init>", "(Ljava/lang/String;Ljava/lang/String;Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Priority;Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Action;Ljava/util/List;Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Type;)V", "getTitle", "()Ljava/lang/String;", "getContent", "getPriority", "()Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Priority;", "getContentAction", "()Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Action;", "getAuxiliaryActions", "()Ljava/util/List;", "getType", "()Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Type;", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "equals", "", "other", "hashCode", "", "toString", "Companion", "Action", "Priority", "Type", "foreground_service_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ServiceNotificationConfiguration {
    @NotNull
    public static final Companion Companion = new Companion(null);
    @NotNull
    private final List<Action> auxiliaryActions;
    private final String content;
    private final Action contentAction;
    @NotNull
    private final Priority priority;
    @NotNull
    private final String title;
    @NotNull
    private final Type type;

    @Metadata(d1 = {"\u0000*\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0003\n\u0002\u0010$\n\u0002\b\u000e\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u0002\b\u0086\b\u0018\u00002\u00020\u0001B5\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0003\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0003\u0012\u0012\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030\u0007¢\u0006\u0004\b\b\u0010\tJ\t\u0010\u0010\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0011\u001a\u00020\u0003HÆ\u0003J\u000b\u0010\u0012\u001a\u0004\u0018\u00010\u0003HÆ\u0003J\u0015\u0010\u0013\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030\u0007HÆ\u0003J?\u0010\u0014\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00032\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u00032\u0014\b\u0002\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030\u0007HÆ\u0001J\u0013\u0010\u0015\u001a\u00020\u00162\b\u0010\u0017\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010\u0018\u001a\u00020\u0019HÖ\u0001J\t\u0010\u001a\u001a\u00020\u0003HÖ\u0001R\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\n\u0010\u000bR\u0011\u0010\u0004\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000bR\u0013\u0010\u0005\u001a\u0004\u0018\u00010\u0003¢\u0006\b\n\u0000\u001a\u0004\b\r\u0010\u000bR\u001d\u0010\u0006\u001a\u000e\u0012\u0004\u0012\u00020\u0003\u0012\u0004\u0012\u00020\u00030\u0007¢\u0006\b\n\u0000\u001a\u0004\b\u000e\u0010\u000f¨\u0006\u001b"}, d2 = {"Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Action;", "", "tag", "", "taskName", "title", "data", "", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/util/Map;)V", "getTag", "()Ljava/lang/String;", "getTaskName", "getTitle", "getData", "()Ljava/util/Map;", "component1", "component2", "component3", "component4", "copy", "equals", "", "other", "hashCode", "", "toString", "foreground_service_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Action {
        @NotNull
        private final Map<String, String> data;
        @NotNull
        private final String tag;
        @NotNull
        private final String taskName;
        private final String title;

        public Action(@NotNull String tag, @NotNull String taskName, String str, @NotNull Map<String, String> data) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(taskName, "taskName");
            Intrinsics.checkNotNullParameter(data, "data");
            this.tag = tag;
            this.taskName = taskName;
            this.title = str;
            this.data = data;
        }

        /* JADX WARN: Multi-variable type inference failed */
        public static /* synthetic */ Action copy$default(Action action, String str, String str2, String str3, Map map, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                str = action.tag;
            }
            if ((i10 & 2) != 0) {
                str2 = action.taskName;
            }
            if ((i10 & 4) != 0) {
                str3 = action.title;
            }
            if ((i10 & 8) != 0) {
                map = action.data;
            }
            return action.copy(str, str2, str3, map);
        }

        @NotNull
        public final String component1() {
            return this.tag;
        }

        @NotNull
        public final String component2() {
            return this.taskName;
        }

        public final String component3() {
            return this.title;
        }

        @NotNull
        public final Map<String, String> component4() {
            return this.data;
        }

        @NotNull
        public final Action copy(@NotNull String tag, @NotNull String taskName, String str, @NotNull Map<String, String> data) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(taskName, "taskName");
            Intrinsics.checkNotNullParameter(data, "data");
            return new Action(tag, taskName, str, data);
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof Action) {
                Action action = (Action) obj;
                return Intrinsics.areEqual(this.tag, action.tag) && Intrinsics.areEqual(this.taskName, action.taskName) && Intrinsics.areEqual(this.title, action.title) && Intrinsics.areEqual(this.data, action.data);
            }
            return false;
        }

        @NotNull
        public final Map<String, String> getData() {
            return this.data;
        }

        @NotNull
        public final String getTag() {
            return this.tag;
        }

        @NotNull
        public final String getTaskName() {
            return this.taskName;
        }

        public final String getTitle() {
            return this.title;
        }

        public int hashCode() {
            int hashCode = ((this.tag.hashCode() * 31) + this.taskName.hashCode()) * 31;
            String str = this.title;
            return ((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.data.hashCode();
        }

        @NotNull
        public String toString() {
            String str = this.tag;
            String str2 = this.taskName;
            String str3 = this.title;
            Map<String, String> map = this.data;
            return "Action(tag=" + str + ", taskName=" + str2 + ", title=" + str3 + ", data=" + map + ")";
        }
    }

    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\b\u0086\u0003\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003¨\u0006\u0004"}, d2 = {"Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Companion;", "", "<init>", "()V", "foreground_service_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Priority;", "", "<init>", "(Ljava/lang/String;I)V", "HIGH", "MEDIUM", "LOW", "foreground_service_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Priority {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ Priority[] $VALUES;
        public static final Priority HIGH = new Priority("HIGH", 0);
        public static final Priority MEDIUM = new Priority("MEDIUM", 1);
        public static final Priority LOW = new Priority("LOW", 2);

        private static final /* synthetic */ Priority[] $values() {
            return new Priority[]{HIGH, MEDIUM, LOW};
        }

        static {
            Priority[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
        }

        private Priority(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static Priority valueOf(String str) {
            return (Priority) Enum.valueOf(Priority.class, str);
        }

        public static Priority[] values() {
            return (Priority[]) $VALUES.clone();
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    @Metadata(d1 = {"\u0000\f\n\u0002\u0018\u0002\n\u0002\u0010\u0010\n\u0002\b\u0006\b\u0086\u0081\u0002\u0018\u00002\b\u0012\u0004\u0012\u00020\u00000\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003j\u0002\b\u0004j\u0002\b\u0005j\u0002\b\u0006¨\u0006\u0007"}, d2 = {"Lcom/discord/foreground_service/service/ServiceNotificationConfiguration$Type;", "", "<init>", "(Ljava/lang/String;I)V", "FILE_UPLOAD", "VOICE_CALL", "SCREEN_SHARE", "foreground_service_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class Type {
        private static final /* synthetic */ EnumEntries $ENTRIES;
        private static final /* synthetic */ Type[] $VALUES;
        public static final Type FILE_UPLOAD = new Type("FILE_UPLOAD", 0);
        public static final Type VOICE_CALL = new Type("VOICE_CALL", 1);
        public static final Type SCREEN_SHARE = new Type("SCREEN_SHARE", 2);

        private static final /* synthetic */ Type[] $values() {
            return new Type[]{FILE_UPLOAD, VOICE_CALL, SCREEN_SHARE};
        }

        static {
            Type[] $values = $values();
            $VALUES = $values;
            $ENTRIES = a.a($values);
        }

        private Type(String str, int i10) {
        }

        @NotNull
        public static EnumEntries getEntries() {
            return $ENTRIES;
        }

        public static Type valueOf(String str) {
            return (Type) Enum.valueOf(Type.class, str);
        }

        public static Type[] values() {
            return (Type[]) $VALUES.clone();
        }
    }

    public ServiceNotificationConfiguration(@NotNull String title, String str, @NotNull Priority priority, Action action, @NotNull List<Action> auxiliaryActions, @NotNull Type type) {
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(priority, "priority");
        Intrinsics.checkNotNullParameter(auxiliaryActions, "auxiliaryActions");
        Intrinsics.checkNotNullParameter(type, "type");
        this.title = title;
        this.content = str;
        this.priority = priority;
        this.contentAction = action;
        this.auxiliaryActions = auxiliaryActions;
        this.type = type;
    }

    public static /* synthetic */ ServiceNotificationConfiguration copy$default(ServiceNotificationConfiguration serviceNotificationConfiguration, String str, String str2, Priority priority, Action action, List list, Type type, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            str = serviceNotificationConfiguration.title;
        }
        if ((i10 & 2) != 0) {
            str2 = serviceNotificationConfiguration.content;
        }
        if ((i10 & 4) != 0) {
            priority = serviceNotificationConfiguration.priority;
        }
        if ((i10 & 8) != 0) {
            action = serviceNotificationConfiguration.contentAction;
        }
        List<Action> list2 = list;
        if ((i10 & 16) != 0) {
            list2 = serviceNotificationConfiguration.auxiliaryActions;
        }
        if ((i10 & 32) != 0) {
            type = serviceNotificationConfiguration.type;
        }
        List list3 = list2;
        Type type2 = type;
        return serviceNotificationConfiguration.copy(str, str2, priority, action, list3, type2);
    }

    @NotNull
    public final String component1() {
        return this.title;
    }

    public final String component2() {
        return this.content;
    }

    @NotNull
    public final Priority component3() {
        return this.priority;
    }

    public final Action component4() {
        return this.contentAction;
    }

    @NotNull
    public final List<Action> component5() {
        return this.auxiliaryActions;
    }

    @NotNull
    public final Type component6() {
        return this.type;
    }

    @NotNull
    public final ServiceNotificationConfiguration copy(@NotNull String title, String str, @NotNull Priority priority, Action action, @NotNull List<Action> auxiliaryActions, @NotNull Type type) {
        Intrinsics.checkNotNullParameter(title, "title");
        Intrinsics.checkNotNullParameter(priority, "priority");
        Intrinsics.checkNotNullParameter(auxiliaryActions, "auxiliaryActions");
        Intrinsics.checkNotNullParameter(type, "type");
        return new ServiceNotificationConfiguration(title, str, priority, action, auxiliaryActions, type);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ServiceNotificationConfiguration) {
            ServiceNotificationConfiguration serviceNotificationConfiguration = (ServiceNotificationConfiguration) obj;
            return Intrinsics.areEqual(this.title, serviceNotificationConfiguration.title) && Intrinsics.areEqual(this.content, serviceNotificationConfiguration.content) && this.priority == serviceNotificationConfiguration.priority && Intrinsics.areEqual(this.contentAction, serviceNotificationConfiguration.contentAction) && Intrinsics.areEqual(this.auxiliaryActions, serviceNotificationConfiguration.auxiliaryActions) && this.type == serviceNotificationConfiguration.type;
        }
        return false;
    }

    @NotNull
    public final List<Action> getAuxiliaryActions() {
        return this.auxiliaryActions;
    }

    public final String getContent() {
        return this.content;
    }

    public final Action getContentAction() {
        return this.contentAction;
    }

    @NotNull
    public final Priority getPriority() {
        return this.priority;
    }

    @NotNull
    public final String getTitle() {
        return this.title;
    }

    @NotNull
    public final Type getType() {
        return this.type;
    }

    public int hashCode() {
        int hashCode = this.title.hashCode() * 31;
        String str = this.content;
        int hashCode2 = (((hashCode + (str == null ? 0 : str.hashCode())) * 31) + this.priority.hashCode()) * 31;
        Action action = this.contentAction;
        return ((((hashCode2 + (action != null ? action.hashCode() : 0)) * 31) + this.auxiliaryActions.hashCode()) * 31) + this.type.hashCode();
    }

    @NotNull
    public String toString() {
        String str = this.title;
        String str2 = this.content;
        Priority priority = this.priority;
        Action action = this.contentAction;
        List<Action> list = this.auxiliaryActions;
        Type type = this.type;
        return "ServiceNotificationConfiguration(title=" + str + ", content=" + str2 + ", priority=" + priority + ", contentAction=" + action + ", auxiliaryActions=" + list + ", type=" + type + ")";
    }
}
